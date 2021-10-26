// Application
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(bodyParser.json());

// SMS
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = 0;
const weloloPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilio_client = require('twilio')(accountSid, twilioAuthToken);

// Gravity
const sdk = require("emergepay-sdk");
const oid = process.env.GRAVITY_OID;
const gravityAuthToken = process.env.GRAVITY_AUTH_TOKEN;
const environmentUrl = process.env.GRAVITY_ENVIRONMENT_URL;
const emergepay = new sdk.emergepaySdk({
  oid: oid,
  authToken: gravityAuthToken,
  environmentUrl: environmentUrl,
});

// DB
const mysql = require("mysql");
const PORT = process.env.PORT || 3001;
const db = mysql.createPool({
  host: "localhost",
  user: "WeloloApp",
  password: "password",
  database: "Welolo"
});

app.post("/api/dummy_endpoint"), (req,res) => {
  res.header('Content-type', 'application/json');
  res.send(JSON.stringify({ success: false }));
}
// send a payment
app.post("/start-transaction", (req,res) => {
  var amount = String(""+req.body.sender_quantity)
  var config = {
    transactionType: sdk.TransactionType.CreditAuth,
    method: "modal",
    fields: [
      {
        id: "base_amount",
        value: amount
      },
      {
        id: "external_tran_id",
        value: emergepay.getExternalTransactionId()
      }
    ]
  }
  
  emergepay.startTransaction(config)
    .then(function (transactionToken) {
      res.send({
        transactionToken: transactionToken
      })
    })
    .catch(function (err) {
      console.log(err);
      res.send(err);
    })
});

// send message
app.post("/api/send_message", (req,res) => {
  res.header('Content-Type', 'application/json');
  twilio_client.messages
    .create({
      from: weloloPhoneNumber,
      to: req.body.recipient,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      res.send(JSON.stringify({errormessage: err, success: false }));
    });
});

app.get("/test_database", (req, res) => {
  db.query("SELECT 1", (err, results, fields) => {
    if(err) {
      res.json({message:"connection to the database was unsuccessful"});
    } else { 
      res.json({message:"successfully connected to the database"});
    }
  })
})

app.get("/test", (req, res) => {
  res.json({ message: "This endpoint is working properly!" });
  //TODO: Replace with our own functionality and change endpoint name
});

app.get("/payment_successful", (req, res) => {
  res.json({message: "success"});
});

//TODO: Add other endpoints here

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

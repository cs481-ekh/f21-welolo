// server/index.js
require('dotenv').config();
import express from "express";
import { urlencoded, json } from 'body-parser';
const app = express();

// SMS
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const weloloPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilio_client = require('twilio')(accountSid, authToken);

// Gravity
const oid = process.env.GRAVITY_OID;
const authToken = provess.env.GRAVITY_AUTH_TOKEN;
const environmentUrl = provess.env.GRAVITY_ENVIRONMENT_URL;
const emergepay = new SharedWorker.emergepaySdk({
  oid: oid,
  authToken: authToken,
  environmentUrl: environmentUrl
});

// DB
import { createPool } from "mysql";
const PORT = process.env.PORT || 3001;
const db = createPool({
  host: "localhost",
  user: "WeloloApp",
  password: "password",
  database: "Welolo"
});


app.use(urlencoded({extended:false}));
app.use(json());

app.post("/api/dummy_endpoint"), (req,res) => {
  res.header('Content-type', 'application/json');
  res.send(JSON.stringify({ success: false }));
}
// send a payment
app.post("/api/send_payment", (req,res) => {
  res.header('Content-Type','application/json');
  res.send(JSON.stringify({ success: true }));
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
      console.log(err);
      res.send(JSON.stringify({ success: false }));
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

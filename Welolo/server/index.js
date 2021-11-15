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
var externalTransactionId = null;
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
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// DB Utils
const merchantDataQuery = "SELECT mm.id,mm.item_name,mm.item_description,mm.item_cost,mm.qty_avail,mm.item_image_url FROM merchantmenu AS mm INNER JOIN merchants AS m ON mm.merchant_id=m.id WHERE m.id=";
const merchantIdQuery = "SELECT * FROM merchants";

app.post("/api/dummy_endpoint"), (req,res) => {
  res.header('Content-type', 'application/json');
  res.send(JSON.stringify({ success: false }));
}
// send a payment
app.post("/start-transaction", (req,res) => {
  var amount = String(req.body.message.sender_quantity)
  externalTransactionId = emergepay.getExternalTransactionId()
  var config = {
    transactionType: sdk.TransactionType.CreditAuth,
    method: "hostedFields",
    fields: [
      {
        id: "base_amount",
        value: amount
      },
      {
        id: "external_tran_id",
        value: externalTransactionId
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



// Send acknowledgement about successful payment back to gravity
app.get("/acknowledge-transaction", (req,res) => {
  //Make into its own endpoint and set the externalTransaction id to nothing once it goes through properly.
  //We will also need to check that it isn't nothing before we are able to use it.
  if(externalTransactionId == null)
  {
    return false;
  }
  else
  {
    console.log("Acknowledging Transaction!")
    emergepay.acknowledge(externalTransactionId)
        .catch(function(error) {
        console.log("Acknowledgement failed, try again");
    });

    return true;
  }
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

app.get("/api/merchant_data", (req,res) => {
  res.header('Content-Type', 'application/json');
  var merchantId = req.query.m_id;
  if(merchantId) {
    db.query(merchantDataQuery+merchantId, (err,results,fields) => {
      if(err) {
        console.log(err);
        res.json({message:"Failed to query the database. See errors:\n"+err});
      }
      res.json(results);
    });
  } else {
    res.json({error:"merchant ID is required"});
  }
});

app.get("/api/merchants", (req,res) => {
  db.query("SELECT * FROM merchants", (err, results, fields) => {
    if(err) {
      console.log(err);
      res.json({error:"Could not complete the query. See error:\n"+err});
    } else { 
      db.query(merchantIdQuery, (err,results, fields) => {
        if(err){
          res.json({message:"Failed to query the database. See errors:\n"+err});
        }
        res.json(results);
      });
    }
  })
})

app.get("/test", (req, res) => {
  res.json({ message: "This endpoint is working properly!" });
});

app.get("/payment_successful", (req, res) => {
  res.json({message: "success"});
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

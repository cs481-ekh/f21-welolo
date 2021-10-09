// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const twilio_client = require('twilio')(
  "ACa515f700d0d94b51e2f49edb8b3273cd",
  "eb412a5cc685198dfcad87ae3d728826"
);
const mysql = require("mysql");
const app = express();
const PORT = process.env.PORT || 3001;
const db = mysql.createPool({
  host: "localhost",
  user: "WeloloApp",
  password: "password",
  database: "Welolo"
});


console.log(process.env);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// send message
app.post("/api/send_message", (req,res) => {
  res.header('Content-Type', 'application/json');
  twilio_client.messages
    .create({
      from: "+15076505970",
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

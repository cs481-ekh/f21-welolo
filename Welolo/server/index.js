// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const mysql = require("mysql");
const db = mysql.createPool({
  host: "localhost",
  user: "WeloloApp",
  password: "password",
  database: "Welolo"
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
});

app.post("/initiate_payment", (req, res) => {
  //TODO: Add payment processor functionality

  //Currently looking into how to possibly send JSON data into this endpoint
  //since we will have all the user entered transaction details to send to it
});

app.get("/payment_successful", (req, res) => {
  res.json({message: "success"});
});

//TODO: Add other endpoints here

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

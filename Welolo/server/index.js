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
  //TODO: Replace with our own functionality and change endpoint name
});

app.post("/", (req, res) => {
  res.json({ message: "Form is valid!"});
  //TODO: Replace with our own functionality and change endpoint name
});


app.get("/payment_successful", (req, res) => {
  res.json({message: "success"});
});

//TODO: Add other endpoints here

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

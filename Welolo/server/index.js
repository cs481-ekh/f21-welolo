// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

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

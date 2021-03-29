const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/howtoplay", (req, res) => {
  Score.find({}, (err, docs) => {
    res.send(docs);
  }
    .catch((err) => {
      console.log("There was an error", err);
      res.status(500).send(err);
    });
});
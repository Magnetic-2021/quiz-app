const mongoose = require("mongoose");
const express = require("express");
const { Question } = require("../models/Question");
const router = express.Router();

router.get("/questions", (req, res) => {
  Question.find({}, (err, docs) => {
    const questionList = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * docs.length);
        console.log(docs[randomNumber]);
        questionList.push(docs[randomNumber]);
    }
    res.send(questionList);
  });
});

module.exports = router;

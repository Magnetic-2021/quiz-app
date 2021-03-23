const mongoose = require("mongoose");
const express = require("express");
const { request } = require("express");
const { Score } = require("../models/Score");
const router = express.Router();

router.get('/scores', (req, res) => {

    Score.find({}, (err, docs) => {
        console.log(err, docs);
        res.send(docs)
    }).sort({ score: -1 }).limit(10);

});



router.post('/score', (req, res) => {
    const newScore = req.body;
    console.log(newScore);
    Score.create(newScore).then((obj) => {
        console.log("New score is created", obj);
        res.status(200).send({ message: "You're score is saved" });
    }).catch((err) => {
        console.log("There was an error", err);
        res.status(500).send(err);
    });
});

module.exports = router;


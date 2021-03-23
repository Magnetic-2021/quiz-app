const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const router = express.Router();

router.post("/user/signup", (req, res) => {
  const newUser = req.body;

  // check if user is all ready in the system
  // check if email is all ready used
  // hash password
  bcrypt.hash(req.body.password, 4, (err, hash) => {
    if (!err) {
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
      })
        .then((obj) => {
          console.log("signup", obj);
          res.status(200).send({ message: "Account Created" });
        })
        .catch((err) => {
          console.log("Error", err);
          res.status(500).send({ message: "Account Error", err });
        });
    } else {
      console.log("Error", err);
      res.status(500).send({ message: "Unable to hash", err });
    }
  });
});

router.post("/user/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, userRecord) => {
    console.log(userRecord);
    if (!userRecord) {
      res.status(200).send({ message: "User does not exist", auth: false });
    } else {
      console.log("here");
      bcrypt.compare(password, userRecord.password, (err, result) => {
        console.log(result);
        res.status(200).send({ auth: result });
      });
    }
  });
});

module.exports = router;

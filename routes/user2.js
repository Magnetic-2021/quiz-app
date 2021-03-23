const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router;

router.post("/user/login", (req, res) => {
  const { username, password } = req.body;

  const userRecord = User.findOne({ username });

  if (!userRecord) {
    res.status(200).send({ message: "User does not exist", auth: false });
  } else {
    bcrypt.compare(password, userRecord.passwordHash, (err, result) => {
      if (result) {
        res.status(200).send({ auth: true });
      } else {
        res.status(200).send({ auth: false });
      }
    });
  }
});

const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const { User } = require("../models/User");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/user/signup", (req, res) => {
  const newUser = req.body;

  // TODO: check if user is all ready in the system
  // TODO: check if email is all ready used
  const imgBin = req.body.avatarImg
    ? new Buffer(req.body.avatarImg.split(",")[1], "base64")
    : null;
  // hash password
  bcrypt.hash(req.body.password, 4, (err, hash) => {
    if (!err) {
      User.create({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        avatar: imgBin,
      })
        .then((userRecord) => {
          res.status(200).send({
            message: "Account Created",
            success: true,
            user: createClientUser(userRecord),
          });
        })
        .catch((err) => {
          console.log("Error", err);
          res
            .status(500)
            .send({ message: "Account Error", success: false, err });
        });
    } else {
      console.log("Error", err);
      res.status(500).send({ message: "Unable to hash", success: false, err });
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
      bcrypt.compare(password, userRecord.password, (err, result) => {
        console.log(result);
        res.status(200).send({
          auth: result,
          user: createClientUser(userRecord),
        });
      });
    }
  });
});

router.get("/user/:id", (req, res) => {
  User.findOne({ _id: req.params.id }, (err, UserRecord) => {
    const { username, _id, avatar } = UserRecord;
    res.send({ username, _id, avatar });
  });
});

const createClientUser = ({ password, ...rest }) => ({
  timeStamp: Date.now(),
  ...rest,
});

module.exports = router;

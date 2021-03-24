const mongoose = require("mongoose");
const express = require("express");
const { User } = require("../models/User");
const router = express.Router();

router.post("/user", (req, res) => {
  const newUser = req.body;
  
    
  User.create({username:req.body.username, email:req.body.email, password:req.body.password})
    .then((obj) => {
    
      console.log("signup");
      res.status(200).send({ message: "Account Created" });
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(500).send({ message: "Account Error", err });
    });
});

module.exports = router;

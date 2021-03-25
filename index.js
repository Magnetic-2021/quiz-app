const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { connect } = require("./db/connection");
const questionRouter = require("./routes/questionRouter");
const scoreRouter = require("./routes/scoreRouter");
const userRouter = require("./routes/user");
const { timeStamp } = require("./middlewear/auth");
connect();
app.use(cors());
app.use(express.json());
// app.use(timeStamp);
app.use("/", userRouter);
app.use("/", scoreRouter);
app.use("/", questionRouter);

app.listen(5000, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("listening on port 5000");
  }
});

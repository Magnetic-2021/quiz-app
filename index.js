const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const { connect } = require("./db/connection");
const questionRouter = require("./routes/questionRouter");
const scoreRouter = require("./routes/scoreRouter");
const userRouter = require("./routes/user");
const path = require("path");

connect();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

app.use("/user", userRouter);
app.use("/score", scoreRouter);
app.use("/questions", questionRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log("Online");
  }
});

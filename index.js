const express = require("express");
const mongoose = require("mongoose");
const app = express();
const {connect} = require("./db/connection");
const scoreRouter = require("./routes/scoreRouter");
const userRouter = require("./routes/user");
connect();

app.use(express.json());
app.use("/", userRouter);
app.use('/', scoreRouter);

app.listen(5000,(err) =>  {
if (err) {
    console.log("error", err)
} else {
    console.log("listening on port 5000")
}
})




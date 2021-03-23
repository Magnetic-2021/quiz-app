const express = require("express");
const app = express();
const scoreRouter = require("./routes/scoreRouter");
const questionRouter = require("./routes/questionRouter");
const {connect} = require("./db/connection");

connect();
app.use(express.json());
app.use('/', scoreRouter);
app.use('/', questionRouter);

app.listen(5000,(err) =>  {
if (err) {
    console.log("error", err)
} else {
    console.log("listening on port 5000")
}
})


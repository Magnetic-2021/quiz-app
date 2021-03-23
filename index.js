const express = require("express");
const app = express();
const {connect} = require("./db/connection");
const userRouter = require("./routes/user");
connect();

app.use(express.json());
app.use("/", userRouter);

app.listen(5000,(err) =>  {
if (err) {
    console.log("error", err)
} else {
    console.log("listening on port 5000")
}
})




const express = require("express");
const app = express();

app.listen(5000,(err) =>  {
if (err) {
    console.log("error", err)
} else {
    console.log("listening on port 5000")
}
})


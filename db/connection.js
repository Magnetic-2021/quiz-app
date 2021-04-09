if (process.env.NODE_ENV === "dev") {
  require("dotenv").config();
}
const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(
    process.env.DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("connection successful");
      }
    }
    //   .then(() => {console.log("connection to database successful")})
    //   .catch((err) => console.log("connection to the database failed", err))
  );
};

module.exports = { connect };

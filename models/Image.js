const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  fieldname: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
});

const Image = mongoose.model("Images", ImageSchema);

module.exports = { Image };

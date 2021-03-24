const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array,
});

const Question = mongoose.model("Questions", questionSchema);

module.exports = {Question};
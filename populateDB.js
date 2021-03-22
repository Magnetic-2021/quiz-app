const fetch = require("node-fetch");
const { Question } = require("./models/Question");
const { connect } = require("./db/connection");

connect();

const populateDB = async () => {
  const data = await fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((json) => json.results)
    .catch((err) => console.log("failed to fetch API data", err));
  console.log(`received ${data.length} questions`);
  Question.insertMany(data).then((obj) =>
    console.log(`added ${obj.length} to the database`)
  ).catch((err) => console.log("error writing to database", err));
};

populateDB();

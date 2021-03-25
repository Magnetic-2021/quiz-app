import React, { useState, useEffect } from "react";

import "./Quiz.css";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [gameState, setGameState] = useState("loading");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  useEffect(() => {
    console.log("about to ffetxh");
    fetch("http://localhost:5000/questions")
      .then((res) => res.json())
      .then((data) => {
        console.log("got data", data);
        setQuestions(data);
        setGameState("active");
      });
  }, []);

  const nextQuestion = () => {
    if (questions[currQuestion].correct_answer === optionChosen) {
      setScore(score + 1);
    }
    alert(score);
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (questions[currQuestion].correct_answer === optionChosen) {
      setScore(score + 1);
    }
    console.log("here");
    setGameState("finished");
  };

  return gameState === "loading" ? (
    "loading"
  ) : (
    <div className="Quiz">
      <h1>{questions[currQuestion].question}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {questions[currQuestion].incorrect_answers[0]}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {questions[currQuestion].incorrect_answers[1]}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {questions[currQuestion].incorrect_answers[2]}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {questions[currQuestion].correct_answer}
        </button>
      </div>
      {currQuestion === questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}> Next Question </button>
      )}
      <div>{gameState === "finished" && <p>Ended</p>}</div>
    </div>
  );
};

export default Quiz;

import React, { useState, useEffect } from "react";
import "./Quiz.css";
import bomb from "../../images/bomb.svg";
import Aellipse from "../../images/Aellipse.svg";
import Bellipse from "../../images/Bellipse.svg";
import Cellipse from "../../images/Cellipse.svg";
import Dellipse from "../../images/Dellipse.svg";

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
      <h1 className="questionTitle">{questions[currQuestion].question}</h1>
      <div className="timerContainer">
        <img src={bomb} alt="bomb" className="bombTimerLogo" />
      </div>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          <img src={Aellipse} alt="Aellipse" className="ellipseOption"/>
          {questions[currQuestion].incorrect_answers[0]}
        </button>
        <button onClick={() => setOptionChosen("B")}>
        <img src={Bellipse} alt="Bellipse" className="ellipseOption"/>
          {questions[currQuestion].incorrect_answers[1]}
        </button>
        <button onClick={() => setOptionChosen("C")}>
        <img src={Cellipse} alt="Cellipse" className="ellipseOption"/>
          {questions[currQuestion].incorrect_answers[2]}
        </button>
        <button onClick={() => setOptionChosen("D")}>
        <img src={Dellipse} alt="Dellipse" className="ellipseOption"/>
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

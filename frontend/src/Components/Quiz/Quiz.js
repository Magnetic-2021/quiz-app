import React, { useState, useEffect, useRef } from "react";
import explode from "./explode";
import Timer from "./../Timer/Timer";
import "./Quiz.css";
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
  const [timer, setTimer] = useState(1000);
  const [timerState, setTimerState] = useState("idle");
  const [showBomb, setShowBomb] = useState(true);

  const bombRef = useRef();

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

  useEffect(() => {
    if (timerState === "active") {
      if (timer === 0) {
        const bombPosition = bombRef.current.children[1].getBoundingClientRect();
        const y =
          10 +
          bombPosition.y +
          bombPosition.height / 2 -
          window.innerHeight / 2 +
          window.scrollY;
        // const x = bombPosition.x + bombPosition.width / 2;
        explode(0, y);
        setTimeout(() => {
          setShowBomb(false);
        }, 900);

        setTimerState("idle");
      } else {
        setTimeout(() => {
          setTimer(timer - 100);
        }, 100);
      }
    }
  }, [timer, timerState]);

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
    <div ref={bombRef} className="Quiz">
      <h1 className="questionTitle">{questions[currQuestion].question}</h1>
      <Timer
        showBomb={showBomb}
        time={`00:${Math.floor(timer / 1000)
          .toString()
          .padStart(2, "0")}`}
      />
      <div className="options">
        <button onClick={() => setTimerState("active")}>  
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

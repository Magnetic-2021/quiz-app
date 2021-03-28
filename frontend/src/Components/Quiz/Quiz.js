import React, { useState, useEffect, useRef } from "react";
import explode from "./explode";
import Timer from "./../Timer/Timer";
import "./Quiz.css";
import Aellipse from "../../images/Aellipse.svg";
import Bellipse from "../../images/Bellipse.svg";
import Cellipse from "../../images/Cellipse.svg";
import Dellipse from "../../images/Dellipse.svg";
import shuffleOptions from "../../lib/shuffleOptions";
import { checkAnimation, checkBurst } from "./answerAnimation";

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState();
  const [options, setOptions] = useState();
  const [gameState, setGameState] = useState("loading");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const [timer, setTimer] = useState(6000);
  const [timerState, setTimerState] = useState("idle");
  const [showBomb, setShowBomb] = useState(true);

  const bombRef = useRef();

  useEffect(() => {
    if (!questions) {
      console.log("about to fetch");
      fetch("http://localhost:5000/questions")
        .then((res) => res.json())
        .then((data) => {
          console.log("got data", data);
          setQuestions(data);
          setGameState("active");
          setTimerState("active");
        });
    }
  }, []);

  useEffect(() => {
    if (gameState === "active") {
      console.log({ currQuestion });
      const [answers, correctIndex] = shuffleOptions(
        questions[currQuestion].correct_answer,
        questions[currQuestion].incorrect_answers
      );
      setOptions(answers);
      setCorrectAnswerIndex(correctIndex);
    }
  }, [gameState, currQuestion]);

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
        const timerFunc = setTimeout(() => {
          setTimer((prevState) => prevState - 100);
        }, 100);
      }
    }
  }, [timer, timerState]);

  useEffect(() => {
    if (gameState === "active" && optionChosen) {
      if (optionChosen === correctAnswerIndex) {
        // add points
        // add time?
        setTimer((prevState) => prevState + 6000);
      }
      setOptionChosen(null);
      setCurrQuestion(currQuestion + 1);
    }
  }, [optionChosen, gameState]);

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
        {options &&
          options.map((option, index) => {
            return (
              <button
                onClick={(event) => {
                  setOptionChosen(index);
                  checkAnimation.play();
                  checkBurst.play();
                }}
              >
                <img src={Aellipse} alt="Aellipse" className="ellipseOption" />
                {option}
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Quiz;

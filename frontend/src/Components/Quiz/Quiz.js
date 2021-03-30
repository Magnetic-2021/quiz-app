import React, { useState, useEffect, useRef } from "react";
import explode from "./explode";
import Timer from "./../Timer/Timer";
import "./Quiz.css";
import Aellipse from "../../images/Aellipse.svg";
import Bellipse from "../../images/Bellipse.svg";
import Cellipse from "../../images/Cellipse.svg";
import Dellipse from "../../images/Dellipse.svg";
import shuffleOptions from "../../lib/shuffleOptions";
import Replacer from "../../lib/Replacer";
import {
  checkAnimation,
  checkBurst,
  correctAnimation,
} from "./answerAnimation";

const time = {
  easy: 3000,
  medium: 5000,
  hard: 7000,
};
const points = {
  easy: 2,
  medium: 5,
  hard: 10,
};

const Quiz = () => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState();
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState();
  const [options, setOptions] = useState();
  const [gameState, setGameState] = useState("loading");
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState();
  const [timer, setTimer] = useState(10000);
  const [timerState, setTimerState] = useState("idle");
  const [showBomb, setShowBomb] = useState(true);
  const [optionStyles, setOptionStyles] = useState([]);
  const [answerProcessed, setAnswerProcessed] = useState(true);

  const bombRef = useRef();
  const timerRef = useRef();

  useEffect(() => {
    console.log("initial useEffect");
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
    console.log("in create question useEffect", { gameState, answerProcessed });
    if (gameState !== "loading") {
      if (answerProcessed) {
        setAnswerProcessed(false);
        console.log("creating question", { currQuestion });
        const [answers, correctIndex] = shuffleOptions(
          questions[currQuestion].correct_answer,
          questions[currQuestion].incorrect_answers
        );
        setOptions(answers);
        setCorrectAnswerIndex(correctIndex);
      }
    }
  }, [gameState, currQuestion, answerProcessed]);

  useEffect(() => {
    console.log("options style useEffect", options);
    if (options) {
      setOptionStyles(options.map(() => ({ opacity: "100%" })));
    }
  }, [options]);

  useEffect(() => {
    console.log("in timer useEffect");
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
        setGameState("finished");
        setTimerState("idle");
      } else {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          setTimer((prevState) => prevState - 100);
        }, 100);
      }
    } else if (timerState === "paused") {
      clearTimeout(timerRef.current);
    }
  }, [timer, timerState]);

  useEffect(() => {
    console.log("process answer useEffect", { gameState, optionChosen });
    if (gameState === "active" && optionChosen !== undefined) {
      console.log("**********");
      if (optionChosen === correctAnswerIndex) {
        setScore(
          (prevState) => prevState + points[questions[currQuestion].difficulty]
        );
        setTimer(
          (prevState) => prevState + time[questions[currQuestion].difficulty]
        );
      }
      setOptionChosen(null);
      setCurrQuestion(currQuestion + 1);
      setAnswerProcessed(true);
    }
  }, [optionChosen, gameState]);

  const handleAnswer = (event, answerIndex) => {
    console.log("handle answer");
    setTimerState("paused");
    setGameState("paused");
    // highlight chosen answer
    // fade incorrect answers
    setOptionStyles(
      options.map((o, index) => ({
        opacity: index === correctAnswerIndex ? "100%" : "0%",
      }))
    );

    setTimeout(() => {
      // update option chosen
      console.log("Runnin handle answer settimeout", { answerIndex });
      console.log({ optionChosen });
      setOptionChosen(answerIndex);
      setTimerState("active");
      setGameState("active");
    }, 1000);
  };

  return gameState === "loading" ? (
    <div className="loading-container">
      <div className="loader-circle"></div>
      <p className="loading-text">Loading...</p>
    </div>
  ) : (
    <div ref={bombRef} className="Quiz">
      {gameState !== "finished" && (
        <>
          <p className={`difficulty ${questions[currQuestion].difficulty}`}>
            {questions[currQuestion].difficulty}
          </p>
          <h1 className="questionTitle">{Replacer(questions[currQuestion].question)}</h1>
          <Timer
            score={score}
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
                    style={optionStyles[index]}
                    onClick={(event) => handleAnswer(event, index)}
                  >
                    <img
                      src={Aellipse}
                      alt="Aellipse"
                      className="ellipseOption"
                    />
                    {option}
                  </button>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;

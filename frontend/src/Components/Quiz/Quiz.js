import React, {useState, useContext} from "react";
import Questions from "./QuestionList";
import "./Quiz.css";

const Quiz = () =>{
   
    const[currQuestion, setCurrQuestion] = useState(0);
    const[optionChosen, setOptionChosen] = useState("");
    const [gameState, setGameState] = useState("home");
    const [score, setScore] = useState(0);

    const nextQuestion = () => {
        if (Questions[currQuestion].correct_answer === optionChosen){
           setScore(score + 1); 
        }
        alert(score);
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].correct_answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen");
    };

    return(
        <div className="Quiz">
            <h1>{Questions[currQuestion].question}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].incorrect_answers[0]}</button>
                <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].incorrect_answers[1]}</button>
                <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].incorrect_answers[2]}</button>
                <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].correct_answer}</button>
            </div>
            {currQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}>Finish Quiz</button>
            ) : (
                <button onClick={nextQuestion}> Next Question </button>
            )}
            
        </div>
    )
}

export default Quiz;
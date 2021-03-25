import React, {useContext} from "react";
import QuestionList from "../Quiz/QuestionList";
import "../Quiz/Quiz.css";

const EndScreen = () => {
    const restartQuiz = () => {
        setScore(0)
        setGameState("home");
    }
    return(
        <div className="EndScreen">
            {" "}
            <h1>Quiz Finished</h1>
            <h3> { score } / {QuestionList.length} </h3>
            <button onClick={restartQuiz}> Restart Quiz</button>
        </div>
    );
}

export default EndScreen;
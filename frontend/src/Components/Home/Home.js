import React, { useContext } from "react";
import QuizContext from "../Quiz/Contexts";
import "../Quiz/Quiz.css";

const Home = () =>{
    const {setGameState} = useContext(QuizContext);
    return(
        <div className="Home">
            <button onClick={() =>{
                setGameState("quiz");
            }}>Start Quiz</button>
        </div>
    );
}
export default Home;
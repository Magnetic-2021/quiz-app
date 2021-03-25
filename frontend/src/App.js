import "./App.css";
import React, {useState} from "react";
import "antd/dist/antd.css";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import QuizContext from "./Components/Quiz/Contexts";
import EndScreen from "./Components/EndScreen/EndScreen";
import "./Components/Quiz/Quiz.css";

function App() {
   const [gameState, setGameState] = useState("home");
   const [score, setScore] = useState(0);

  return(
     <div className="App">
        
        <QuizContext.Provider 
        value={{gameState, setGameState, score, setScore}}> 
        {gameState === "home" && <Home />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
        </QuizContext.Provider>

     </div>
  );
}

export default App;

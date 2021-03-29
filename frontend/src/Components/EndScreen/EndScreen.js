import Avatar from "../Avatar/Avatar";

const EndScreen = () => {
  // const playAgain = () => {
  //     setScore(0)
  //     setGameState("home");
  // }
  return (
    <div className="EndScreen">

      <div className="endscreen-title-container"> 
      <h3 className="endscreenTitle">Your score</h3>
      <h1 className="endscreenScore">290</h1>
      </div>

      <div className="endscreen-avatar-container"> 
      <Avatar/>
      </div>
      
      <div className="btn-endscreen">
      <button id="btn-endscreen-playagain">Play again</button>
      <br/>
      <button id="btn-endscreen-leaderboard">View Leaderboard</button>
      </div>

    </div>
  );
};

export default EndScreen;

//{score} / {QuestionList.length}{" "}
//<button onClick={playAgain}>Play again</button>
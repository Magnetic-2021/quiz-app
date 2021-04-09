import "./EndScreen.css";
import UserAvatar from "../Avatar/Avatar";
import { useHistory } from "react-router-dom";

const EndScreen = (props) => {
  const history = useHistory();

  return (
    <div className="EndScreen">
      <div className="endscreen-avatar-container">
        <UserAvatar user={props.user} />
      </div>
      <div className="endscreen-title-container">
        <div>
          <h2 className="endscreenScore">{props.score}</h2>
        </div>
        <div>
          <h1 className="title-endscreen">You've made it!</h1>
        </div>
      </div>

      <div className="button-endscreen">
        <button 
        onClick={props.resetQuiz} 
        className="endbtn playagain">
          Play again
        </button>
        <br />
        <button
          onClick={() => history.push("/leaderboard")}
          className="endbtn leaderboard"
        >
          View Leaderboard
        </button>
      </div>
    </div>
  );
};

export default EndScreen;

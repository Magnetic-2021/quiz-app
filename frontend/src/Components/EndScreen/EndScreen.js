import "./EndScreen.css";
import Avatar from "../Avatar/Avatar";
import { useHistory } from 'react-router-dom';

const EndScreen = () => {
  const history = useHistory();

    return (
      <div className="EndScreen">

        <div className="endscreen-title-container">
          <h3 className="endscreenTitle">Your score</h3>
          <h1 className="endscreenScore">290</h1>
        </div>

        <div className="endscreen-avatar-container">
        <Avatar />
        </div>

        <div className="btn-endscreen">
          <button onClick={() => history.push('/quiz')} className="btn playbtn">Play again</button>
          <br/>
          <button onClick={() => history.push('/leaderboard')} className="btn leaderbtn">View Leaderboard</button>
        </div>

      </div>
    )
}

  export default EndScreen;

 
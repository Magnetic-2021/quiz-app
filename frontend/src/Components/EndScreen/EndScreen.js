import "./EndScreen.css";
import Avatar from "../Avatar/Avatar";
import { useHistory } from 'react-router-dom';

const EndScreen = (props) => {
  const history = useHistory();

    return (
      <div className="EndScreen">

        <div className="endscreen-title-container">

          <div> 
          <h1>You've made it!</h1>
          </div>

          <div> 
          <h3 className="endscreenTitle">You scored</h3>
          </div> 

          <div>   
          <h2 className="endscreenScore">300</h2>
          </div> 
          </div>

        <div className="endscreen-avatar-container">
        <Avatar user={props.user} />
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

 
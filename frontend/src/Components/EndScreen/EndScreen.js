import "./EndScreen.css";
import Avatar from "../Avatar/Avatar";
import { useHistory } from 'react-router-dom';
import trophy from "../../images/trophylogo.svg";
import explotion from "../../images/explotionlogo.svg";

const EndScreen = (props) => {
  const history = useHistory();

    return (
      <div className="EndScreen">

        <div className="endscreen-title-container">
          <div> 
          <h1>Congratulations!</h1>
          </div>

          <div> 
          <img src={trophy}/>
          </div> 
          
          <div> 
          <h3 className="endscreenTitle">Your score</h3>
          </div> 

          <div>   
          <h2 className="endscreenScore">300</h2>
          </div> 
          
          <div>
          <img src={explotion}/>
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

 
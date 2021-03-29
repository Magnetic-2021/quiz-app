import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../Logo/Logo";

import "../Quiz/Quiz.css";

const Home = () => {
  const history = useHistory();

  return (
    <div className="Home">

      <div className="home-logoContainer"> 
      <Logo type="dark" />
      </div>

      <div className="home-buttonsContainer"> 

      <div className="home-button1"> 
      <button onClick={() => history.push("/signup")} className="btn" id="signup-btn">Signup</button>
      </div>
      <div className="home-button2"> 
      <button onClick={() => history.push("/login")} className="btn" id="login-btn">Login</button>
      </div>
      <div className="home-button3"> 
      <button onClick={() => history.push("/Howtoplay")} className="btn" id="htp-btn">How to play</button>
      </div>
      <div className="home-button4"> 
      <button onClick={() => history.push("/about")} className="btn" id="about-btn">About us</button>
      </div>

      </div>

    </div>
  );
};
export default Home;

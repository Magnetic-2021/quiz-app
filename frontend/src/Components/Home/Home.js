import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../Logo/Logo";
import "./Home.css";

const Home = () => {
  const history = useHistory();

  return (
    <div className="Home">

      <div className="home-logoContainer"> 
      <Logo type="dark"/>
      </div>

      <div className="home-buttonsContainer"> 

      <div className="home-button1"> 
      <button onClick={() => history.push("/signup")} className="btn" id="btn">SIGNUP</button>
      </div>
      <div className="home-button2"> 
      <button onClick={() => history.push("/login")} className="btn" id="btn">LOGIN</button>
      </div>
      <div className="home-button3"> 
      <button onClick={() => history.push("/Howtoplay")} className="btn" id="btn">HOW TO PLAY</button>
      </div>
      <div className="home-button4"> 
      <button onClick={() => history.push("/about")} className="btn" id="btn">ABOUT US</button>
      </div>

      </div>

    </div>
  );
};
export default Home;

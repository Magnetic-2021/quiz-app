import { useState, useEffect } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Scoreboard from "./Components/Scoreboard/Scoreboard";

// import Home from "./Components/Home/Home";
import About from "./Components/About/About";
function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    // get user from local storage
    // if user check timestamp
    // if timestamp valid set user in state

    const currentUser =
      JSON.parse(window.localStorage.getItem("currentUser")) ?? null;

    if (currentUser) {
      const valid = Date.now() - currentUser.timeStamp < 120000;
      console.log(valid);
      console.log("CURRENT USER AUTHD", currentUser);
      setUser(valid ? currentUser : null);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">{user ? <About /> : <Login />}</Route>
            {/* <Route path="/quiz">
              <Quiz />
            </Route> */}
            <Route path="/leaderboard">
              <Scoreboard />
            </Route>
            {/* <Route path="*">
              <NotFound />
            </Route> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "./App.css";
import "./Components/Quiz/Quiz.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Scoreboard from "./Components/Scoreboard/Scoreboard";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import EndScreen from "./Components/EndScreen/EndScreen";
import Howtoplay from "./Components/Howtoplay/Howtoplay";

function App() {
  const [user, setUser] = useState();
  const [quizKey, setQuizKey] = useState(1);
  useEffect(() => {
    // get user from session storage
    // if user check timestamp

    try {
      const currentUser =
        JSON.parse(window.sessionStorage.getItem("currentUser")) ?? null;
      if (currentUser) {
        const valid = Date.now() - currentUser.timeStamp < 12000000;
        console.log({ valid });
        console.log("CURRENT USER AUTHD", currentUser);
        if (valid) {
          console.log("setting current user");
          setUser(currentUser);
        } else {
          setUser(null);
          console.log("deleting user from storage");
          // window.sessionStorage.deleteItem("currentUser");
        }
      }
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(user ? user.id : null);
    }, 5000);
  });

  return (
    <Router>
      <div className="App">
        <Navbar user={user} setUser={setUser} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home user={user} />
            </Route>
            <Route path="/signup">
              <Signup user={user} setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login user={user} setUser={setUser} />
            </Route>
            <Route path="/about">
              <About user={user} />
            </Route>
            <Route path="/howtoplay">
              <Howtoplay />
            </Route>
            <Route path="/quiz">
              <Quiz
                key={quizKey}
                reset={() => setQuizKey((prevState) => prevState + 1)}
                user={user}
              />
            </Route>
            <Route path="/endscreen">
              <EndScreen user={user} />
            </Route>
            <Route path="/leaderboard">
              <Scoreboard user={user} />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../Quiz/Quiz.css";

const Home = (props) => {
  const history = useHistory();
  useEffect(() => {
    if (!props.user) {
      history.push("/login");
    }
  }, []);

  return (
    <div className="Home">
      <button onClick={() => history.push("/quiz")}>Start Quiz</button>
    </div>
  );
};
export default Home;
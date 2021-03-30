import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useHistory } from "react-router-dom";
import UserAvatar from "../Avatar/Avatar.js";
import "./Scoreboard.css";
import onemedal from "../../images/onemedal.PNG";
import twomedal from "../../images/twomedal.PNG";
import threemedal from "../../images/threemedal.PNG";

const Scoreboard = (props) => {
  console.log("scoreboard mounted");
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [tableState, setTableState] = useState("loading");
  const history = useHistory();
  useEffect(() => {
    if (!props.user) {
      history.push("/login");
    }
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/score", {})
      .then((res) => res.json())
      .then((data) => {
        setLeaderboardData(data);
        setTableState("loaded");
      })
      .catch(console.log("unable to fetch scores from server"));
  }, []);

  const columns = [
    {
      title: "User",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <div className="scoreboard-container">
      <h1 className="leadHeader">LEADERBOARD</h1>
      <div className="podium">
        <UserAvatar id="second" img={twomedal} />
        <UserAvatar id="first" img={onemedal} />
        <UserAvatar id="third" img={threemedal} />
      </div>
      <div className="tableScore">
        {tableState === "loaded" ? (
          <Table dataSource={leaderboardData} columns={columns} />
        ) : (
          <div className="loading-container">
            <div className="loader-circle"></div>
            <p className="loading-text">Loading...</p>
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default Scoreboard;

import React, { useState, useEffect } from "react";
import { Table, Badge } from "antd";
import { useHistory } from "react-router-dom";
import UserAvatar from "../Avatar/Avatar.js";
import "./Scoreboard.css";
const Podium = ({ score, place, color }) => {
  return (
    <div className={`podium-${place}`}>
      <Badge.Ribbon
        text={`${place}: ${score.username}`}
        offset={[0, 80]}
        color={color}
      >
        <UserAvatar
          user={{ id: score.userID }}
          size={place === "1st" ? 124 : 96}
        />
      </Badge.Ribbon>
    </div>
  );
};
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
        setLeaderboardData(
          data.map((score, index) => {
            return {
              ...score,
              date: new Date(score.date).toLocaleDateString("en-GB"),
              index: index + 1,
              key: score._id,
            };
          })
        );
        setTableState("loaded");
      })
      .catch(console.log("unable to fetch scores from server"));
  }, []);

  const columns = [
    { title: "#", dataIndex: "index", key: "index" },
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
  const places = ["1st", "2nd", "3rd"];
  const medals = ["#AF9500", "#B4B4B4", "#6A3805"];
  return (
    <div className="scoreboard-container">
      <div className="podium">
        {leaderboardData?.slice(0, 3).map((score, index) => {
          const place = places[index];
          return (
            <Podium
              key={place}
              score={score}
              place={places[index]}
              color={medals[index]}
            />
          );
        })}
      </div>
      <div className="tableScore">
        {tableState === "loaded" ? (
          <Table
            dataSource={leaderboardData}
            columns={columns}
            pagination={false}
          />
        ) : (
          <div className="loading-container">
            <div className="loader-circle"></div>
            <p className="loading-text">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Scoreboard;

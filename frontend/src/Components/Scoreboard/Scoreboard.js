import React, { useState, useEffect } from "react";
import { Table, Badge, Dropdown, Menu, Button } from "antd";
import { useHistory } from "react-router-dom";
import UserAvatar from "../Avatar/Avatar.js";
import "./Scoreboard.css";
import Loading from "../Loading/Loading";

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
  const [selectedMode, setSelectedMode] = useState("global");
  useEffect(() => {
    if (!props.user) {
      history.push("/login");
    }
  }, []);

  const urls = {
    global: "https://localhost:5000/score",
    user: `https://localhost:5000/score/${props.user?.id}`,
  };
  const modeText = { global: "Global Scores", user: "Your Scores" };

  useEffect(() => {
    setTableState("loading");
    console.log(selectedMode);
    console.log(urls);
    const url = urls[selectedMode];
    console.log("url", url);
    fetch(url, {})
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
  }, [selectedMode]);

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

  const handleMenuClick = ({ key }) => {
    setSelectedMode(key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="global">Global Scores</Menu.Item>
      <Menu.Item key="user">Your Scores</Menu.Item>
    </Menu>
  );

  return (
    <div className="scoreboard-container">
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        trigger={["click"]}
        arrow
      >
        <Button>{modeText[selectedMode]}</Button>
      </Dropdown>
      {selectedMode === "global" ? (
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
      ) : null}
      <div className="tableScore">
        {tableState === "loaded" ? (
          <Table
            dataSource={leaderboardData}
            columns={columns}
            pagination={false}
          />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Scoreboard;

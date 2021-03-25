import React from "react";
import { Table } from "antd";
import UserAvatar from "../Avatar/Avatar.js";
import "./Scoreboard.css";
import onemedal from "../../images/onemedal.PNG";
import twomedal from "../../images/twomedal.PNG";
import threemedal from "../../images/threemedal.PNG";

const Scoreboard = () => {
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

  const data = [
    {
      _id: "605b21961dae244640ef9141",
      username: "gemcila",
      score: 92,
      date: 9,
      __v: 0,
    },
    {
      _id: "605b13bb02917a3fb0f1ec6f",
      username: "gemcila",
      score: 92,
      date: 9,
      __v: 0,
    },
    {
      _id: "605b13dd02917a3fb0f1ec77",
      username: "gemcila",
      score: 92,
      date: 9,
      __v: 0,
    },
    {
      _id: "605b1411bd1e6e5788f0a9d8",
      username: "gemcila",
      score: 92,
      date: 9,
      __v: 0,
    },
    {
      _id: "605b1cb07a63493100eb1e47",
      username: "gemcila",
      score: 92,
      date: 9,
      __v: 0,
    },
    {
      _id: "605a0f9fada2535644b31290",
      username: "robert",
      score: 90,
      date: 9,
      __v: 0,
    },
    {
      _id: "605a0fd6ada2535644b3129a",
      username: "robert",
      score: 90,
      date: 9,
      __v: 0,
    },
    {
      _id: "605a1a5a6206b0584c576940",
      username: "robert",
      score: 90,
      date: 9,
      __v: 0,
    },
    {
      _id: "605a0f9fada2535644b3128d",
      username: "steve",
      score: 89,
      date: 9,
      __v: 0,
    },
    {
      _id: "605a1a5a6206b0584c57693d",
      username: "steve",
      score: 89,
      date: 9,
      __v: 0,
    },
  ];
  return (
    <div className="ScoreList">
      <div className="podium">
        <UserAvatar id="second" img={twomedal} />
        <UserAvatar id="first" img={onemedal} />
        <UserAvatar id="third" img={threemedal} />
      </div>
      <div className="tableScore">
        <Table dataSource={data} columns={columns} />;
      </div>
    </div>
  );
};

export default Scoreboard;

import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Avatar.css";

const UserAvatar = (props) => {
  return (
    <Avatar id={props.id} src={props.img} size={64} icon={<UserOutlined />} />
  );
};
export default UserAvatar;

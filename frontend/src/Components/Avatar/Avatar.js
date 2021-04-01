import React, { useState, useEffect } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./Avatar.css";

const UserAvatar = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (props.user) {
      if (!props.user?.avatar) {
        fetch(`http://localhost:5000/user/${props.user.id}`)
          .then((res) => res.json())
          .then((json) => setUser(json));
      } else {
        setUser(props.user);
      }
    }
  }, []);
  console.log(props.user, { user });
  return (
    <Avatar
      src={user ? user.avatar : null}
      size={props.size || 64}
      icon={<UserOutlined />}
    />
  );
};
export default UserAvatar;

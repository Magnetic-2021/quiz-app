import { useState } from "react";
import { Form, Input, Button } from "antd";
import {
  PlusCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./Login.css";
const Login = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const onFinish = (values) => {
    console.log(values);
    setFormStatus("loading");
    // post data
    fetch("http://localhost:5000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth) {
          setFormStatus("success");
          window.localStorage.setItem("currentUser", JSON.stringify(data.user));
        } else {
          setFormStatus("failed");
        }
      })
      .catch((err) => {
        setFormStatus("failed");
      });
  };
  const buttonValues = {
    idle: {
      text: "Login In",
      loading: false,
      icon: <PlusCircleOutlined />,
    },
    loading: { text: "Logging In", loading: true, icon: null },
    success: {
      text: "You are now logged in",
      loading: false,
      icon: <CheckCircleOutlined />,
    },
    failed: {
      text: "Login Failed",
      loading: false,
      icon: <CloseCircleOutlined />,
    },
  };
  return (
    <div className="login-container">
      <Form name="login" onFinish={onFinish} layout="vertical" size="large">
        <h1>Log In</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input a username." }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input a password." }]}
        >
          <Input.Password />
        </Form.Item>

        <Button
          htmlType="submit"
          type="primary"
          loading={buttonValues[formStatus].loading}
          icon={buttonValues[formStatus].icon}
        >
          {buttonValues[formStatus].text}
        </Button>
      </Form>
    </div>
  );
};

export default Login;

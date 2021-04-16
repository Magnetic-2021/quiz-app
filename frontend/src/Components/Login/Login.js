import { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";
import {
  PlusCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./Login.css";
const Login = (props) => {
  const [formStatus, setFormStatus] = useState("idle");
  const history = useHistory();
  useEffect(() => {
    if (props.user) {
      history.push("/leaderboard");
    }
  }, []);
  const onFinish = (values) => {
    console.log(values);
    setFormStatus("loading");
    // post data
    fetch("https://localhost:5000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth) {
          setFormStatus("success");
          props.setUser(data.user);
          try {
            window.sessionStorage.setItem(
              "currentUser",
              JSON.stringify(data.user)
            );
          } catch {
            console.log("session storage error");
          }
          history.push("/");
        } else {
          setFormStatus("failed");
        }
      })
      .catch((err) => {
        setFormStatus("failed");
        console.log(err);
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
  console.log({ formStatus });
  return (
    <div className="login-container">
      <Form name="login" onFinish={onFinish} layout="vertical" size="large">
        <h1>Log In</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input a username." }]}
        >
          <Input className="form-input" placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input a password." }]}
        >
          <Input.Password
            className="form-input"
            placeholder="Enter your password"
          />
        </Form.Item>

        <Button
          htmlType="submit"
          type="primary"
          loading={buttonValues[formStatus].loading}
          icon={buttonValues[formStatus].icon}
          className="btn btn-primary"
        >
          {buttonValues[formStatus].text}
        </Button>
        <p className="form-text">
          Don't have an account yet?{" "}
          <a href="/signup" className="form-link">
            Sign up now
          </a>
        </p>
      </Form>
    </div>
  );
};

export default Login;

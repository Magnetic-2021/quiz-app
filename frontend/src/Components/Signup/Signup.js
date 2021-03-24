import { useState } from "react";
import { Form, Input, Space, Button } from "antd";
import {
  PlusCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import "./Signup.css";
const Signup = () => {
  const [formStatus, setFormStatus] = useState("idle");
  const buttonValues = {
    idle: {
      text: "Create Account",
      loading: false,
      icon: <PlusCircleOutlined />,
    },
    loading: { text: "Creating Account", loading: true, icon: null },
    success: {
      text: "Account Created",
      loading: false,
      icon: <CheckCircleOutlined />,
    },
    failed: {
      text: "Account Creation Failed",
      loading: false,
      icon: <CloseCircleOutlined />,
    },
  };

  const onFinish = (values) => {
    console.log(values);
    setFormStatus("loading");
    // post data
    fetch("http://localhost:5000/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFormStatus("success");
        } else {
          setFormStatus("failed");
        }
      })
      .catch((err) => {
        setFormStatus("failed");
      });
  };

  return (
    <div className="signup-container">
      <Form name="signup" onFinish={onFinish}>
        <h1>Create an Account</h1>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input a username." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "A valid email address is required to signup.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{}]}>
          <Input.Password />
        </Form.Item>
        <Form.Item label="Confirm Password" name="confirmPassword" rules={[{}]}>
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

export default Signup;

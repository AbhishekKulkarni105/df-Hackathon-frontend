import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import login from "../../assests/image 293.png";
import logo from "../../assests/image 289.png";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={login} alt="Login" />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          <img src={logo} />
          <p>Welcome to Digitalflake Admin</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Form.Item>
            <Button
              type="primary"
              style={{ background: "#5C218B", width: "100%" }}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

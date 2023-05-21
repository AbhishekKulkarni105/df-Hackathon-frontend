import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

import logo from "../assests/image 289.png";
export default function Forgot() {
  //   const onFinish = (values) => {
  //     console.log("Success:", values);
  //   };

  //   const onFinishFailed = (errorInfo) => {
  //     console.log("Failed:", errorInfo);
  //   };

  return (
    <div className="login-page">
      <div className="login-box">
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          //   onFinish={onFinish}
          //   onFinishFailed={onFinishFailed}
        >
          {/* <img src={logo} /> */}
          <div style={{ fontSize: "20px", color: "#5C218B", width: "100%" }}>
            <p>Did you forget your password?</p>
          </div>
          <p>
            Enter your email address and we'll send you a link to restore
            password
          </p>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              style={{ background: "#5C218B", width: "100%" }}
            >
              Request reset link
            </Button>
            <div style={{ textAlign: "center" }}>
              <p>Back to log in</p>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

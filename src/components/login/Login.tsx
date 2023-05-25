import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import loginp from "../../assests/image 293.png";
import logo from "../../assests/image 289.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { forgot } = props;
  let navigate = useNavigate();

  const logind = (data: any) => {
    let params = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:8081/api/auth/login", params)
      .then(function(response) {
        //   IF EMAIL ALREADY EXISTS
        if (response.data.success === false) {
          toast.error(response.data.error, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
        } else {
          toast.success(response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: 0,
            toastId: "my_toast",
          });
          localStorage.setItem("auth", response.data.access_token);
          console.log(response.data);
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      })

      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img src={loginp} alt="Login" />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={logind}
        >
          <img src={logo} />
          <p>Welcome to Digitalflake Admin</p>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Link
              to="/"
              onClick={forgot}
              style={{ color: "rgb(118, 116, 247)", borderRadius: ".35rem" }}
            >
              Forgot Password
            </Link>

            <Button
              type="primary"
              htmlType="submit"
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

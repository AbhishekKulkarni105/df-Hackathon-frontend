import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import loginp from "../../assests/image 293.png";
import logo from "../../assests/image 289.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/action/auth";
import { useForm } from "react-hook-form";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const home = (data: any) => {
    dispatch(login(username, password));
    console.log(data);
    navigate("/");
  };
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const logind = (data: any) => {
    let params = {
      username: data.username,
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
          localStorage.setItem("auth", response.data.token);
          setTimeout(() => {
            navigate("/products");
          }, 3000);
        }
      })

      .catch(function(error) {
        console.log(error);
      });
  };

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = checkLoggedIn();
    setLoggedIn(isLoggedIn);
  }, []);

  const checkLoggedIn = () => {
    // Implement your logic to check if user is already logged in
    // For example, you can check if there's a stored token in local storage
    const token = localStorage.getItem("token");
    return !!token;
  };

  const handleLogin = async () => {
    try {
      // Make a POST request to your authentication API endpoint
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Save the authentication token in local storage
        localStorage.setItem("token", data.token);
        console.log(data.token);
        setLoggedIn(true);
      } else {
        // Handle login error
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleLogout = () => {
    // Clear the authentication token from local storage
    localStorage.removeItem("token");
    setLoggedIn(false);
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
          onFinish={home}
          //   onFinishFailed={onFinishFailed}
        >
          <img src={logo} />
          <p>Welcome to Digitalflake Admin</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              // {...register("username", { required: "Email is required!" })}
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
              // {...register("password", {
              //   required: "Password is required!",
              // })}
            />
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
};

export default Login;

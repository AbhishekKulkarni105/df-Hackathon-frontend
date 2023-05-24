import "antd/dist/reset.css";
import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LayOut from "./layout/Layout";
import { useSelector } from "react-redux";
import { Store } from "./types/Redux";
import AuthRoutes from "./routes/AuthRoutes";
import Login from "./components/login/Login";
import { useState } from "react";

function App() {
  const access_token = localStorage.getItem("auth");
  console.log(access_token, "token");
  return (
    <div className="App">{access_token ? <LayOut /> : <AuthRoutes />}</div>
  );
}

export default App;

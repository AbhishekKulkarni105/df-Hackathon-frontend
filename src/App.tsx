import "antd/dist/reset.css";
import React from "react";
import "./App.css";
import LayOut from "./layout/Layout";
import { useSelector } from "react-redux";

import AuthRoutes from "./routes/AuthRoutes";
import Login from "./components/login/Login";

function App() {
  // const token = useSelector((store: store) => store.userSession.user?.token);
  // console.log(token, "token");
  const token = localStorage.getItem("auth");
  console.log("token", token);

  return <div className="App">{token ? <LayOut /> : <LayOut />}</div>;
}

export default App;

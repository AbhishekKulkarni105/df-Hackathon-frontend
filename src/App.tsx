import "antd/dist/reset.css";
import React from "react";
import "./App.css";
import LayOut from "./layout/Layout";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  const access_token = localStorage.getItem("auth");
  console.log(access_token, "token");
  return (
    <div className="App">{access_token ? <LayOut /> : <AuthRoutes />}</div>
  );
}

export default App;

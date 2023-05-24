import "antd/dist/reset.css";
import React from "react";
import "./App.css";
import LayOut from "./layout/Layout";
import { useSelector } from "react-redux";
import { Store } from "./types/Redux";
import AuthRoutes from "./routes/AuthRoutes";
import Login from "./components/login/Login";

function App() {
  // const token = useSelector((store: Store) => store.userSession.user?.token);
  // console.log(token, "token");
  var token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiNmEyYmZjNjgtNmZjYS00ZDAwLTg0OTktOTBhOGQwYTIxOTFhIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODQ5MDkyMDIsImV4cCI6MTY4NDkxMjgwMn0.I3l8UBdOWXRWJMfSBfNlPPy7Xgj-R12WGkHajQszBW8";
  return <div className="App">{token ? <LayOut /> : <AuthRoutes />}</div>;
}

export default App;

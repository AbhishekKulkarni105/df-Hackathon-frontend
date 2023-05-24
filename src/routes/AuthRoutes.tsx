import { Route, Routes } from "react-router-dom";
import React from "react";
import Login from "../components/login/Login";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

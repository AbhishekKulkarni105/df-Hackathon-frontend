import { Route, Routes } from "react-router-dom";
import React from "react";
import Forgot from "./Forgotpassword";

export default function LoginRoutes() {
  return (
    <Routes>
      <Route path="/forgot" element={<Forgot />} />
    </Routes>
  );
}

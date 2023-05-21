import "antd/dist/reset.css";
import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Forgot from "./components/login/Forgotpassword";

import Viewcategory from "./components/category/Viewcategory";
import Viewproducts from "./components/products/Viewproducts";
import Createcategory from "./components/category/Createcategory";
import Createproducts from "./components/products/Createproducts";
import Dashboardhome from "./components/Dashboardhome";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;

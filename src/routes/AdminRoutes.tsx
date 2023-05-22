import { Route, Routes } from "react-router-dom";
import Dashboardhome from "../components/Dashboardhome";
import Createcategory from "../components/category/Createcategory";
import Createproducts from "../components/products/Createproducts";
import Viewproducts from "../components/products/Viewproducts";
import Viewcategory from "../components/category/Viewcategory";
import React from "react";
import Login from "../components/login/Login";
export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboardhome />} />
      <Route path="/category" element={<Viewcategory />} />
      <Route path="/products" element={<Viewproducts />} />
      <Route path="/createcategory" element={<Createcategory />} />
      <Route path="/createproduct" element={<Createproducts />} />
    </Routes>
  );
}

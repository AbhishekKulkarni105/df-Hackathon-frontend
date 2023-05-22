import { DesktopOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import React from "react";

const { Header, Content, Sider, Footer } = Layout;
export default function AdminMenu() {
  const nav = useNavigate();
  return (
    <>
      <Menu style={{ minHeight: "90vh", background: "#F4F4F4" }}>
        <Menu.Item key="1" icon={<DesktopOutlined />} onClick={() => nav("/")}>
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<PieChartOutlined />}
          onClick={() => nav("/category")}
        >
          Category
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<PieChartOutlined />}
          onClick={() => nav("/products")}
        >
          Products
        </Menu.Item>
      </Menu>
      <Menu />
    </>
  );
}

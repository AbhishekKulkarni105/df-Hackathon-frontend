import { Avatar, Dropdown, Image, Layout, Menu } from "antd";
import { useSelector } from "react-redux";
import logo from "../assests/image 289.png";
import AdminRoutes from "../routes/AdminRoutes";
import AdminMenu from "../layout/Menu/AdminMenu";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default function LayOut() {
  return (
    <>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            background: "#5E0095",
          }}
        >
          <div className="demo-logo">
            <Image src={logo} height={63} width={175} preview={false} />
          </div>
          <div
            style={{
              width: "100%",
              position: "sticky",
              left: "0",
              top: "0",
              right: "0",
              zIndex: "1",
            }}
          >
            <Avatar
              size={45}
              style={{
                float: "right",
                marginTop: ".5rem",
                color: "white",
                cursor: "pointer",
                background: "#F4F4F4",
              }}
            ></Avatar>
          </div>
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} /> */}
        </Header>

        <Layout>
          <Sider width={200} style={{}}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              {" "}
              <AdminMenu />
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              style={{
                margin: "0.8rem",
                backgroundColor: "#ede9e9",
                border: "0.1rem solid black",
                borderRadius: "0.35rem",
              }}
            >
              <AdminRoutes />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

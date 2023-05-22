import { Avatar, Dropdown, Image, Layout, Menu } from "antd";
import { useSelector } from "react-redux";
import logo from "../assests/image 289.png";
import AdminRoutes from "../routes/AdminRoutes";
import AdminMenu from "../layout/Menu/AdminMenu";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default function LayOut() {
  //   const name: any = useSelector(
  //     (store: Store) => store.userSession.user?.username
  //   );
  //   const ROLE: any = useSelector((store: Store) => store.userSession.user?.role);
  //   function randomColor(): any {
  //     let hex = Math.floor(Math.random() * 0xffffff);
  //     let color = "#" + hex.toString(16);
  //     return color;
  //   }
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout" style={{ backgroundColor: "#ede9e9" }}>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
              background: "#662671",
            }}
          >
            <div className="demo-logo">
              <Image src={logo} height={63} width={175} preview={false} />
            </div>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}} /> */}
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
                  // backgroundColor: colorBgContainer,
                }}
              ></Avatar>
            </div>
          </Header>
          <AdminMenu />
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
    </>
  );
}

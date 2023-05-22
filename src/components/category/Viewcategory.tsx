import React from "react";
import {
  Button,
  Card,
  Col,
  MenuProps,
  Layout,
  Avatar,
  Image,
  Menu,
  Table,
} from "antd";

const { Search } = Input;
import { Input, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content, Sider, Footer } = Layout;
import logo from "../../assests/image 289.png";
type MenuItem = Required<MenuProps>["items"][number];

const Viewcategory: React.FC = () => (
  <>
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Card title="" bordered={true} style={{ paddingBottom: "6rem" }}>
          <h4
            style={{
              textAlign: "justify",
              marginTop: "1rem",
              marginLeft: "1.7rem",
            }}
          >
            Category
          </h4>
          <div>
            <Col
              md={{ span: 9 }}
              style={{ marginLeft: "1.7rem", marginTop: ".7rem" }}
            >
              <Space>
                <Search
                  placeholder="Search"
                  enterButton
                  //   onChange={(e: any) => setName(e.target.value)}
                />

                <Button
                  type="primary"
                  style={{ borderRadius: ".35rem" }}
                  // onClick={() => nav('/addemployee')}
                >
                  ADD CATEGORY
                </Button>
              </Space>
            </Col>
            <Table></Table>
          </div>
        </Card>
      </Content>
    </Layout>
  </>
);

export default Viewcategory;

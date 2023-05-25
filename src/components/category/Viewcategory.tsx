import React from "react";
import { Button, Card, Col, Layout, Table, Tooltip } from "antd";
import { DoubleLeftOutlined, EditOutlined } from "@ant-design/icons";
const { Search } = Input;
import { Input, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content, Sider, Footer } = Layout;
import logo from "../../assests/image 289.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const columns: any = [
  {
    title: "ID",
    dataIndex: "categoryId",
  },
  {
    title: "Category Name",
    dataIndex: "categoryName",
  },
  {
    title: "Description",
    dataIndex: "categoryDescription",
  },
  {
    title: "Status",
    dataIndex: "categoryStatus",
  },
  {
    title: "Action",
    key: "action",
    render: (record: any) => (
      <Space size="middle">
        <Tooltip title="Edit Client Manager">
          <EditOutlined style={{ fontSize: "22px", color: "skyblue" }} />
        </Tooltip>
      </Space>
    ),
  },
];
const Viewcategory: React.FC = () => {
  let navigate = useNavigate();
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const access_token = localStorage.getItem("auth");
      try {
        const response = await fetch("http://localhost:8081/api/category", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        });

        if (response.ok) {
          // Successful response handling
          const data = await response.json();
          setAPIData(data.rows);
          console.log("GETTTINGGGG!!!", data.rows);
          console.log(data.rows);
        } else {
          // Handle error response
          console.error("Error:", response.status);
        }
      } catch (error) {
        // Handle network error
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
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
                    onClick={() => navigate("/createcategory")}
                  >
                    ADD CATEGORY
                  </Button>
                </Space>
              </Col>
              <Table
                columns={columns}
                dataSource={APIData.map((data: any, index: any) => ({
                  ...data,
                  tableId: index + 1,
                }))}
                style={{ margin: "1.7rem", width: "95%" }}
              ></Table>
            </div>
          </Card>
        </Content>
      </Layout>
    </>
  );
};

export default Viewcategory;

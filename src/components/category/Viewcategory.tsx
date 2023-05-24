import React from "react";
import { Button, Card, Col, Layout, Table } from "antd";

const { Search } = Input;
import { Input, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header, Content, Sider, Footer } = Layout;
import logo from "../../assests/image 289.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Category Name",
    dataIndex: "cName",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];
const Viewcategory: React.FC = () => {
  let navigate = useNavigate();
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data: any) => {
    let { id, cName, description, status } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Category Name", cName);
    localStorage.setItem("Description", description);
    localStorage.setItem("Status", status);
  };

  const getData = () => {
    axios
      .get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
        console.log("getting!!!", getData);
      });
  };

  const onDelete = (id: any) => {
    axios
      .delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };
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

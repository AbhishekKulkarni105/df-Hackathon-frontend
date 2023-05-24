import React from "react";
import { Card, Button, Col, Table } from "antd";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Product Name",
    dataIndex: "pName",
  },
  {
    title: "Pack Size",
    dataIndex: "pSize",
  },
  {
    title: "MRP",
    dataIndex: "pMrp",
  },
  {
    title: "Product Image",
    dataIndex: "pImage",
  },
  {
    title: "Status",
    dataIndex: "pStatus",
  },
];

const Viewproducts: React.FC = () => {
  let navigate = useNavigate();

  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://608a365f8c8043001757fd98.mockapi.io/user/Employee`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  const setData = (data: any) => {
    let { id, pname, category, pSize, pMrp, pImage, status } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Category", category);
    localStorage.setItem("Product Name", pname);
    localStorage.setItem("Pack Size", pSize);
    localStorage.setItem("MRP", pMrp);
    localStorage.setItem("Product Image", pImage);
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
  return (
    <>
      <Card title="" bordered={true} style={{ paddingBottom: "6rem" }}>
        <h4
          style={{
            textAlign: "justify",
            marginTop: "1rem",
            marginLeft: "1.7rem",
          }}
        >
          Product
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
                onClick={() => navigate("/createproduct")}
              >
                ADD PRODUCTS
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
    </>
  );
};

export default Viewproducts;

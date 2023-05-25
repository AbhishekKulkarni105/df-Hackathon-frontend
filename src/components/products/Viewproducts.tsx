import React from "react";
import { Button, Card, Col, Layout, Table, Tooltip } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
import { useEffect, useState } from "react";

const columns = [
  {
    title: "ID",
    dataIndex: "productId",
  },
  {
    title: "Category",
    dataIndex: "CategoryCategoryId",
  },
  {
    title: "Product Name",
    dataIndex: "productName",
  },
  {
    title: "Pack Size",
    dataIndex: "packSize",
  },
  {
    title: "MRP",
    dataIndex: "productPrice",
  },
  {
    title: "Product Image",
    dataIndex: "productImage",
  },
  {
    title: "Status",
    dataIndex: "productStatus",
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

const Viewproducts: React.FC = () => {
  let navigate = useNavigate();

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const access_token = localStorage.getItem("auth");
      try {
        const response = await fetch("http://localhost:8081/api/product", {
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
              <Search placeholder="Search" enterButton />

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

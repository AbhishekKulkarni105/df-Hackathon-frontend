import React from "react";
import { Card, Button, Col, Table } from "antd";
import { Input, Space } from "antd";

const { Search } = Input;

const Viewproducts: React.FC = () => (
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
              // onClick={() => nav('/addemployee')}
            >
              ADD PRODUCTS
            </Button>
          </Space>
        </Col>
        <Table></Table>
      </div>
    </Card>
  </>
  //   <Card style={{ width: 300 }}>
  //     <div>
  //       <p>Category</p>
  //       <Search placeholder="input search text" style={{ width: 200 }} />
  //       <Button>ADD CATEGORY</Button>
  //     </div>
  //   </Card>
);

export default Viewproducts;

import React from "react";
import { Button, Card, Col, DatePicker, Form, Row, Select } from "antd";
import {
  Input,
  Space,
  Layout,
  Menu,
  theme,
  Avatar,
  Dropdown,
  Image,
} from "antd";
import { UploadOutlined } from '@ant-design/icons';
const { Header, Content, Sider, Footer } = Layout;
import logo from "../../assests/image 289.png";
const { Search } = Input;
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from "react";
import axios from "axios";
import { message, Upload } from 'antd';
import { useNavigate } from "react-router-dom";


const Createproducts: React.FC = () => {
  const [category, setCategory] = useState("");
  const [pName, setProductName] = useState("");
  const [pSize, setPackSize] = useState(""); 
  const [pMrp, setMRP] = useState(""); 
  const [pImage, setProductImage] = useState("");
  const [pStatus, setStatus] = useState("");
  let navigate = useNavigate();

  const productData = () => {
    axios
      .post(`https://608a365f8c8043001757fd98.mockapi.io/user/Employee`, {
      category, 
      pName,
      pSize,
      pMrp,
      pImage,
      pStatus
      })
      .then(() => {
        navigate("/products");
      });
  };
  return(
    <>
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        
      }}
    >
      <Card title="" bordered={true}>
        <Col md={{ span: 2 }}></Col>
        <h4
          style={{
            textAlign: "justify",
            marginTop: "1rem",
          }}
        >
          ADD PRODUCTS
        </h4>{" "}
        <Form
        onFinish={productData}
        name="basic"
        initialValues={{
          remember: true,
        }}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                className="formfiled"
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                    message: "Please select Category",
                  },
                ]}
              >
                 <Input
                  type="text"
                  className="formfiled"
                  placeholder="Enter Category Name"
                  onChange={(e) => setCategory(e.target.value)}
                />
                {/* <Select
                  placeholder="Select loptop type"
                  style={{ textAlign: "left" }}
                ></Select> */}
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                className="formfiled"
                label="Product Name"
                name="pname"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Product name",
                  },
                ]}
              >
                <Input
                  type="text"
                  className="formfiled"
                  placeholder="Enter Product Name"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                className="formfiled"
                label="Pack Size"
                name="pSize"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Package Size",
                  },
                ]}
              >
                 <Input
                  type="text"
                  className="formfiled"
                  placeholder="Enter Package Size"
                  onChange={(e) => setPackSize(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                className="formfiled"
                label="MRP"
                name="pMrp"
                rules={[
                  {
                    required: true,
                    message: "Please Enter MRP",
                  },
                ]}
              >
                 <Input
                  type="text"
                  className="formfiled"
                  placeholder="Enter MRP"
                  onChange={(e) => setMRP(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                className="formfiled"
                label="Product Image"
                name="pImage"
                rules={[
                  {
                    required: true,
                    message: "Please Add Product Image",
                  },
                ]}
              >
                <Upload {...setProductImage}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                className="formfiled"
                name="status"
                label="Status"
                rules={[
                  {
                    required: true,
                    message: "Please select Status",
                  },
                ]}
              >
                 <Input
                  type="text"
                  className="formfiled"
                  placeholder="Enter Status"
                  onChange={(e) => setStatus(e.target.value)}
                />
                {/* <Select
                  placeholder="Select status type"
                  style={{ textAlign: "left" }}
                ></Select> */}
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col md={{ span: 5, offset: 6 }}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                    borderRadius: ".35rem",
                  }}
                >
                  SAVE
                </Button>
              </Form.Item>
            </Col>
            <Col md={{ span: 5, offset: 1 }}>
              <Form.Item>
                <Button
                  type="primary"
                  style={{ width: "100%", borderRadius: ".35rem" }}
                  onClick={() => {
                    //   nav(-1);
                  }}
                  danger
                >
                  Cancel
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </Content>
 
</>
  )
}
 

export default Createproducts;

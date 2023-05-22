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
const { Header, Content, Sider, Footer } = Layout;
import logo from "../../assests/image 289.png";
const { Search } = Input;
import type { MenuProps } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
type MenuItem = Required<MenuProps>['items'][number];



const Createproducts: React.FC = () => (
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
              // form={form}
              // onFinish={onFinish}
              // name="basic"
              // {...formItemLayout}
              // layout={formLayout}
              // initialValues={{
              //   remember: true,
              // }}
              >
                <Row>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Form.Item
                      className="formfiled"
                      name="laptop"
                      label="Category"
                      rules={[
                        {
                          required: true,
                          message: "Please select Category",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select loptop type"
                        style={{ textAlign: "left" }}
                      ></Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Form.Item
                      className="formfiled"
                      label="Product Name"
                      name="empid"
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
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Form.Item
                      className="formfiled"
                      label="Pack Size"
                      name="fname"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Package Size",
                        },
                      ]}
                    ></Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Form.Item
                      className="formfiled"
                      label="MRP"
                      name="fname"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter MRP",
                        },
                      ]}
                    ></Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Form.Item
                      className="formfiled"
                      label="Product Image"
                      name="fname"
                      rules={[
                        {
                          required: true,
                          message: "Please Add Product Image",
                        },
                      ]}
                    ></Form.Item>
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
                      <Select
                        placeholder="Select status type"
                        style={{ textAlign: "left" }}
                      ></Select>
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
);

export default Createproducts;

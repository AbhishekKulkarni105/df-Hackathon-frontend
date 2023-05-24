import React from "react";
import { Button, Card, Col, Form, Row, Select, Layout } from "antd";
import { Input, Space } from "antd";
const { Content } = Layout;
const { Option } = Select;
const { Search } = Input;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createcategory: React.FC = () => {
  const [cName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  let navigate = useNavigate();

  const postData = () => {
    axios
      .post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
        cName,
        description,
        status,
      })
      .then(() => {
        navigate("/category");
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
          <Card title="" bordered={true}>
            <Col md={{ span: 2 }}></Col>
            <h4
              style={{
                textAlign: "justify",
                marginTop: "1rem",
              }}
            >
              ADD CATEGORY
            </h4>{" "}
            <Form
              onFinish={postData}
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
              <Row>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <Form.Item
                    className="formfiled"
                    label="Category Name"
                    name="cname"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Category Name",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="formfiled"
                      placeholder="Enter Category Name"
                      onChange={(e) => setCategoryName(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                  <Form.Item
                    className="formfiled"
                    label="Description"
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Description",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      className="formfiled"
                      placeholder="Enter Description"
                      onChange={(e) => setDescription(e.target.value)}
                    />
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
                      placeholder="Enter Description"
                      onChange={(e) => setStatus(e.target.value)}
                    />
                    {/* <Select
                      placeholder="Select Status type"
                      style={{ textAlign: "left" }}
                    >
                      <Option value="Active">Active</Option>
                      <Option value="Inactive">Inactive</Option>
                    </Select> */}
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
                      // onClick={postData}
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
                      onClick={() => {}}
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
      </Layout>
    </>
  );
};

export default Createcategory;

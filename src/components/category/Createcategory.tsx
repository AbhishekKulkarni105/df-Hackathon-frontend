import React from "react";
import { Button, Card, Col, Form, Row, Select, Layout } from "antd";
import { Input, Space } from "antd";
const { Content } = Layout;

const { Search } = Input;

const Createcategory: React.FC = () => (
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
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                <Form.Item
                  className="formfiled"
                  name="laptop"
                  label="Status"
                  rules={[
                    {
                      required: true,
                      message: "Please select laptop",
                    },
                  ]}
                >
                  <Select
                    placeholder="Select loptop type"
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

export default Createcategory;

import React from "react";
import { Button, Card, Col, DatePicker, Form, Row, Select } from "antd";
import { Input, Space } from "antd";

const { Search } = Input;

const Createproducts: React.FC = () => (
  <>
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
                  message: "Please select laptop",
                },
              ]}
            >
              <Select
                placeholder="Select loptop type"
                style={{ textAlign: "left" }}
              >
                {/* <Option value="own">Own</Option>
                <Option value="client">Client</Option>
                <Option value="company">Comapny</Option> */}
              </Select>
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
                  message: "Please Enter EMP ID",
                },
              ]}
            >
              <Input
                type="text"
                className="formfiled"
                placeholder="Enter EMP ID Number"
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
                  message: "Please Select EmployeeName",
                },
              ]}
            >
              <Select
                style={{ textAlign: "left" }}
                placeholder="Please Select Resource"
              ></Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              className="formfiled"
              label="MRP"
              name="fname"
              rules={[
                {
                  required: true,
                  message: "Please Select EmployeeName",
                },
              ]}
            >
              <Select
                style={{ textAlign: "left" }}
                placeholder="Please Select Resource"
              ></Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              className="formfiled"
              label="Product Image"
              name="fname"
              rules={[
                {
                  required: true,
                  message: "Please Select EmployeeName",
                },
              ]}
            >
              <Select
                style={{ textAlign: "left" }}
                placeholder="Please Select Resource"
              ></Select>
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
              >
                {/* <Option value="own">Own</Option>
                <Option value="client">Client</Option>
                <Option value="company">Comapny</Option> */}
              </Select>
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
  </>
);

export default Createproducts;

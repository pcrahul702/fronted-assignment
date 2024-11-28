import React from "react";
import { Card, Avatar, Form, Row, Col, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const users = useSelector((state) => state.user.users);
  const { id } = useParams();
  const user = users.find((user) => user._id === id);

  const getValue = (value) => (value !== undefined && value !== null ? value : "N/A");

  const { avatar, fullname, phone, username, role, email } = user || {};

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <Card className="shadow-lg w-full max-w-4xl bg-white p-6">
        <div className="flex justify-center mb-6">
          <Avatar
            size={100}
            src={getValue(avatar)}
            icon={!avatar && <UserOutlined />}
            className="border-2 border-blue-500"
          />
        </div>
        <Form
          layout="vertical"
          initialValues={{
            fullname: getValue(fullname),
            phone: getValue(phone) ? `+91 ${phone}` : "N/A",
            username: getValue(username),
            role: getValue(role),
            email: getValue(email),
          }}
          disabled
        >
          <Row gutter={[24, 16]}>
            <Col xs={24} md={12}>
              <Form.Item label="Full Name" name="fullname">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Phone" name="phone">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Username" name="username">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item label="Role" name="role">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default UserDetailsPage;

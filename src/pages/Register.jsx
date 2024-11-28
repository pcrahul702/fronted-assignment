import React, { useState } from "react";
import { Button, Input, Form, Layout, Upload, message, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { postdata } from "../utils/Methods";
import { useMutation } from "@tanstack/react-query";
import { REGISTER_USER } from "../utils/Constant/apiConstant";

const { Header, Content } = Layout;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null); // For form data
  const [avatarPreview, setAvatarPreview] = useState(null); // For preview
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData) => postdata(REGISTER_USER, formData),
    onSuccess: () => {
      setLoading(false);
      message.success("Registration successful!");
      navigate("/login");
    },
    onError: (error) => {
      setLoading(false);
      message.error(error.response?.data?.message || "Registration failed.");
      console.error("Error during registration:", error);
    },
  });

  const handleRegister = (values) => {
    const formData = new FormData();
    if (avatarFile) {
      formData.append("avatar", avatarFile);
    }
    formData.append("fullname", values.fullname);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("password", values.password);
    formData.append("username", values.username);

    setLoading(true);
    mutation.mutate(formData);
  };

  const handleAvatarChange = ({ file }) => {
    console.log(file)
    setAvatarFile(file);
  
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div>Upload Avatar</div>
    </div>
  );

  return (
    <Layout className="min-h-screen">
      {/* Navbar */}
      <Header className="bg-custom-blue text-custom-white flex items-center">
        <div className="text-3xl font-sans font-bold">Rahul Kumar</div>
      </Header>

      {/* Main Content */}
      <Content className="flex flex-col justify-center items-center bg-gray-100 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-3xl text-center text-blue-600 mb-8">Register</h2>
          <Form layout="vertical" onFinish={handleRegister}>
            {/* Avatar Upload Section */}
            <Form.Item label="">
              <Row justify="center">
                <Col>
                  {avatarFile ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <Upload
                      name="avatar"
                      listType="picture-card"
                      showUploadList={false}
                      beforeUpload={() => false} // Prevent automatic upload
                      onChange={handleAvatarChange}
                    >
                      {uploadButton}
                    </Upload>
                  )}
                </Col>
              </Row>
            </Form.Item>

            {/* Form Fields */}
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Full Name"
                  name="fullname"
                  rules={[{ required: true, message: "Please enter your full name" }]}
                >
                  <Input placeholder="Enter your full name" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    { required: true, message: "Please enter your phone number" },
                  ]}
                >
                  <Input placeholder="Enter your phone number" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: "Please enter your username" }]}
                >
                  <Input placeholder="Enter your username" />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: "Please enter your password" }]}
                >
                  <Input.Password placeholder="Enter your password" />
                </Form.Item>
              </Col>
            </Row>

            {/* Register Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
                Register
              </Button>
            </Form.Item>

            {/* Login Navigation Button */}
            <Form.Item>
              <Button type="link" onClick={() => navigate("/login")} className="w-full text-center">
                Already have an account? Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default Register;

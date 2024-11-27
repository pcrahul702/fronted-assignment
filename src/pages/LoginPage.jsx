import React, { useState } from "react";
import { Button, Input, Form, Layout, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { postdata } from "../utils/Methods";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import { USER_LOGIN } from "../utils/Constant/apiConstant";

const { Header, Content } = Layout;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: (user) => postdata(USER_LOGIN, user),
    onSuccess: (data) => {
      setLoading(false);
      message.success("Login successful!")
      console.log("logged data",data.data.data)
      const user=data?.data?.data?.user
      dispatch(
        setUser({
          user: user.username,
          role: user.role,
          token: data?.data?.data?.accessToken,
        })
      );
      
      navigate("/");
    },
    onError: (error) => {
      message.error(error.response?.data?.message || "Login failed.");
      console.error("Error in logged in:", error);
    },
  });

  const handleLogin = (values) => {
    setLoading(true);
    mutation.mutate(values);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Layout className="min-h-screen">
      {/* Navbar */}
      <Header className="bg-custom-blue text-custom-white flex items-center">
        <div className="text-3xl font-sans font-bold">Rahul Kumar</div>
      </Header>

      {/* Main Content */}
      <Content className="flex flex-col justify-center items-center bg-gray-100 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-3xl text-center text-blue-600 mb-8">Login</h2>
          <Form layout="vertical" onFinish={handleLogin}>
            {/* Username Field */}
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
            >
              <Input placeholder="Enter your username" />
            </Form.Item>

            {/* Password Field */}
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>

            {/* Login Button */}
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={loading}
              >
                Login
              </Button>
            </Form.Item>
          </Form>

          {/* Register Button */}
          <Form.Item>
            <Button
              type="default"
              className="w-full mt-4"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Form.Item>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginPage;

import React from "react";
import { Card, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const users = useSelector((state) => state.user.users); // Get users from Redux
  const { id } = useParams(); // Get the user ID from the URL parameters

  // Find the user matching the ID from the URL
  const user = users.find((user) => user._id === id);



  const { avatar, fullname, phone, username, role, email } = user;

  return (
    <div className=" bg-gray-100 min-h-screen">
      <Card className="shadow-lg w-full max-w-4xl mx-auto bg-white p-6">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <Avatar
            size={100}
            src={avatar} // Render avatar if provided
            icon={!avatar && <UserOutlined />} // Default icon if no avatar
            className="border-2 border-blue-500"
          />
        </div>

        {/* User Details */}
        <Row gutter={[24, 16]} className="text-center md:text-left">
          {/* Full Name */}
          <Col xs={24} md={12}>
            <p className="font-semibold text-lg text-gray-600">Full Name</p>
            <p className="text-gray-800">{fullname}</p>
          </Col>

          {/* Phone */}
          <Col xs={24} md={12}>
            <p className="font-semibold text-lg text-gray-600">Phone</p>
            <p className="text-gray-800">+91 {phone}</p>
          </Col>

          {/* Username */}
          <Col xs={24} md={12}>
            <p className="font-semibold text-lg text-gray-600">Username</p>
            <p className="text-gray-800">{username}</p>
          </Col>

          {/* Role */}
          <Col xs={24} md={12}>
            <p className="font-semibold text-lg text-gray-600">Role</p>
            <p className="text-gray-800">{role}</p>
          </Col>

          {/* Email */}
          <Col xs={24}>
            <p className="font-semibold text-lg text-gray-600">Email</p>
            <p className="text-gray-800">{email}</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default UserDetailsPage;

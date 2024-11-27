import React, { useState, useEffect, useMemo } from "react";
import { Dropdown, Menu } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import Search from "../components/Search/Search";
import TableComponent from "../components/TableComponent/page";
import { getdata } from "../utils/Methods";
import LoadingSpinner from "../components/Loading/LoadingSpinner";
import FilterComponent from "../components/Filter/FilterComponent";
import {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../redux/slices/userSlice";

import CustomError from "../components/CustomError/CustomError";
import { GET_USER_LIST } from "../utils/Constant/apiConstant";

const Users = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, error } = useQuery({
    queryFn: () => getdata(GET_USER_LIST),
  });

  useEffect(() => {
    if (data?.data?.data) {
      dispatch(setUsers(data?.data?.data));
    }
  }, [data, dispatch]);

  // Handle search functionality
  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredData = useMemo(() => {
    return (users || []).filter((item) =>
      item.fullname.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [users, searchText]);

  const menu = (record) => (
    <Menu>
      <Menu.Item key="1" onClick={(e) => handleMenuClick(e, "delete", record)}>
        Delete
      </Menu.Item>
      <Menu.Item key="3" onClick={(e) => handleMenuClick(e, "report", record)}>
        Report
      </Menu.Item>
      <Menu.Item key="4" onClick={(e) => handleMenuClick(e, "edit", record)}>
        Edit
      </Menu.Item>
      <Menu.Item key="5" onClick={(e) => handleMenuClick(e, "clone", record)}>
        Clone
      </Menu.Item>
    </Menu>
  );

  const handleMenuClick = (e, action, record) => {
    e.stopPropagation(); // Prevent row click
    switch (action) {
      case "edit":
        console.log(`Edit ${record.fullname}`);
        break;
      case "delete":
        console.log(`Delete ${record.fullname}`);
        break;
      case "report":
        console.log(`Report for ${record.fullname}`);
        break;
      case "clone":
        console.log(`Clone ${record.fullname}`);
        break;
      default:
        break;
    }
  };

  const columns = [
    {
      title: "Avatar",
      key: "avatar",
      render: (text, record) => (
        <div className="flex justify-center">
          <img
            src={record.avatar}
            alt={record.fullname}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
      sorter: (a, b) => a.fullname.localeCompare(b.fullname),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      render: (text) => text || "N/A", // Show 'N/A' if phone number is missing
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (text) => (
        <span
          className={`px-3 py-1 rounded-2xl text-xs ${
            text === "admin"
              ? "bg-blue-50 border border-blue-400 text-blue-600"
              : "bg-gray-50 border border-gray-400 text-gray-600"
          }`}
        >
          {text.toUpperCase()}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="flex justify-center">
          <Dropdown
            overlay={menu(record)}
            trigger={["click"]}
            onClick={(e) => e.stopPropagation()}
          >
            <EllipsisOutlined />
          </Dropdown>
        </div>
      ),
    },
  ];
const handleRowClick=(record)=>{
  console.log(record)
navigate(`/admin/user/${record._id}`)
}
  if (isLoading) return <LoadingSpinner />;
  if (error) return <CustomError />;

  return (
    <div className="p-2 md:p-4 bg-white">
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Search searchText={searchText} handleSearch={handleSearch} />
          <FilterComponent />
        </div>
      </div>
      <TableComponent
        columns={columns}
        data={filteredData}
        rowKey="id"
        handleRowClick={handleRowClick}
        rowSelection={{
          type: "checkbox",
          onChange: (selectedRowKeys, selectedRows) => {
            console.log("Selected Row Keys:", selectedRowKeys);
            console.log("Selected Rows:", selectedRows);
          },
        }}
        pagination={{
          pageSize,
          showSizeChanger: true,
          onShowSizeChange: (_, size) => setPageSize(size),
          pageSizeOptions: ["5", "10", "20", "50", "100"],
        }}
      />
    </div>
  );
};

export default Users;

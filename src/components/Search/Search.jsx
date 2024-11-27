import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
const Search = ({ searchText, handleSearch }) => {
  return (
    <Input
      placeholder="Search"
      value={searchText}
      onChange={(e) => handleSearch(e.target.value)}
      prefix={<SearchOutlined />}
      className="w-full "
    />
  );
};

export default Search;

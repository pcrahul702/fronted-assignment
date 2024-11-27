import React from "react";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // Ensure Ant Design styles are applied
import "./customStyles.css"; // Import custom CSS for custom Tailwind styles (optional)



export const MyDropdownButton = ({label,onClick,onMenuClick,items}) => (
  <div>
    <Dropdown.Button
      onClick={onClick}
      menu={{
        items,
        onClick: onMenuClick,
      }}
      icon={<DownOutlined />}
    >
      {label}
    </Dropdown.Button>
  </div>
);

import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FilterOutlined } from "@ant-design/icons";

const Filter = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = () => setIsDrawerOpen(true);
  const handleClose = () => setIsDrawerOpen(false);

  return (
    <>
      {/* Filter Icon Button */}
      <div onClick={handleOpen} className="border p-1 rounded-md cursor-pointer">
    
        <FilterOutlined  />
      </div>

      {/* Filter Drawer */}
      <Drawer
        title="Filter Options"
        placement="right"
        onClose={handleClose}
        open={isDrawerOpen}
        width={300}
      >
        {children}
      </Drawer>
    </>
  );
};

export default Filter;

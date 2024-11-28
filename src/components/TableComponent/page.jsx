import React from "react";
import { Table } from "antd";

const Page = ({ data, columns, handleRowClick, rowKey,rowSelection,pagination }) => {
  return (
    <div className="w-full overflow-x-auto ">
        <Table
    className=""
      columns={columns}
      dataSource={data}
      pagination={pagination}
      scroll={{ x: "max-content" }} // Enables horizontal scrolling for overflow

      rowSelection={rowSelection}
      onRow={(record) => ({
        onClick: handleRowClick ? () => handleRowClick(record) : undefined, // Conditional handler
      })}
      rowClassName={handleRowClick ? "cursor-pointer" : ""}
      rowKey={rowKey}
    />
    </div>
  
  );
};

export default Page;

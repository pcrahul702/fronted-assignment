import React from "react";
import { Table } from "antd";

const Page = ({ data, columns, handleRowClick, rowKey,rowSelection,pagination }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={pagination}
      scroll={{ x: "max-content" }}
      rowSelection={rowSelection}
      onRow={(record) => ({
        onClick: handleRowClick ? () => handleRowClick(record) : undefined, // Conditional handler
      })}
      rowClassName={handleRowClick ? "cursor-pointer" : ""}
      rowKey={rowKey}
    />
  );
};

export default Page;

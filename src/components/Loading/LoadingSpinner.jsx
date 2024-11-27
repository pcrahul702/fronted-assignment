import React from "react";
import { Spin } from "antd";

const LoadingSpinner = ({ size = "large", message = "Loading..." }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center flex-col"
    >
      <Spin size={size} className="mb-4" />
      <div className="text-lg text-white font-medium">{message}</div>
    </div>
  );
};

export default LoadingSpinner;

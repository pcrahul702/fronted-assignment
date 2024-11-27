import React from "react";
import { Button, Result } from "antd";

const CustomError = ({ onRetry }) => {
  return (
    <div className="w-full flex items-center justify-center  ">
      <div className="max-w-lg p-6 bg-white shadow-lg rounded-md">
        <Result
          status="500"
          title={<span className="text-red-500 text-4xl">500</span>}
          subTitle={
            <p className="text-lg text-gray-600">
              Oops! Something went wrong on our end. We're working to fix it.
            </p>
          }
          extra={
            <div className="flex justify-center gap-4">
              <Button
                type="primary"
                className="bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => (onRetry ? onRetry() : window.location.reload())}
              >
                Retry
              </Button>
              <Button
                type="default"
                className="text-blue-500 border-blue-500 hover:text-blue-600 hover:border-blue-600"
                href="/"
              >
                Go to Homepage
              </Button>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default CustomError;

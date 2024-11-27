import React from 'react';
import { Button } from 'antd';

export const CustomButton = ({ icon, label, onClick, className,htmlType }) => {
  return (
    <Button
      onClick={onClick}
      className={`${className} py-5 px-5 bg-custom-blue hover:outline-none  text-custom-white hover:text-[#003d80] hover:bg-white focus:outline-none focus:shadow-none`}
      icon={icon}
      htmlType={htmlType}
    >
      {label}
    </Button>
  );
};

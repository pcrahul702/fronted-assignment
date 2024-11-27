import React from "react";
import { Modal, Button } from "antd";

const ModalComponent = ({
  isModalVisible,
  handleCancel,
  children,
  title
}) => {
  return (
    <div className="p-6">
      <Modal
        title={title}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        className="rounded-lg shadow-lg"
      >
        <div className="space-y-4">{children}</div>
      </Modal>
    </div>
  );
};

export default ModalComponent;

import { Button, Modal } from "antd";
import React from "react";
import ContentComponent from "./ContentComponent";

const ContentModal = ({ ...props }) => {
  return (
    <Modal
      style={{ top: 20 }}
      {...props}
      footer={[
        <Button
          key="full_page"
          type="default"
          onClick={() =>
            (window.location.href = "/app/angiogram/info/" + props.type)
          }
        >
          See in Full Page
        </Button>,
        <Button key="back" type="primary" onClick={props.onOk}>
          Back
        </Button>,
      ]}
    >
      <ContentComponent type={props.type} />
    </Modal>
  );
};

export default ContentModal;

import { Button, Modal } from "antd";
import React from "react";
import ContentComponent from "./ContentComponent";
import { useNavigate } from "react-router-dom";

const ContentModal = ({ ...props }) => {
  const navigate = useNavigate();
  return (
    <Modal
      style={{ top: 20 }}
      {...props}
      footer={[
        <Button
          key="full_page"
          type="default"
          onClick={
            () => navigate("/app/angiogram/info/" + props.type)
            //(window.location.href = "/app/angiogram/info/" + props.type)
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

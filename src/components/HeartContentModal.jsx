import { Button, Modal } from "antd";
import React from "react";
import HeartContentComponent from "./HeartContentComponent";

const HeartContentModal = ({ ...props }) => {
  return (
    <>
      <Modal
        style={{ top: 20 }}
        {...props}
        footer={[
          <Button
            key="full_page"
            type="default"
            onClick={() =>
              (window.location.href =
                "/app/coronary_arteries/info/" + props.type)
            }
          >
            See in Full Page
          </Button>,
          <Button key="back" type="primary" onClick={props.onOk}>
            Back
          </Button>,
        ]}
      >
        <HeartContentComponent type={props.type} />
      </Modal>
    </>
  );
};

export default HeartContentModal;

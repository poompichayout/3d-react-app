import { Button, Col, Image, Modal, Row, Typography } from "antd";
import React from "react";
import marker from "src/images/pattern-AR_marker.png";
import sample from "src/images/ar-sample.gif";

const ARModal = ({ ...props }) => {
  return (
    <Modal
      title="How to use Augmented Reality Mode"
      footer={[
        <Button
          key="full_page"
          type="primary"
          onClick={() => (window.location.href = "/arteries_AR.html")}
        >
          Enter AR Mode
        </Button>,
      ]}
      {...props}
    >
      <Row justify="center">
        <Col xs={24} md={22}>
          <Typography.Text>
            1. Download this picture on your another device
          </Typography.Text>
        </Col>
        <Image src={marker} width="25%"></Image>
        <Col xs={24} md={22}>
          2. Open AR Mode and put a marker in front of the camera for model detection
        </Col>
        <Image src={sample} width="25%"></Image>
      </Row>
    </Modal>
  );
};

export default ARModal;

import { Button, Col, Image, Modal, Row, Typography } from "antd";
import Content from "src/heartContents.json";
import React, { useEffect, useState } from "react";
import blank from "src/images/white-image.png";
import ContentModal from "./ContentModal";
const { Link } = Typography;

const HeartContentModal = ({ ...props }) => {
  const [content, setContent] = useState(Content[props.type]);
  const [type, setType] = useState("rao-cranial");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (e) => {
    if (e.target.innerText === "Distal: LAO cranial") {
      setType("lao-cranial");
    } else {
      setType(
        e.target.innerText
          .split(" ")
          .map((value) => value.toLowerCase())
          .join("-")
      );
    }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setContent(Content[props.type]);
  }, [props.type]);

  return (
    <>
      <Modal
        style={{ top: 20 }}
        {...props}
        footer={[
          <Button key="back" type="primary" onClick={props.onOk}>
            Back
          </Button>,
        ]}
      >
        <Row justify="center" align="middle" style={{ marginTop: "2em" }}>
          <Col xs={20} md={10}>
            <Typography.Title level={2} style={{ marginBottom: 0 }}>
              {content?.title ?? ""}
            </Typography.Title>
            <Typography.Title
              level={4}
              style={{ margin: 0, marginBottom: "1em" }}
            >
              {content?.aka ?? ""}
            </Typography.Title>
            <ul>
              <li key={5}>
                <Typography.Text>
                  <b>Location:</b> {content?.location}
                </Typography.Text>
              </li>
              <li key={6}>
                <Typography.Text>
                  <b>Function:</b> {content?.function}
                </Typography.Text>
              </li>
              <li key={7}>
                <Typography.Text>
                  {content.defects ? (
                    <b>Importance in cardiovascular defects:</b>
                  ) : null}
                  {content.defects?.map((value, index) => (
                    <Typography.Paragraph key={index}>
                      {value}
                    </Typography.Paragraph>
                  ))}
                </Typography.Text>
              </li>
              <li key={9}>
                <Typography.Text>
                  <ul>
                    Best view at:
                    {content.best_views.map((value, index) => (
                      <li key={index}>
                        {(props.type === "RCA" || props.type === "LM") &&
                        index === 0 ? (
                          value
                        ) : (
                          <Link underline to="#" onClick={showModal}>
                            {value}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </Typography.Text>
              </li>
            </ul>
          </Col>
          <Col xs={20} md={10} style={{ height: "100%" }}>
            <Row align="middle" justify="center">
              <Col xs={24} align="middle">
                <Image
                  width={200}
                  height={200}
                  src={content?.picture_path ?? blank}
                />
              </Col>
              <Col xs={24} align="middle">
                <Typography.Title level={4} style={{ marginTop: "1em" }}>
                  {content?.subtitle}
                </Typography.Title>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal>
      <ContentModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"100%"}
        type={type}
      />
    </>
  );
};

export default HeartContentModal;

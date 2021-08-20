import { Button, Col, Collapse, Modal, Row, Typography } from "antd";
import Content from "src/contents.json";
import React, { useEffect, useState } from "react";
const { Panel } = Collapse;

const ContentModal = ({ ...props }) => {
  const [content, setContent] = useState(Content[props.type]);

  useEffect(() => {
    setContent(Content[props.type]);
  }, [props.type]);

  return (
    <Modal
      {...props}
      footer={[
        <Button key="back" type="primary" onClick={props.onOk}>
          Back
        </Button>,
      ]}
    >
      <Row justify="center" align="top" style={{ marginTop: "2em" }}>
        <Col xs={20}>
          <Typography.Title style={{ fontSize: "2em" }}>
            {props.type.split("-")[0].toUpperCase() +
              " " +
              capitalizeFirstLetter(props.type.split("-")[1])}
          </Typography.Title>
          <Typography.Text> is best for visualization of </Typography.Text>
          <ul>
            {content.header.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </Col>
      </Row>
      <Row justify="center" align="top">
        <Col xs={22}>
          <Collapse defaultActiveKey={[0, 1, 2]}>
            {content.contents.map((value, index) => {
              return (
                <Panel header={value.title} key={index}>
                  {value.content.map((s, idx) => (
                    <p key={idx}>{s}</p>
                  ))}
                </Panel>
              );
            })}
          </Collapse>
        </Col>
      </Row>
    </Modal>
  );
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default ContentModal;

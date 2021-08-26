import {
  Button,
  Col,
  Collapse,
  Modal,
  Popover,
  Row,
  Space,
  Typography,
} from "antd";
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
      style={{ top: 20 }}
      {...props}
      footer={[
        <Button key="back" type="primary" onClick={props.onOk}>
          Back
        </Button>,
      ]}
    >
      <Row justify="center" align="top" style={{ marginTop: "2em" }}>
        <Col xs={20}>
          <Row aign="middle">
            <Space size="large">
              <Typography.Title style={{ fontSize: "2em" }}>
                {props.type.split("-")[0].toUpperCase() +
                  " " +
                  capitalizeFirstLetter(props.type.split("-")[1])}
              </Typography.Title>
              <Popover
                placement="rightTop"
                title={<span>TIPS</span>}
                content={
                  <>
                    <Typography.Title level={3}>
                      {props.type.split("-")[0].toUpperCase()}
                    </Typography.Title>
                    <ul>
                      {contentText[props.type.split("-")[0].toLowerCase()].map(
                        (value) => (
                          <li>{value}</li>
                        )
                      )}
                    </ul>
                    <Typography.Title level={3}>
                      {capitalizeFirstLetter(props.type.split("-")[1])}
                    </Typography.Title>
                    <ul>
                      {contentText[props.type.split("-")[1].toLowerCase()].map(
                        (value) => (
                          <li>{value}</li>
                        )
                      )}
                    </ul>
                  </>
                }
                trigger="click"
              >
                <Button type="primary">TIPS</Button>
              </Popover>
            </Space>
          </Row>

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

const contentText = {
  ap: [
    "Image intensifier is directly over the patient with the beam perpendicular to the patient.",
    "Spine is in the center of the screen. ",
  ],
  rao: [
    "Image intensifier is on the right side of the patient.",
    "Spine is on the left.",
    "RCA resembles the letter “L”.",
    "Overlap of PLA and PL (distal part).",
    "LAD is on the top of the screen.",
    "Septal branches appear to branch off LAD at 90 degrees.",
  ],
  lao: [
    "Image intensifier is on the left side of the patient.",
    "Spine is on the right.",
    "RCA resembles the letter “C”.",
    "Separate PDA and PL.",
    "PDA is more inferior on the screen than PL.",
    "LAD is on the right hand side of the screen.",
    "LCx lies closest to the spine.",
    "Septals reach toward the left of the LAD.",
    "Diagonal reach toward the right of the LAD.",
  ],
  cranial: ["The diaphragmatic shadow is seen at the bottom"],
  caudal: ["No diaphragmatic shadow"],
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default ContentModal;

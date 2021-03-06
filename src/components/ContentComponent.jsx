import React, { useEffect, useState } from "react";
import { Col, Collapse, Image, Row, Space, Typography, List } from "antd";
import Content from "src/contents/contents.json";
import blank from "src/images/white-image.png";
const images = require.context("../", true);
const { Panel } = Collapse;

const ContentComponent = ({ type }) => {
  const [content, setContent] = useState(Content[type]);

  useEffect(() => {
    setContent(Content[type]);
  }, [type]);

  return (
    <>
      <Row justify="center" align="top" style={{ marginTop: "2em" }}>
        <Col xs={20}>
          <Typography.Title style={{ fontSize: "2em" }}>
            {type.split("-")[0].toUpperCase() +
              " " +
              capitalizeFirstLetter(type.split("-")[1])}
          </Typography.Title>
          <Row justify="left">
            <Col xs={24} md={24}>
              <Typography.Text>is optimal for visualization of</Typography.Text>
              <ul style={{ paddingLeft: "1.5em" }}>
                {content.header.map((value, index) => {
                  return <li key={index}>{value}</li>;
                })}
              </ul>
            </Col>
            <Col xs={24} md={24}>
              <Typography.Title level={5}>TIPS</Typography.Title>
              <Collapse>
                <Panel header={type.split("-")[0].toUpperCase()}>
                  <List
                    size="small"
                    dataSource={contentText[type.split("-")[0].toLowerCase()]}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Panel>
                <Panel header={capitalizeFirstLetter(type.split("-")[1])}>
                  <List
                    size="small"
                    dataSource={contentText[type.split("-")[1].toLowerCase()]}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Panel>
              </Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" align="top" style={{ marginTop: "2em" }}>
        <Col xs={22}>
          <Collapse defaultActiveKey={[0, 1, 2]}>
            {content.contents.map((value, index) => {
              return (
                <Panel header={value.title} key={index}>
                  <Row
                    justify="center"
                    style={{ marginBottom: value?.pic_left ? "2em" : "0" }}
                  >
                    {/**
                     * ???????????????????????????
                     */}
                    <Col xs={20} align="middle">
                      {value?.pic_mid ? (
                        <>
                          <Image
                            src={
                              images(
                                value?.pic_left || "./images/white-image.png"
                              ).default ?? blank
                            }
                            width={200}
                            style={{ border: "2px solid" }}
                          />
                          <br />
                          <Space wrap align="start">
                            <Space direction="vertical">
                              <Image
                                src={
                                  images(
                                    value?.pic_mid || "./images/white-image.png"
                                  ).default ?? blank
                                }
                                width={200}
                                style={{ border: "2px solid" }}
                              />
                              <p>RAO30</p>
                            </Space>
                            <Space direction="vertical">
                              <Image
                                src={
                                  images(
                                    value?.pic_right ||
                                      "./images/white-image.png"
                                  ).default ?? blank
                                }
                                width={200}
                                style={{ border: "2px solid" }}
                              />
                              {value?.pic_mid ? <p>RAO45</p> : null}
                            </Space>
                          </Space>
                        </>
                      ) : (
                        <Space wrap align="start">
                          {value?.pic_left ? (
                            <Image
                              src={
                                images(
                                  value?.pic_left || "./images/white-image.png"
                                ).default ?? blank
                              }
                              width={200}
                              style={{ border: "2px solid" }}
                            />
                          ) : null}

                          {value?.pic_mid ? (
                            <Space direction="vertical">
                              <Image
                                src={
                                  images(
                                    value?.pic_mid || "./images/white-image.png"
                                  ).default ?? blank
                                }
                                width={200}
                                style={{ border: "2px solid" }}
                              />
                              <p>RAO30</p>
                            </Space>
                          ) : null}
                          {value?.pic_right ? (
                            <Space direction="vertical">
                              <Image
                                src={
                                  images(
                                    value?.pic_right ||
                                      "./images/white-image.png"
                                  ).default ?? blank
                                }
                                width={200}
                                style={{ border: "2px solid" }}
                              />
                              {value?.pic_mid ? <p>RAO45</p> : null}
                            </Space>
                          ) : null}
                        </Space>
                      )}
                    </Col>
                    {/**
                     * ?????????????????????????????????
                     */}
                  </Row>
                  {value.content.map((s, idx) => (
                    <p
                      key={idx}
                      style={{
                        textAlign: "justify",
                        textIndent: "2em",
                        marginBottom: 0,
                      }}
                    >
                      {s}
                    </p>
                  ))}
                </Panel>
              );
            })}
          </Collapse>
        </Col>
      </Row>
    </>
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
    "RCA resembles the letter ???L???.",
    "Overlap of PLA and PL (distal part).",
    "LAD is on the top of the screen.",
    "Septal branches appear to branch off LAD at 90 degrees.",
  ],
  lao: [
    "Image intensifier is on the left side of the patient.",
    "Spine is on the right.",
    "RCA resembles the letter ???C???.",
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

export default ContentComponent;

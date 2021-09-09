import React, { useEffect, useState } from "react";
import { Col, Image, Row, Typography } from "antd";
import Content from "src/heartContents.json";
import blank from "src/images/white-image.png";
const images = require.context('../', true);
const { Link } = Typography;

const HeartContentComponent = ({ type, ...props }) => {
  const [content, setContent] = useState(Content[type]);

  useEffect(() => {
    setContent(Content[type]);
  }, [type]);

  return (
    <Row justify="center" align="middle" style={{ marginTop: "2em" }}>
      <Col xs={20} xl={10}>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          {content?.title ?? ""}
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0, marginBottom: "1em" }}>
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
          {content.defects ? (
            <li key={7}>
              <Typography.Text>
                <b>Importance in cardiovascular defects:</b>
                {content.defects?.map((value, index) => (
                  <Typography.Paragraph key={index}>
                    {value}
                  </Typography.Paragraph>
                ))}
              </Typography.Text>
            </li>
          ) : null}

          <li key={9}>
            <Typography.Text>
              <ul>
                <b>Best view at:</b>
                {content.best_views.map((value, index) => (
                  <li key={index}>
                    {(type === "RCA" || type === "LM") && index === 0 ? (
                      value
                    ) : (
                      <Link
                        underline
                        to="#"
                        onClick={() =>
                          (window.location.href = `/app/angiogram/info/${value
                            .split(" ")
                            .map((x) => x.toLowerCase())
                            .join("-")}`)
                        }
                      >
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
      <Col xs={20} xl={10} style={{ height: "100%" }}>
        <Row align="middle" justify="center">
          <Col xs={24} align="middle">
            <Row justify="center" style={{ marginTop: "2em"}}>
              <Col xs={24} md={12}>
              <Image
                width={200}
                height={200}
                src={blank}
                style={{ border: "2px solid" }}
              />
              </Col>
              <Col xs={24} md={12}>
              <Image
                width={200}
                height={200}
                src={images(content?.picture_path).default ?? blank}
              />
              </Col>
            </Row>
          </Col>
          <Col xs={24} align="middle">
            <Typography.Title level={4} style={{ marginTop: "1em" }}>
              {content?.subtitle}
            </Typography.Title>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeartContentComponent;

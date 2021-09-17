import React, { useEffect, useState } from "react";
import { Col, Image, Row, Typography } from "antd";
import Content from "src/contents/heartContents.json";
import blank from "src/images/white-image.png";
import { useNavigate } from "react-router";
const images = require.context("../", true);
const { Link } = Typography;

const HeartContentComponent = ({ type, ...props }) => {
  const [content, setContent] = useState(Content[type]);
  const navigate = useNavigate();

  const RCAOptimalViews = () => {
    return (
      <>
        <li>
          {"Proximal: "}
          <Link
            underline
            to="#"
            onClick={() => navigate(`/app/angiogram/info/lao-cranial`)}
          >
            LAO Cranial
          </Link>
          {", "}
          <Link
            underline
            to="#"
            onClick={() => navigate(`/app/angiogram/info/ap-cranial`)}
          >
            AP Cranial
          </Link>
        </li>
        <li>
          {"Mid: "}
          <Link
            underline
            to="#"
            onClick={() => navigate(`/app/angiogram/info/lao-cranial`)}
          >
            LAO Cranial
          </Link>
        </li>
        <li>
          {"Distal: "}
          <Link
            underline
            to="#"
            onClick={() => navigate(`/app/angiogram/info/lao-cranial`)}
          >
            LAO Cranial
          </Link>
          {", "}
          <Link
            underline
            to="#"
            onClick={() => navigate(`/app/angiogram/info/ap-cranial`)}
          >
            AP Cranial
          </Link>
        </li>
      </>
    );
  };

  useEffect(() => {
    setContent(Content[type]);
  }, [type]);

  return (
    <Row justify="center" align="top" style={{ marginTop: "2em" }}>
      <Col xs={20} xl={10}>
        <Typography.Title level={2} style={{ marginBottom: 0 }}>
          {content?.title ?? ""}
        </Typography.Title>
        <Typography.Title level={4} style={{ margin: 0, marginBottom: "1em" }}>
          {content?.aka ?? ""}
        </Typography.Title>
        <ul style={{ paddingLeft: 0 }}>
          <li key={5}>
            <Typography.Text>
              <b>Location:</b>{" "}
              {content?.location.map((value, index) => (
                <Typography.Paragraph
                  style={{
                    marginBottom: "0",
                    textAlign: "justify",
                    textIndent: "1em",
                  }}
                >
                  {value}
                </Typography.Paragraph>
              ))}
            </Typography.Text>
          </li>
          <li key={6}>
            <Typography.Text>
              <b>Function:</b>{" "}
              <Typography.Paragraph
                style={{
                  marginBottom: "0",
                  textAlign: "justify",
                  textIndent: "1em",
                }}
              >
                {content?.function}
              </Typography.Paragraph>
            </Typography.Text>
          </li>
          {content.defects ? (
            <li key={7}>
              <Typography.Text>
                <b>Importance in cardiovascular defects:</b>
                {content.defects?.map((value, index) => (
                  <Typography.Paragraph
                    key={index}
                    style={{
                      textIndent: "1em",
                      marginBottom: "0",
                      textAlign: "justify",
                    }}
                  >
                    {value}
                  </Typography.Paragraph>
                ))}
              </Typography.Text>
            </li>
          ) : null}

          <li key={9}>
            <Typography.Text>
              <ul>
                <b>Optimal view at:</b>
                {type === "RCA" ? (
                  <RCAOptimalViews />
                ) : (
                  content.best_views.map((value, index) => (
                    <li key={index}>
                      {
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
                      }
                    </li>
                  ))
                )}
              </ul>
            </Typography.Text>
          </li>
        </ul>
      </Col>
      <Col xs={20} xl={10} style={{ height: "100%" }}>
        <Row align="middle" justify="center">
          <Col xs={24} align="right">
            <Row justify="center" style={{ marginTop: "2em" }}>
              {content.picture_path?.map((value, index) => (
                <Col xs={24} md={12}>
                  <Image
                    width={"90%"}
                    src={
                      images(value || "./images/white-image.png").default ??
                      blank
                    }
                    style={{ marginTop: "1em", border: "solid 2px" }}
                  />
                  <p>
                    <Typography.Text style={{ textAlign: "center" }}>
                      {content.best_views[index]}
                    </Typography.Text>
                  </p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HeartContentComponent;

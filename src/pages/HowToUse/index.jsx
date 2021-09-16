import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Flag from "react-world-flags";
import styled from "styled-components";
import { Col, Row, Space, Switch, Typography } from "antd";
import Abbreviation from "./Abbreviation";
import HowToUseEN from "./HowToUseEN";
import HowToUseTH from "./HowToUseTH";
import YouTube from "react-youtube";
import { useLocation } from "react-router";

const opts = {
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

function HowToUse() {
  const [lang, setLang] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onLanguageChange = () => {
    setLang(!lang);
  };
  return (
    <>
      <Helmet>
        <title>How To Use - Cardiac Catheterization</title>
      </Helmet>
      <RowStyled justify="center" align="top">
        <Col xs={22} md={18}>
          <Row>
            <Col xs={24} md={21}>
              <Typography.Title style={{ float: "left" }}>
                {lang ? "How To Use" : <div className="th">วิธีการใช้</div>}
              </Typography.Title>
            </Col>
            <Col xs={24} md={2} style={{ marginBottom: "2em" }}>
              <Space>
                <Flag code="TH" height="16" />
                <Switch defaultChecked onChange={onLanguageChange} />
                <Flag code="GB" height="16" />
              </Space>
            </Col>
          </Row>
          <Row justify="center">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={18}
              xl={14}
              align="middle"
              style={{
                marginBottom: "2em",
                marginTop: "2em",
              }}
            >
              <YouTube videoId="eplGvr1x760" opts={opts} />
            </Col>
          </Row>
          <Row>{lang ? <HowToUseEN /> : <HowToUseTH />}</Row>
        </Col>
        <Col xs={22} md={18} style={{ marginTop: "4em" }}>
          <Abbreviation />
        </Col>
      </RowStyled>
    </>
  );
}

const RowStyled = styled(Row)`
  background: #fff;
  background-color: #fff;
  padding-top: 4em;
  padding-bottom: 4em;
`;

export default HowToUse;

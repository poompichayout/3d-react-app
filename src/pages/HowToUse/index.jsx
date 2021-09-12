import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Flag from "react-world-flags";
import styled from "styled-components";
import { Col, Row, Space, Switch, Typography } from "antd";
import Abbreviation from "./Abbreviation";
import HowToUseEN from "./HowToUseEN";
import HowToUseTH from "./HowToUseTH";
import YouTube from "react-youtube";

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};

function HowToUse() {
  const [lang, setLang] = useState(true);

  const onLanguageChange = () => {
    setLang(!lang);
  };
  return (
    <>
      <Helmet>
        <title>How To Use - Cardiac Catheterization</title>
      </Helmet>
      <RowStyled justify="center" align="top">
        <Col xs={24} md={18}>
          <Row>
            <Col xs={24} sm={18}>
              <Typography.Title>
                {lang ? "How To Use" : <div className="th">วิธีการใช้</div>}
              </Typography.Title>
            </Col>
            <Col xs={24} sm={2} style={{ marginBottom: "2em" }}>
              <Space>
                <Flag code="TH" height="16" />
                <Switch defaultChecked onChange={onLanguageChange} />
                <Flag code="GB" height="16" />
              </Space>
            </Col>
            <Col xs={22} align="middle" style={{ marginBottom: "2em", marginTop: "2em" }}>
              <YouTube videoId="6-UoGDOQfDM" opts={opts} />
            </Col>
          </Row>
          <Row>{lang ? <HowToUseEN /> : <HowToUseTH />}</Row>
        </Col>
        <Col xs={24} md={18} style={{ marginTop: "4em" }}>
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

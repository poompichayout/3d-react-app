import React from "react";
import { Image, Typography } from "antd";
import { Row, Col, Button } from "antd";

import styled from "styled-components";
import angiogram from "src/images/bedwhuman.png";
import heart from "src/images/heart.png";
import vassel from "src/images/vassel.png";

const HeaderNew = () => {
  return (
    <RowStyled justify="center" align="middle">
      <Col xs={20} align="middle">
        <Typography.Title>Cardiac Catheterization</Typography.Title>
      </Col>
      <Col xs={10} md={9} align="right" style={{margin: 0}}>
        <HoverableImage
          preview={false}
          src={angiogram}
          width="80%"
          onClick={() => window.location.href = "/app/angiogram"}
          style={{ cursor: "pointer" }}
        />
      </Col>
      <Col xs={3} md={3} align="middle" style={{margin: 0}}>
        <Image
          preview={false}
          src={heart}
          width="150%"
          style={{ marginTop: "15%" }}
        />
      </Col>
      <Col xs={10} md={10} align="left" style={{margin: 0}}>
        <HoverableImage
          preview={false}
          src={vassel}
          width="75%"
          onClick={() => window.location.href = "/app/coronary_arteries"}
          style={{ cursor: "pointer" }}
        />
      </Col>
      <Col xs={10} md={10} align="middle">
        <LandingButton href="/app/angiogram">Angiogram</LandingButton>
      </Col>
      <Col xs={10} md={10} align="middle">
        <LandingButton href="/app/coronary_arteries">
          Coronary arteries
        </LandingButton>
      </Col>
    </RowStyled>
  );
};

const RowStyled = styled(Row)`
  background: #fff;
  background-color: #fff;
  padding-top: 4em;
  padding-bottom: 4em;
`;

const HoverableImage = styled(Image)`
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(80%);
  }

  &:active {
    filter: brightness(70%);
  }
`;

const LandingButton = styled(Button).attrs({
  type: "primary",
  shape: "round",
})`
  margin-top: 2em;
  width: 80%;
`;

export default HeaderNew;

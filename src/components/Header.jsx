import React from "react";
import { Typography } from "antd";
import { Row, Col, Button } from "antd";

import styled from "styled-components";
import angio from "../images/bedwhuman.png";
import LandingDisplayCard from "./LandingDisplayCard";

const Header = () => {
  return (
    <RowStyled justify="center" align="middle">
      <Col xs={20} md={8}>
        <Row>
          <ContentRow>
            <Typography.Title>Cardiac Catheterization</Typography.Title>
            <Typography.Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              quod id voluptatem veniam, accusantium consequatur, itaque at
              excepturi quaerat officiis, maxime ullam alias adipisci.
            </Typography.Paragraph>
          </ContentRow>
          <LandingButton href="/app/angiogram">Angiogram</LandingButton>
          <LandingButton href="/app/coronary_arteries">Coronary arteries</LandingButton>
        </Row>
      </Col>
      <Col xs={20} md={8} style={{ paddingTop: "4em" }}>
        <Row justify="center" align="middle">
          <LandingDisplayCard src={angio} title="Angiogram" />
        </Row>
      </Col>
    </RowStyled>
  );
};

const RowStyled = styled(Row)`
  min-height: 100vh;
  background: #fff;
  background-color: #fff;
  padding: 4em;
`;

const ContentRow = styled(Typography)`
  color: #fff;
`;

const LandingButton = styled(Button).attrs({
  type: "primary",
  shape: "round",
})`
  margin-top: 2em;
  width: 80%;
`;

export default Header;

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
            <Typography.Title>3D Model Viewer</Typography.Title>
            <Typography.Paragraph>
              Ant admin is a powerful admin template built with Ant Design
              guideline in mind, it comes with tons of useful features and more
              on the way.
            </Typography.Paragraph>
          </ContentRow>
          <LandingButton>PLAY IT!!</LandingButton>
        </Row>
      </Col>
      <Col xs={20} md={8} style={{ paddingTop: "4em"}}>
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

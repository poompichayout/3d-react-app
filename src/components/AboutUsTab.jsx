import React from "react";
import { Typography, Avatar, Card, Space } from "antd";
import { Row, Col, Image } from "antd";
import { MailOutlined } from "@ant-design/icons";

import styled from "styled-components";
import mixed from "../images/mixed.png";
import hospital from "../images/BH_logo.png";
const { Title } = Typography;

const AboutUsTab = () => {
  return (
    <div id="about_us">
      <RowStyled justify="center" style={{ paddingBottom: "1em" }}>
        <Col xs={18}>
          <StyledTitle>About Us</StyledTitle>
        </Col>
      </RowStyled>
      <RowStyled
        justify="center"
        align="top"
        style={{ textAlign: "left", paddingTop: "0" }}
      >
        <CardCol xs={20} lg={6}>
          <Card
            style={{ width: 300 }}
            actions={[
              <SpaceStyled align="center">
                <MailOutlined key="setting" />
                methits.ase@dome.tu.ac.th
              </SpaceStyled>,
            ]}
          >
            <Card.Meta
              avatar={
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                  }}
                >
                  M
                </Avatar>
              }
              title="Methits A."
              description="Contact: (+66) 83-979-9120"
            />
          </Card>
        </CardCol>
        <CardCol xs={20} lg={6}>
          <Card
            style={{ width: 300 }}
            actions={[
              <SpaceStyled align="center">
                <MailOutlined key="setting" />
                manassanan.ark@dome.tu.ac.th
              </SpaceStyled>,
            ]}
          >
            <Card.Meta
              avatar={
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                  }}
                >
                  M
                </Avatar>
              }
              title="Manassanan A."
              description="Contact: (+66) 92-451-4562"
            />
          </Card>
        </CardCol>
        <CardCol xs={20} lg={6}>
          <Card
            style={{ width: 300 }}
            actions={[
              <SpaceStyled align="center">
                <MailOutlined key="setting" />
                ploy.rat@dome.tu.ac.th
              </SpaceStyled>,
            ]}
          >
            <Card.Meta
              avatar={
                <Avatar
                  style={{
                    color: "#f56a00",
                    backgroundColor: "#fde3cf",
                  }}
                >
                  P
                </Avatar>
              }
              title="Ploy R."
              description="Contact: (+66) 83-713-0930"
            />
          </Card>
        </CardCol>
      </RowStyled>
      <RowStyled justify="center">
        <Col xs={18}>
          <Typography.Title level={3}>Special Thanks To</Typography.Title>
        </Col>
      </RowStyled>
      <RowStyled
        justify="center"
        align="top"
        style={{ minHeight: "30vh", padding: "0 0 2em 0" }}
      >
        <Col xs={24}>
          <Image width={300} src={mixed} preview={false} />
          <Image src={hospital} height={110} width={281.6} preview={false} />
        </Col>
      </RowStyled>
    </div>
  );
};

const RowStyled = styled(Row)`
  padding-top: 4em;
  background: #fff;
  background-color: #f0f0f0;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  @media only screen and (max-width: 576px) {
    &.ant-typography {
      font-size: 25px;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 890px) {
    &.ant-typography {
      font-size: 30px;
    }
  }
`;

const SpaceStyled = styled(Space)`
  cursor: default;
  color: rgba(58, 52, 51, 0.7);
`;

const CardCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AboutUsTab;

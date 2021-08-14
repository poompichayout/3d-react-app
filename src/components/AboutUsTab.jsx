import React from "react";
import { Typography, Avatar, Card } from "antd";
import { Row, Col, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styled from "styled-components";
import mixed from "../images/mixed.png";

const AboutUsTab = () => {
  return (
    <div id="about_us">
      <RowStyled justify="center">
        <Col xs={18}>
          <Typography.Title>About Us</Typography.Title>
        </Col>
      </RowStyled>
      <RowStyled justify="center" align="top" style={{ textAlign: "left", paddingTop: "0" }}>
        <CardCol
          xs={20}
          lg={6}
        >
          <Card style={{ width: 300 }} actions={[]}>
            <Card.Meta
              avatar={<Avatar size={64} icon={<UserOutlined />} />}
              title="Methits"
              description="Contact: "
            />
          </Card>
        </CardCol>
        <CardCol xs={20} lg={6}>
          <Card style={{ width: 300 }} actions={[]}>
            <Card.Meta
              avatar={<Avatar size={64} icon={<UserOutlined />} />}
              title="Manassanan"
              description="Contact: "
            />
          </Card>
        </CardCol>
        <CardCol xs={20} lg={6}>
          <Card style={{ width: 300 }} actions={[]}>
            <Card.Meta
              avatar={<Avatar size={64} icon={<UserOutlined />} />}
              title="Ploy"
              description="Contact: "
            />
          </Card>
        </CardCol>
      </RowStyled>
      <RowStyled justify="center">
        <Col xs={18}>
          <Typography.Title level={3}>Special Thanks To</Typography.Title>
        </Col>
      </RowStyled>
      <RowStyled justify="center" style={{ minHeight: "30vh", padding: "0 0 2em 0" }}>
        <Col xs={24}>
          <Image width={300} src={mixed} preview={false} />
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

const CardCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AboutUsTab;

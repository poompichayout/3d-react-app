import React from "react";
import { Typography, Avatar, List, Divider } from "antd";
import { Row, Col, Image } from "antd";

import styled from "styled-components";
import mixed from "../images/mixed.png";
import hospital from "../images/BH_logo.png";
const { Title } = Typography;

const AboutUsTab = () => {
  return (
    <div id="about_us">
      <RowStyled justify="center">
        <Col xs={18}>
          <StyledTitle>About Us</StyledTitle>
        </Col>
      </RowStyled>
      <RowStyled
        justify="center"
        align="top"
        style={{
          textAlign: "left",
          paddingTop: "0",
        }}
      >
        <Col xs={20} md={10} lg={8} xl={6} style={{ paddingBottom: "3em" }}>
          <Typography.Title level={4}>Organizer</Typography.Title>
          <Divider />
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      style={{
                        color: "#f56a00",
                        backgroundColor: "#fde3cf",
                      }}
                    >
                      {item.nickname}
                    </Avatar>
                  }
                  title={<>{item.title}</>}
                  description={
                    <>
                      <p style={{ marginBottom: "0.25em" }}>
                        Contact: {item.contact}
                      </p>
                      <p style={{ marginBottom: "0.25em" }}>
                        E-mail: {item.email}
                      </p>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
        <Divider type="vertical" />
        <Col
          xs={20}
          md={8}
          lg={5}
          xl={4}
          align="left"
          style={{ paddingBottom: "3em" }}
        >
          <Typography.Title level={4} style={{ whiteSpace: "nowrap" }}>
            Special Thanks To
          </Typography.Title>
          <Divider />
          <Image width={200} src={mixed} preview={false} /> <br />
          <Image
            src={hospital}
            height={78.125}
            width={200}
            preview={false}
            style={{ marginTop: "0.5em" }}
          />
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

const data = [
  {
    title: "Methits A.",
    nickname: "M",
    contact: "(+66) 83-979-9120",
    email: "methits.ase@dome.tu.ac.th",
  },
  {
    title: "Manassanan A.",
    nickname: "M",
    contact: "(+66) 92-451-4562",
    email: "manassanan.ark@dome.tu.ac.th",
  },
  {
    title: "Ploy R.",
    nickname: "P",
    contact: "(+66) 83-713-0930",
    email: "ploy.rat@dome.tu.ac.th",
  },
];

export default AboutUsTab;

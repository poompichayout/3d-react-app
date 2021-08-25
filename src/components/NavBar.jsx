import { Col, Menu, Row } from "antd";
import React, { useState } from "react";
import {
  HomeOutlined,
  TeamOutlined,
  BarsOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const NavBar = () => {
  const [active, setActive] = useState("mail");

  const handleClick = (e) => {
    setActive(e.key);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Row justify="center">
      <Col xs={12} sm={9} md={10}>
        <Menu onClick={handleClick} mode="horizontal" selectedKeys={[active]}>
          <SubMenu
            key="SubMenu"
            icon={<BarsOutlined />}
            title="3D Model Viewer"
          >
            <Menu.ItemGroup title="Module">
              <SubMenu
                key="angiogram"
                title="Angiogram"
                onTitleClick={() => (window.location.href = "/app/angiogram")}
              >
                <Menu.Item key="angiogram:1">RAO Caudal</Menu.Item>
                <Menu.Item key="angiogram:2">RAO Cranial</Menu.Item>
                <Menu.Item key="angiogram:3">LAO Caudal</Menu.Item>
                <Menu.Item key="angiogram:4">LAO Cranial</Menu.Item>
                <Menu.Item key="angiogram:5">AP Caudal</Menu.Item>
                <Menu.Item key="angiogram:6">AP Cranial</Menu.Item>
              </SubMenu>
              <SubMenu
                key="arteries"
                title="Coronary arteries"
                onTitleClick={() => (window.location.href = "/app/coronary_arteries")}
              >
                <Menu.Item key="arteries:1">LM</Menu.Item>
                <Menu.Item key="arteries:2">LAD</Menu.Item>
                <Menu.Item key="arteries:3">LCx</Menu.Item>
                <Menu.Item key="arteries:4">Septal</Menu.Item>
                <Menu.Item key="arteries:5">Diagonal</Menu.Item>
                <Menu.Item key="arteries:6">RCA</Menu.Item>
                <Menu.Item key="arteries:7">RMA</Menu.Item>
                <Menu.Item key="arteries:8">PDA</Menu.Item>
                <Menu.Item key="arteries:9">PL</Menu.Item>
              </SubMenu>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
      <Col xs={12} sm={9} md={8}>
        <Menu mode="horizontal">
          <Menu.Item key="mail" icon={<HomeOutlined />}>
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item
            key="app"
            icon={<TeamOutlined />}
            onClick={() => scrollTo("about_us")}
          >
            About Us
          </Menu.Item>
          <Menu.Item
            key="howtouse"
            icon={<QuestionCircleOutlined />}
            title="How to use this app"
          >
            <a href="/how_to_use">How To Use</a>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default NavBar;

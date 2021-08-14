import { Col, Menu, Row } from "antd";
import React, { useState } from "react";
import { HomeOutlined, UserOutlined, BarsOutlined } from "@ant-design/icons";
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
              <Menu.Item key="setting:1">
                <a href="/app/angiogram">Angiogram</a>
              </Menu.Item>
              <Menu.Item key="setting:2">
                <a href="/app/vassel">Coronary arteries</a>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
        </Menu>
      </Col>
      <Col xs={12} sm={9} md={6}>
        <Menu mode="horizontal">
          <Menu.Item key="mail" icon={<HomeOutlined />}>
            <a href="/">Home</a>
          </Menu.Item>
          <Menu.Item
            key="app"
            icon={<UserOutlined />}
            onClick={() => scrollTo("about_us")}
          >
            About Us
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default NavBar;

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
              <SubMenu key="angiogram" title="Angiogram">
                <Menu.ItemGroup title="Model">
                  <Menu.Item
                    key="title1"
                    onClick={() => (window.location.href = "/app/angiogram")}
                  >
                    Angiogram
                  </Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Information">
                  {angiogramMenu.map((value, index) => (
                    <Menu.Item
                      key={`angiogram:${index}`}
                      onClick={() =>
                        (window.location.href = `/app/angiogram/info/${value
                          .split(" ")
                          .map((x) => x.toLowerCase())
                          .join("-")}`)
                      }
                    >
                      {value}
                    </Menu.Item>
                  ))}
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu key="arteries" title="Coronary arteries">
                <Menu.ItemGroup title="Model">
                  <Menu.Item
                    key="title2"
                    onClick={() =>
                      (window.location.href = "/app/coronary_arteries")
                    }
                  >
                    Coronary arteries
                  </Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Information">
                  {arteriesMenu.map((value, index) => (
                    <Menu.Item
                      key={`arteries:${index}`}
                      onClick={() =>
                        (window.location.href = `/app/coronary_arteries/info/${value}`)
                      }
                    >
                      {value}
                    </Menu.Item>
                  ))}
                </Menu.ItemGroup>
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

const angiogramMenu = [
  "RAO Caudal",
  "RAO Cranial",
  "LAO Caudal",
  "LAO Cranial",
  "AP Caudal",
  "AP Cranial",
];

const arteriesMenu = [
  "LM",
  "LAD",
  "LCx",
  "Septal branch",
  "Diagonal branch",
  "RCA",
  "RMA",
  "PDA",
  "PL",
];

export default NavBar;

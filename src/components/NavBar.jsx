import { Button, Col, Drawer, Menu, Row } from "antd";
import React, { useState } from "react";
import {
  HomeOutlined,
  TeamOutlined,
  BarsOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
const { SubMenu } = Menu;

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <MobileRow justify="center">
        <Col xs={22}>
          <Burger
            icon={<MenuOutlined />}
            onClick={showDrawer}
            size="large"
            style={{ border: 0 }}
          />
          <StyledDrawer
            title="Menu"
            placement="left"
            onClose={onClose}
            visible={visible}
          >
            <Menu mode="vertical">
              <Menu.Item key="mail" icon={<HomeOutlined />}>
                <a href="/">Home</a>
              </Menu.Item>
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
                        onClick={() =>
                          (window.location.href = "/app/angiogram")
                        }
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
              <Menu.Item
                key="app"
                icon={<TeamOutlined />}
                onClick={() => {
                  scrollTo("about_us");
                  setVisible(false);
                }}
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
          </StyledDrawer>
        </Col>
      </MobileRow>
      <NotHiddenRow justify="center">
        <Col xs={2} sm={6} md={6}>
          <Menu mode="horizontal">
            <Menu.Item key="mail" icon={<HomeOutlined />}>
              <a href="/">Cardiac Catherization</a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={18} sm={12} md={12}>
          <Menu
            mode="horizontal"
            style={{ float: "right", paddingRight: "1em" }}
          >
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
      </NotHiddenRow>
    </>
  );
};

const Burger = styled(Button)`
  @media only screen and (max-width: 890px) {
    display: flex;
    margin-top: 0.5em;
    margin-left: 0.5em;
  }

  display: none;
`;

const StyledDrawer = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
`;

const MobileRow = styled(Row)`
  @media only screen and (max-width: 890px) {
    display: flex;
    margin-top: 0.5em;
  }

  display: none;
`;

const NotHiddenRow = styled(Row)`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

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

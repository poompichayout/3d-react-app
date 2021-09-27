/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Col, Drawer, Menu, Row } from "antd";
import React, { useState } from "react";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useNavigate } from "react-router";
import MenuItems from "./MenuItems";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [activeKeys, setActiveKeys] = useState([]);
  const navigate = useNavigate();

  const setSelectedKeys = (key) => {
    setActiveKeys([key]);
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
            <MenuItems
              mode="vertical"
              setVisible={setVisible}
              setSelectedKeys={setSelectedKeys}
              selectedKeys={activeKeys}
            >
              <Menu.Item
                key="home"
                icon={<HomeOutlined />}
                onClick={(e) => {navigate("/"); setVisible(false); setSelectedKeys(e.key);}}
              >
                Cardiac Catherization
              </Menu.Item>
            </MenuItems>
          </StyledDrawer>
        </Col>
      </MobileRow>
      <NotHiddenRow justify="center">
        <Col xs={2} sm={6} md={6}>
          <Menu mode="horizontal" selectedKeys={activeKeys}>
            <Menu.Item
              key="home"
              icon={<HomeOutlined />}
              onClick={(e) => {
                navigate("/");
                setSelectedKeys(e.key);
              }}
            >
              Cardiac Catherization
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={18} sm={12} md={12}>
          <MenuItems
            mode="horizontal"
            style={{ float: "right", paddingRight: "1em" }}
            setVisible={setVisible}
            setSelectedKeys={setSelectedKeys}
            selectedKeys={activeKeys}
            id="eiei"
          />
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
`;

const NotHiddenRow = styled(Row)`
  @media only screen and (max-width: 890px) {
    .ant-col {
      display: none;
    }
  }

  #eiei {
    display: block !important;
  }

`;

export default NavBar;

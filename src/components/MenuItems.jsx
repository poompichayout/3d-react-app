import {
  BarsOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router";
const { SubMenu } = Menu;

const MenuItems = ({ setSelectedKeys, setVisible, ...props }) => {
  const navigate = useNavigate();
  // const scrollTo = (id) => {
  //   const element = document.getElementById(id);
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <Menu {...props}>
      {props.children}
      <SubMenu key="SubMenu" icon={<BarsOutlined />} title="3D Model Viewer">
        <Menu.ItemGroup title="Module">
          <SubMenu key="angiogram" title="Angiogram">
            <Menu.ItemGroup title="Model">
              <Menu.Item
                key="title1"
                onClick={(e) => {
                  navigate("/app/angiogram");
                  setVisible(false);
                  setSelectedKeys(e.key);
                }}
              >
                Angiogram
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Information">
              {angiogramMenu.map((value, index) => (
                <Menu.Item
                  key={`angiogram:${index}`}
                  onClick={(e) => {
                    navigate(
                      `/app/angiogram/info/${value
                        .split(" ")
                        .map((x) => x.toLowerCase())
                        .join("-")}`
                    );
                    setVisible(false);
                    setSelectedKeys(e.key);
                  }}
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
                onClick={(e) => {
                  navigate("/app/coronary_arteries");
                  setVisible(false);
                  setSelectedKeys(e.key);
                }}
              >
                Coronary arteries
              </Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Information">
              {arteriesMenu.map((value, index) => (
                <Menu.Item
                  key={`arteries:${index}`}
                  onClick={(e) => {
                    navigate(`/app/coronary_arteries/info/${value}`);
                    setVisible(false);
                    setSelectedKeys(e.key);
                  }}
                >
                  {value}
                </Menu.Item>
              ))}
            </Menu.ItemGroup>
          </SubMenu>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item
        key="about_us"
        icon={<TeamOutlined />}
        onClick={(e) => {
          navigate("/about_us");
          setVisible(false);
          setSelectedKeys(e.key);
        }}
      >
        About Us
      </Menu.Item>
      <Menu.Item
        key="howtouse"
        icon={<QuestionCircleOutlined />}
        title="How to use this app"
        onClick={(e) => {
          navigate("/how_to_use");
          setVisible(false);
          setSelectedKeys(e.key);
        }}
      >
        How To Use
      </Menu.Item>
    </Menu>
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
  "OM",
  "Septal branch",
  "Diagonal branch",
  "RCA",
  "RMA",
  "PDA",
  "PL",
];

export default MenuItems;

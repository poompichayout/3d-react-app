import React, { useEffect, useState } from "react";
import { Button, Col, Row, Table, Typography } from "antd";
import { Tabs } from "antd";
import HeartCanvas from "src/models/HeartCanvas";
import NewRightHeart from "src/models/NewRightHeart";
import LeftHeart from "src/models/NewLeftHeart";
import CoHeart from "src/models/NewCoHeart";
import HeartContentModal from "src/components/HeartContentModal";
import ARModal from "src/components/ARModal";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import { useLocation } from "react-router";
const { TabPane } = Tabs;

const Vassel = () => {
  const [hovered, onHover] = useState(null);
  const [type, setType] = useState("LM");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arModalVisible, setARModalVisible] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const showARModal = (e) => {
    setARModalVisible(true);
  };

  const closeARModal = (e) => {
    setARModalVisible(false);
  };

  const showModal = (e) => {
    setType(e.target.attributes.content.value);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Helmet>
        <title>Coronary Arteries - Cardiac Catheterization</title>
      </Helmet>
      <RowStyled justify="center">
        <Col xs={24} sm={15} md={15} style={{ minHeight: "60vh" }}>
          <Tabs defaultActiveKey="1" centered style={{ height: "100%" }}>
            <StyledTabPane tab="Right Dominant" key="1" style={{ height: "60vh" }}>
              <HeartCanvas hovered={hovered}>
                <NewRightHeart
                  position={[0, 0.5, 0]}
                  rotation={[0, -0.65, 0]}
                  handleClick={showModal}
                  onHover={onHover}
                />
              </HeartCanvas>
            </StyledTabPane>
            <StyledTabPane tab="Left Dominant" key="2" style={{ height: "60vh" }}>
              <HeartCanvas hovered={hovered}>
                <LeftHeart
                  position={[0, 0.5, 0]}
                  rotation={[0, -0.65, 0]}
                  handleClick={showModal}
                  onHover={onHover}
                />
              </HeartCanvas>
            </StyledTabPane>
            <StyledTabPane tab="Co Dominant" key="3" style={{ height: "60vh" }}>
              <HeartCanvas hovered={hovered}>
                <CoHeart
                  position={[0, 0.5, 0]}
                  rotation={[0, -0.65, 0]}
                  handleClick={showModal}
                  onHover={onHover}
                />
              </HeartCanvas>
            </StyledTabPane>
          </Tabs>
        </Col>
        <Col xs={24} md={15}>
          <Button onClick={showARModal}>Start In AR</Button>
        </Col>
      </RowStyled>

      <RowStyled justify="center">
        <Col xs={24} md={15}>
          <Typography.Title level={3} style={{ textAlign: "left" }}>
            Left coronary artery
          </Typography.Title>
          <Table
            columns={columns}
            dataSource={leftDataSource}
            pagination={false}
            bordered
          />
        </Col>
        <Col xs={24} md={15} style={{ marginTop: "2em" }}>
          <Typography.Title level={3} style={{ textAlign: "left" }}>
            Right coronary artery
          </Typography.Title>
          <Table
            columns={columns}
            dataSource={rightDataSource}
            pagination={false}
            bordered
          />
        </Col>
      </RowStyled>
      <HeartContentModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1280}
        type={type}
      />
      <ARModal visible={arModalVisible} onCancel={closeARModal} />
    </div>
  );
};

const RowStyled = styled(Row)`
  background: #fff;
  background-color: #fafafa;
  text-align: center;
  min-height: 80vh;
  padding-top: 4em;
  padding-bottom: 4em;
  padding-left: 1em;
  padding-right: 1em;
`;

const StyledTabPane = styled(TabPane)`
  @media only screen and (min-width: 890px) {
    min-height: 80vh;
  }
  min-height: 60vh;
`;

const leftDataSource = [
  {
    key: "1",
    name: "Left Main",
    description: "AP caudal / RAO caudal / LAO cranial / LAO caudal",
  },
  {
    key: "2",
    name: "Proximal LAD",
    description: "LAO cranial / RAO caudal",
  },
  {
    key: "3",
    name: "Middle LAD",
    description: "LAO cranial / RAO cranial",
  },
  {
    key: "4",
    name: "Distal LAD",
    description: "RAO cranial",
  },
  {
    key: "5",
    name: "Diagonal",
    description: "RAO cranial / LAO cranial",
  },
  {
    key: "6",
    name: "Septal",
    description: "LAO cranial",
  },
  {
    key: "7",
    name: "Left Circumflex",
    description: "RAO caudal / LAO caudal / AP caudal",
  },
  {
    key: "8",
    name: "Obtuse Marginal",
    description: "RAO caudal / LAO cranial",
  },
];

const rightDataSource = [
  {
    key: "1",
    name: "Proximal RCA",
    description: "LAO cranial / AP caudal",
  },
  {
    key: "2",
    name: "Middle RCA",
    description: "LAO cranial",
  },
  {
    key: "3",
    name: "Distal RCA",
    description: "LAO cranial / AP cranial",
  },
  {
    key: "4",
    name: "Right marginal",
    description: "LAO cranial",
  },
  {
    key: "5",
    name: "PDA",
    description: "AP cranial",
  },
  {
    key: "6",
    name: "PL",
    description: "AP cranial",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Angiographic View",
    dataIndex: "description",
    key: "description",
  },
];

export default Vassel;

import React, { useState } from "react";
import { Button, Col, Row, Space, Table, Typography } from "antd";
import { Tabs } from "antd";
import HeartCanvas from "src/models/HeartCanvas";
import RightHeart from "src/models/Heart";
import LeftHeart from "src/models/LeftHeart";
import CoHeart from "src/models/CoHeart";
import HeartContentModal from "src/components/HeartContentModal";
import { Helmet } from "react-helmet";

import styled from "styled-components";
const { TabPane } = Tabs;

const Vassel = () => {
  const [type, setType] = useState("LM");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (e) => {
    setType(e.target.innerText);
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
        <Col xs={24} md={15} style={{ minHeight: "60vh" }}>
          <Tabs defaultActiveKey="1" centered style={{ height: "100%" }}>
            <TabPane tab="Right Dominant" key="1" style={{ height: "80vh" }}>
              <HeartCanvas>
                <RightHeart position={[0, 0.5, 0]} rotation={[0,-0.65,0]} />
              </HeartCanvas>
            </TabPane>
            <TabPane tab="Left Dominant" key="2" style={{ height: "80vh" }}>
              <HeartCanvas>
                <LeftHeart position={[0, 0.5, 0]} rotation={[0,-0.65,0]} />
              </HeartCanvas>
            </TabPane>
            <TabPane tab="Co Dominant" key="3" style={{ height: "80vh" }}>
              <HeartCanvas>
                <CoHeart position={[0, 0.5, 0]} rotation={[0,-0.65,0]} />
              </HeartCanvas>
            </TabPane>
          </Tabs>
        </Col>
        <Col xs={24} md={15}>
          <Button onClick={() => (window.location.href = "/arteries_AR.html")}>
            Start In AR
          </Button>
        </Col>
      </RowStyled>
      <Row justify="center" style={{ backgroundColor: "#fafafa" }}>
        <Col xs={20} align="middle">
          <Space size={[8, 16]} wrap>
            <Button type="primary" onClick={showModal}>
              LM
            </Button>
            <Button type="primary" onClick={showModal}>
              LAD
            </Button>
            <Button type="primary" onClick={showModal}>
              LCx
            </Button>
            <Button type="primary" onClick={showModal}>
              Septal branch
            </Button>
            <Button type="primary" onClick={showModal}>
              Diagonal branch
            </Button>
            <Button type="primary" onClick={showModal}>
              RCA
            </Button>
            <Button type="primary" onClick={showModal}>
              RMA
            </Button>
            <Button type="primary" onClick={showModal}>
              PDA
            </Button>
            <Button type="primary" onClick={showModal}>
              PL
            </Button>
          </Space>
        </Col>
      </Row>

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
        width={"100%"}
        type={type}
      />
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

const leftDataSource = [
  {
    key: "1",
    name: "Left Main",
    description: "AP / LAO cranial / LAO caudal",
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
    description: "AP / RAO cranial",
  },
  {
    key: "5",
    name: "Diagonal",
    description: "RAO cranial / LAO cranial / LAO caudal",
  },
  {
    key: "6",
    name: "Proximal LCx",
    description: "RAO caudal / LAO caudal",
  },
  {
    key: "7",
    name: "Obtuse Marginal",
    description: "RAO caudal / LAO caudal / RAO / RAO cranial",
  },
];

const rightDataSource = [
  {
    key: "1",
    name: "Proximal RCA",
    description: "LAO / LAO caudal",
  },
  {
    key: "2",
    name: "Middle RCA",
    description: "LAO / RAO 30",
  },
  {
    key: "3",
    name: "Distal RCA",
    description: "LAO cranial / AP cranial",
  },
  {
    key: "4",
    name: "PDA",
    description: "LAO / AP cranial",
  },
  {
    key: "5",
    name: "PL",
    description: "LAO cranial / RAO cranial",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Best Angiographic View",
    dataIndex: "description",
    key: "description",
  },
];

export default Vassel;

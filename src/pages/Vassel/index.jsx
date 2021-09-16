import React, { useState } from "react";
import { Button, Col, Row, Table, Typography } from "antd";
import { Tabs } from "antd";
import HeartCanvas from "src/models/HeartCanvas";
import RightHeart from "src/models/Heart";
import LeftHeart from "src/models/LeftHeart";
import CoHeart from "src/models/CoHeart";
import HeartContentModal from "src/components/HeartContentModal";
import ARModal from "src/components/ARModal";
import { Helmet } from "react-helmet";

import styled from "styled-components";
const { TabPane } = Tabs;

const Vassel = () => {
  const [type, setType] = useState("LM");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [arModalVisible, setARModalVisible] = useState(false);

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
            <TabPane tab="Right Dominant" key="1" style={{ height: "60vh" }}>
              <HeartCanvas>
                <RightHeart
                  position={[0, 0.5, 0]}
                  rotation={[0, -0.65, 0]}
                  handleClick={showModal}
                />
              </HeartCanvas>
            </TabPane>
            <TabPane tab="Left Dominant" key="2" style={{ height: "60vh" }}>
              <HeartCanvas>
                <LeftHeart
                  position={[0, 0.5, 0]}
                  rotation={[0, -0.65, 0]}
                  handleClick={showModal}
                />
              </HeartCanvas>
            </TabPane>
            <TabPane tab="Co Dominant" key="3" style={{ height: "60vh" }}>
              <HeartCanvas>
                <CoHeart
                  position={[0, 0.5, 0]}
                  rotation={[0, -0.65, 0]}
                  handleClick={showModal}
                />
              </HeartCanvas>
            </TabPane>
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

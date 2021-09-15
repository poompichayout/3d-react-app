import React, { useState } from "react";
import { Col, Radio, Row, Space, Typography, Slider, Button } from "antd";
import CathLabCanvas from "src/models/CathLabCanvas";
import Model from "src/models/Bedwhuman";
import ContentModal from "src/components/ContentModal";
import { Helmet } from "react-helmet";

import styled from "styled-components";
const { Title } = Typography;

const Angiogram = () => {
  const [turnOption, setTurnOption] = useState("AP");
  const [x, setX] = useState("CRANIAL");
  const [zDegree, setZDegree] = useState(30);
  const [xDegree, setXDegree] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChange = (e) => {
    setTurnOption(e.target.value);
  };

  const onCaudalChange = (e) => {
    setX(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Angiogram - Cardiac Catheterization</title>
      </Helmet>
      <RowStyled justify="center">
        <Col xs={24} lg={15} style={{ minHeight: "60vh" }}>
          <CathLabCanvas>
            <Model
              position={[-2, -4.25, -1.5]}
              option={turnOption}
              zdegree={zDegree}
              xOption={x}
              xdegree={xDegree}
            />
          </CathLabCanvas>
        </Col>
        <Col xs={20} md={15} lg={8}>
          <Row
            justify="center"
            align="middle"
            style={{ padding: "4em 0 4em 0" }}
          >
            <Col xs={24}>
              <StyledTitle>Select Angiographic Views</StyledTitle>
              <Radio.Group
                onChange={onChange}
                defaultValue="AP"
                buttonStyle="solid"
                style={{ textAlign: "left" }}
              >
                <Space direction="vertical">
                  <Radio.Button value="AP">AP (Anteroposterior)</Radio.Button>
                  <Radio.Button value="LAO">
                    LAO (Left Anterior Oblique)
                  </Radio.Button>
                  <Radio.Button value="RAO">
                    RAO (Right Anterior Oblique)
                  </Radio.Button>
                </Space>
              </Radio.Group>
            </Col>
            <Col xs={24} style={{ marginTop: "2em" }}>
              <StyledTitle>Select an Angulation</StyledTitle>
              <Radio.Group
                onChange={onCaudalChange}
                defaultValue="CRANIAL"
                buttonStyle="solid"
                style={{ textAlign: "left" }}
              >
                <Space direction="horizontal">
                  <Radio.Button value="CRANIAL">Cranial</Radio.Button>
                  <Radio.Button value="CAUDAL">Caudal</Radio.Button>
                </Space>
              </Radio.Group>
            </Col>
            <Col xs={23} style={{ marginTop: "2em" }}>
              <Typography.Title level={3}>Select degree angle</Typography.Title>
              <Typography.Title level={3}>
                {turnOption === "AP"
                  ? turnOption
                  : turnOption + " " + zDegree + "°"}
              </Typography.Title>
              <Slider
                disabled={turnOption === "AP"}
                min={1}
                max={90}
                defaultValue={zDegree}
                value={zDegree}
                onChange={(value) => setZDegree(value)}
              />
              <Typography.Title level={3}>
                {x + " " + xDegree + "°"}
              </Typography.Title>
              <Slider
                min={1}
                max={x === "CRANIAL" ? 25 : 60}
                defaultValue={xDegree}
                value={xDegree}
                onChange={(value) => setXDegree(value)}
              />
              <SubmitButton
                shape="round"
                type="primary"
                size="large"
                onClick={showModal}
              >
                Submit
              </SubmitButton>
            </Col>
          </Row>
        </Col>
        <Col lg={3} />
      </RowStyled>
      <ContentModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"100%"}
        type={turnOption.toLowerCase() + "-" + x.toLowerCase()}
      />
    </div>
  );
};

const RowStyled = styled(Row)`
  background: #fff;
  background-color: #fafafa;
  text-align: center;
`;

const SubmitButton = styled(Button)`
  margin-top: 2em;
  float: right;
`;

const StyledTitle = styled(Title)`
  @media only screen and (max-width: 576px) {
    &.ant-typography {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 890px) {
    &.ant-typography {
      font-size: 22px;
    }
  }
  &.ant-typography {
    font-size: 25px;
  }
`;

export default Angiogram;

import React, { useState } from "react";
import { Col, Radio, Row, Space, Typography, Slider, Button } from "antd";
import CathLabCanvas from "src/models/CathLabCanvas";
import Model from "src/models/Bedwhuman";
import ContentModal from "src/components/ContentModal";
import { Helmet } from "react-helmet";

import styled from "styled-components";

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
  }

  const onCaudalChange = (e) => {
    setX(e.target.value);
  }

  return (
    <div>
      <Helmet>
        <title>App - Angiogram</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <RowStyled justify="center">
        <Col xs={24} md={15} style={{ minHeight: "60vh" }}>
          <CathLabCanvas>
            <Model
              position={[0, -4.25, -1.5]}
              option={turnOption}
              zdegree={zDegree}
              xOption={x}
              xdegree={xDegree}
            />
          </CathLabCanvas>
        </Col>
        <Col xs={20} md={6}>
          <Row justify="center" align="middle">
            <Col xs={20}>
              <Typography.Title level={3}>
                Select angiographic views
              </Typography.Title>
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
            <Col xs={20} style={{ marginTop: "2em" }}>
              <Typography.Title level={3}>Select an option</Typography.Title>
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
            <Col xs={20} style={{ marginTop: "2em" }}>
              <Typography.Title level={3}>Select degree angle</Typography.Title>
              <Typography.Title level={3}>{turnOption}</Typography.Title>
              <Slider
                disabled={turnOption === "AP"}
                min={1}
                max={90}
                defaultValue={zDegree}
                value={zDegree}
                onChange={(value) => setZDegree(value)}
              />
              <Typography.Title level={3}>{x}</Typography.Title>
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
        <Col md={3} />
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
  min-height: 80vh;
  padding: 4em;
`;

const SubmitButton = styled(Button)`
  margin-top: 2em;
  float: right;
`;

export default Angiogram;

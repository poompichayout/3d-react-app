import React, { useEffect, useState } from "react";
import { Col, Radio, Row, Space, Typography, Slider, Button } from "antd";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import HeartAR from "src/models/HeartAR";
import CathLabCanvas from "src/models/CathLabCanvas";
import Model from "src/models/Bedwhuman";
import ContentModal from "src/components/ContentModal";
import { SET_ANGIOGRAM_STATE, SET_DEGREE_STATE } from "src/redux/types";
import { useLocation } from "react-router";
const { Title } = Typography;

const Angiogram = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // Redux
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.data.angiogram_state);

  // normal state
  const [turnOption, setTurnOption] = useState(globalState.angiographic);
  const [x, setX] = useState(globalState.angulation);
  const [zDegree, setZDegree] = useState(globalState.degree.z);
  const [xDegree, setXDegree] = useState(globalState.degree.x);
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
    dispatch({
      type: SET_ANGIOGRAM_STATE,
      payload: e.target.value,
      name: "angiographic",
    });
    setTurnOption(e.target.value);
  };

  const onCaudalChange = (e) => {
    dispatch({
      type: SET_ANGIOGRAM_STATE,
      payload: e.target.value,
      name: "angulation",
    });
    setX(e.target.value);
  };

  return (
    <div>
      <Helmet>
        <title>Angiogram - Cardiac Catheterization</title>
      </Helmet>
      <RowStyled justify="center" style={{ minHeight: "100vh" }}>
        <Col xs={24} xl={15} style={{ minHeight: "60vh" }}>
          <CathLabCanvas>
            <Model
              position={[-2, -4.25, -1.5]}
              option={turnOption}
              zdegree={zDegree}
              xOption={x}
              xdegree={xDegree}
            />
            <HeartAR
              position={[-2, 4, -5]}
              option={turnOption}
              zdegree={zDegree}
              xOption={x}
              xdegree={xDegree}
            />
          </CathLabCanvas>
        </Col>
        <Col xs={20} md={15} xl={8}>
          <Row
            justify="center"
            align="middle"
            style={{ padding: "4em 0 4em 0" }}
          >
            <Col xs={24}>
              <StyledTitle>Select Angiographic Views</StyledTitle>
              <Radio.Group
                onChange={onChange}
                defaultValue={turnOption}
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
                defaultValue={x}
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
                onChange={(value) => {
                  setZDegree(value);
                  dispatch({
                    type: SET_DEGREE_STATE,
                    payload: value,
                    name: "z",
                  });
                }}
              />
              <Typography.Title level={3}>
                {x + " " + xDegree + "°"}
              </Typography.Title>
              <Slider
                min={1}
                max={x === "CRANIAL" ? 25 : 60}
                defaultValue={xDegree}
                value={xDegree}
                onChange={(value) => {
                  setXDegree(value);
                  dispatch({
                    type: SET_DEGREE_STATE,
                    payload: value,
                    name: "x",
                  });
                }}
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
        <Col xl={3} />
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

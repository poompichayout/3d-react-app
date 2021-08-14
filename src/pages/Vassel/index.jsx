import React from "react";
import { Col, Row } from "antd";
import HeartCanvas from "src/models/HeartCanvas";
import Model from "src/models/Heart";
import { Helmet } from "react-helmet";

import styled from "styled-components";

const Vassel = () => {
  return (
    <div>
      <Helmet>
        <title>Coronary Arteries - Angiogram</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <RowStyled justify="center">
        <Col xs={24} md={15} style={{ minHeight: "60vh" }}>
          <HeartCanvas>
            <Model />
          </HeartCanvas>
        </Col>
      </RowStyled>
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

export default Vassel;

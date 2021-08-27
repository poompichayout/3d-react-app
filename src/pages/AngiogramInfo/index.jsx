import { Col, Row } from "antd";
import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import ContentComponent from "../../components/ContentComponent";

const AngiogramInfo = () => {
  const params = useParams();

  return (
    <RowStyled justify="center">
      <Col xs={22} lg={15} style={{ minHeight: "60vh" }}>
        <ContentComponent type={params.id} />
      </Col>
    </RowStyled>
  );
};

const RowStyled = styled(Row)`
  background: #fff;
  background-color: #fafafa;
  min-height: 80vh;
  padding-bottom: 2em;
`;

export default AngiogramInfo;

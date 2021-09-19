import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";
import ContentComponent from "../../components/ContentComponent";
import { useNavigate } from "react-router-dom";

const AngiogramInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <RowStyled justify="center">
      <Col xs={22} lg={15} style={{ minHeight: "60vh" }}>
        <ContentComponent type={params.id} />
        <Button
          type="primary"
          style={{ marginTop: "2em" }}
          onClick={() => navigate(-1)}
        >
          Back
        </Button>
      </Col>
    </RowStyled>
  );
};

const RowStyled = styled(Row)`
  background: #fff;
  background-color: #fafafa;
  min-height: 100vh;
  padding-bottom: 2em;
`;

export default AngiogramInfo;

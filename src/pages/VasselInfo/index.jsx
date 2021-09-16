import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import styled from "styled-components";
import HeartContentComponent from "src/components/HeartContentComponent";

const VasselInfo = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <RowStyled justify="center">
      <Col xs={24} md={20} style={{ minHeight: "50vh" }}>
        <HeartContentComponent type={params.id} />
        <Button
          type="primary"
          style={{ marginTop: "2em", marginLeft: "1em" }}
          onClick={() => navigate("/app/coronary_arteries")}
        >
          Back To Coronary Arteries Model
        </Button>
      </Col>
    </RowStyled>
  );
};

const RowStyled = styled(Row)`
  background: #fff;
  background-color: #fafafa;
  padding-top: 2em;
  padding-bottom: 2em;
  min-height: 100vh;
`;

export default VasselInfo;

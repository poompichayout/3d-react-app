import { Card } from "antd";
import React from "react";
import styled from "styled-components";

const LandingDisplayCard = ({ src, title }) => {
  return (
    <a href="/app/angiogram">
      <ClickableCard
        style={{ width: 300 }}
        cover={<img alt="example" src={src} />}
        hoverable
      >
        <Card.Meta
          title={title}
          description="Click a picture to get to our application"
        />
      </ClickableCard>
    </a>
  );
};

const ClickableCard = styled(Card)`
  transition: 0.3s;

  &:hover {
    border-color: black;
  }
`;

export default LandingDisplayCard;

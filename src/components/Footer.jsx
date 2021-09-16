import React from "react";
import { Row } from "antd";

import styled from "styled-components";

const Footer = () => {
  return <RowStyled></RowStyled>;
};

const RowStyled = styled(Row)`
  height: 100px;
  background-color: #141414;
  text-align: center;
`;

export default Footer;

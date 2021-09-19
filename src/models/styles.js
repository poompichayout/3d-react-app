import styled from "styled-components";

export const Div1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 50%;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
  z-index: 0;
  font-size: 10px;

  &: hover {
    color: #87ceeb;
    border-color: #87ceeb;

    &::after {
      position: absolute;
      top: 10;
      left: 10;
      z-index: 1;
      margin-left: 15px;
      margin-top: 15px;
      padding: 1em;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 0.5em;
      font-size: 12px;
      line-height: 1.2;
      content: "${(props) => props.content}";
    }
  }

  &:active {
    &::after {
      position: absolute;
      top: 10;
      left: 10;
      z-index: 1;
      margin-left: 15px;
      margin-top: 15px;
      padding: 1em;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 0.5em;
      font-size: 12px;
      line-height: 1.2;
      content: "${(props) => props.content}";
    }
  }
`;

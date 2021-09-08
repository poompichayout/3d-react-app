/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { Html, useGLTF } from "@react-three/drei";
import styled from "styled-components";

export default function CoHeart(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/prod/coheart.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.longBack.geometry}
        material={materials.red}
        position={[1.12, 0.49, 0]}
      >
        <Html position={[-0.8, 0.1, 0.35]} zIndexRange={[900, 0]}>
          <Div1 content="LM">1</Div1>
        </Html>
        <Html position={[-1.0, -1.0, -0.3]} zIndexRange={[900, 0]}>
          <Div1 content="LCx">2</Div1>
        </Html>
        <Html position={[-0.45, -0.4, 0.8]} zIndexRange={[900, 0]}>
          <Div1 content="LAD">3</Div1>
        </Html>
        <Html position={[-0.65, -0.9, 1.15]} zIndexRange={[900, 600]}>
          <Div1 content="Septal">4</Div1>
        </Html>
        <Html position={[-1.6, -1.2, 0.2]} zIndexRange={[900, 600]}>
          <Div1 content="RCA">5</Div1>
        </Html>
        <Html position={[-1.4, -1.4, 1.05]} zIndexRange={[900, 0]}>
          <Div1 content="RMA">6</Div1>
        </Html>
        <Html position={[-1.1, -1.5, 0.2]} zIndexRange={[500, 0]}>
          <Div1 content="PDA">7</Div1>
        </Html>
        <Html position={[0.1, -0.9, 0.6]} zIndexRange={[500, 0]}>
          <Div1 content="Diagonal">8</Div1>
        </Html>
        <Html position={[0.05, -1.1, 0.8]} zIndexRange={[500, 0]}>
          <Div1 content="Diagonal">8</Div1>
        </Html>
        <Html position={[-0.18, -1.2, 1.0]} zIndexRange={[500, 0]}>
          <Div1 content="Diagonal">8</Div1>
        </Html>
        <Html position={[-0.18, -1.65, 1.1]} zIndexRange={[500, 0]}>
          <Div1 content="Diagonal">8</Div1>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload("/prod/coheart.gltf");

const Div1 = styled.div`
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
    opacity: 0.8;
  }
`;

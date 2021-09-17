/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import styled from "styled-components";

export default function LeftHeart(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/prod/leftheart.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.aorta_new.geometry}
        material={materials.red}
        position={[0.67, 0.06, 0.71]}
      >
        <Html position={[-0.4, 0.5, -0.35]} zIndexRange={[900, 0]}>
          <Div1 content="LM" onClick={props.handleClick}>
            1
          </Div1>
        </Html>
        <Html position={[-0.4, -0.65, -1.1]} zIndexRange={[900, 0]}>
          <Div1 content="LCx" onClick={props.handleClick}>
            2
          </Div1>
        </Html>
        <Html zIndexRange={[900, 0]}>
          <Div1 content="LAD" onClick={props.handleClick}>
            3
          </Div1>
        </Html>
        <Html position={[-0.2, -0.5, 0.5]} zIndexRange={[900, 0]}>
          <Div1 content="Septal" onClick={props.handleClick}>
            4
          </Div1>
        </Html>
        <Html position={[-1.1, 0, 0]} zIndexRange={[900, 0]}>
          <Div1 content="RCA" onClick={props.handleClick}>
            5
          </Div1>
        </Html>
        <Html position={[-0.8, -1.1, 0.5]} zIndexRange={[900, 0]}>
          <Div1 content="RMA" onClick={props.handleClick}>
            6
          </Div1>
        </Html>
        <Html position={[-0.8, -1.1, -0.71]} zIndexRange={[900, 0]}>
          <Div1 content="PDA" onClick={props.handleClick}>
            7
          </Div1>
        </Html>
        <Html position={[0.5, -0.75, 0.1]} zIndexRange={[900, 0]}>
          <Div1 content="Diagonal" onClick={props.handleClick}>
            8
          </Div1>
        </Html>
        <Html position={[0.6, -0.5, -0.1]} zIndexRange={[900, 0]}>
          <Div1 content="Diagonal" onClick={props.handleClick}>
            8
          </Div1>
        </Html>
        <Html position={[0.4, -0.85, 0.3]} zIndexRange={[900, 0]}>
          <Div1 content="Diagonal" onClick={props.handleClick}>
            8
          </Div1>
        </Html>
        <Html position={[0.3, -1.35, 0.3]} zIndexRange={[900, 0]}>
          <Div1 content="Diagonal" onClick={props.handleClick}>
            8
          </Div1>
        </Html>
        <Html position={[0.46, -0.8, -0.8]} zIndexRange={[900, 0]}>
          <Div1 content="OM" onClick={props.handleClick}>
            9
          </Div1>
        </Html>
      </mesh>
    </group>
  );
}

useGLTF.preload("/prod/leftheart.gltf");

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

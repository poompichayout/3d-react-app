import React, { useState, useRef } from "react";
import { DefaultXRControllers, ARCanvas, useHitTest } from "@react-three/xr";
import { Text } from "@react-three/drei";

function HitTestExample() {
  const ref = useRef();
  const [position, setPosition] = useState([]);

  useHitTest((hit) => {
    hit.decompose(
      ref.current.position,
      ref.current.rotation,
      ref.current.scale
    );
    setPosition(ref.current.position);
    console.log(ref.current.position);
  });

  return (
    <Text color="black" anchorX="center" anchorY="middle">
      {position}
    </Text>
  );
}

const HeartARCanvas = ({ children }) => {
  return (
    <>
      <ARCanvas sessionInit={{ requiredFeatures: ["hit-test"] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <HitTestExample />
        <DefaultXRControllers />
      </ARCanvas>
    </>
  );
};

export default HeartARCanvas;

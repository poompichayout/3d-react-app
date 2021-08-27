import React, { Suspense, useRef } from "react";
import { ARCanvas, DefaultXRControllers, useHitTest } from "@react-three/xr";
import { Loader } from "@react-three/drei";

function HitTestExample({ children }) {
  const ref = useRef();
  useHitTest((hit) => {
    hit.decompose(
      ref.current.position,
      ref.current.rotation,
      ref.current.scale
    );
  });

  return <mesh ref={ref}>{children}</mesh>;
}

const HeartARCanvas = ({ children }) => {
  return (
    <>
      <ARCanvas sessionInit={{ requiredFeatures: ["hit-test"] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[-10, -10, 5]} intensity={2} />
        <pointLight position={[0, 0.5, -1]} distance={1} intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />

        <Suspense fallback={null}>
          <HitTestExample>{children}</HitTestExample>
        </Suspense>
        <DefaultXRControllers />
      </ARCanvas>
      <Loader />
    </>
  );
};

export default HeartARCanvas;

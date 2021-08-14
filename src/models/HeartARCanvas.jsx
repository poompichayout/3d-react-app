import React, { Suspense } from "react";
import { ARCanvas } from '@react-three/xr'
import { Loader } from "@react-three/drei";


const HeartARCanvas = ({ children }) => {
  return (
    <>
      <ARCanvas shadows camera={{ position: [0, 1, 1], fov: 15 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[-10, -10, 5]} intensity={2} />
        <pointLight position={[0, 0.5, -1]} distance={1} intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />

        <Suspense fallback={null}>
          {children}
        </Suspense>
      </ARCanvas>
      <Loader />
    </>
  );
};

export default HeartARCanvas;

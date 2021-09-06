import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";

const ZoomWithOrbital = () => {
  const { gl, camera } = useThree();
  return (
    <OrbitControls
      enablePan={false}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
      enableZoom={false}
    />
  );
};

const HeartCanvas = ({ children }) => {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 1, 3.25], fov: 70 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0.5, -1]} distance={1} intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={1} />

        <Suspense fallback={null}>
          {children}
          <ZoomWithOrbital />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default HeartCanvas;

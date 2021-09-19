import React, { Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Loader, OrbitControls } from "@react-three/drei";
import { EffectComposer, Outline } from "@react-three/postprocessing";

const ZoomWithOrbital = () => {
  const { gl, camera } = useThree();
  return (
    <OrbitControls
      enablePan={false}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
      enableZoom={false}
      // minAzimuthAngle={-1}
      // maxAzimuthAngle={1}
    />
  );
};

const HeartCanvas = ({ children, hovered }) => {
  const selected = hovered ? [...hovered] : undefined;
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
        <EffectComposer multisampling={10} autoClear={false}>
          <Outline
            blur
            selection={selected}
            visibleEdgeColor={"black"}
            edgeStrength={100}
            width={1800}
          />
        </EffectComposer>
      </Canvas>
      <Loader />
    </>
  );
};

export default HeartCanvas;

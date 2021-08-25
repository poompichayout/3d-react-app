import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";

const HeartCanvas = ({ children }) => {
  const [active, setActive] = useState(false);
  const model = useRef();

  useEffect(
    () => void (document.body.style.cursor = active ? "pointer" : "auto"),
    [active]
  );

  return (
    <>
      <Canvas shadows camera={{ position: [-2, 5, 5], fov: 90 }}>
        <ambientLight intensity={0.1} />
        <pointLight position={[-10, -10, 5]} intensity={2} color="#fc8eac" />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          color="#fc8eac"
        />
        <directionalLight
          position={[-10, -10, -5]}
          intensity={1}
          color="#e75480"
        />

        <Suspense fallback={null}>
          <mesh
            ref={model}
            onPointerOver={() => setActive(true)}
            onPointerOut={() => setActive(false)}
          >
            {children}
          </mesh>
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default HeartCanvas;

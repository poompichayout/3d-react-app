import React, { Suspense } from "react";
import { useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { softShadows, Shadow, Loader, OrbitControls } from "@react-three/drei";

softShadows();

const CathLabCanvasHome = ({ children }) => {
  return (
    <>
      <Canvas shadows camera={{ fov: 30, position: [25, 2, 0] }}>
        {/* <color attach="background" args={["#1B1C1D"]} /> */}
        <ambientLight intensity={0.4} />
        <pointLight position={[-10, -10, 5]} intensity={2} color="#a2d5e8" />
        <pointLight position={[0, 0.5, -1]} distance={1} intensity={2} color="#e4be00" />

        <Suspense fallback={null}>
          <Button>{children}</Button>
        </Suspense>
        <OrbitControls enableZoom={false} />
      
      </Canvas>
      <Loader />
    </>
  );
};

function Button({ children }) {
  const light = useRef();
  const [active, setActive] = useState(false);
  const model = useRef();

  useEffect(
    () => void (document.body.style.cursor = active ? "pointer" : "auto"),
    [active]
  );

  return (
    <mesh
      receiveShadow
      castShadow
      onClick={() => window.location.href = "/app/angiogram"}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      ref={model}>
      {children}

      <Shadow position-y={-4} rotation-x={-Math.PI / 2} opacity={0.6} scale={[0.8, 0.8, 1]} />
      <directionalLight ref={light} castShadow intensity={1.5} shadow-camera-far={70} />
    </mesh>
  );
}

export default CathLabCanvasHome;

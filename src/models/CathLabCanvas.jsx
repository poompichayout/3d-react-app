import React, { Suspense } from "react";
import * as THREE from "three";
import { useState, useEffect, useRef } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { softShadows, Shadow, Loader, OrbitControls } from "@react-three/drei";

softShadows();

const CathLabCanvas = ({ children }) => {
  return (
    <>
      <Canvas shadows camera={{ fov: 45, position: [25, 2, 0] }}>
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
  const vec = new THREE.Vector3();
  const light = useRef();
  const [active, setActive] = useState(false);
  const [zoom, set] = useState(true);
  const model = useRef();

  useEffect(
    () => void (document.body.style.cursor = active ? "pointer" : "auto"),
    [active]
  );

  useFrame((state) => {
    const step = 0.1;
    state.camera.fov = THREE.MathUtils.lerp(state.camera.fov, zoom ? 30 : 55, step);
    state.camera.position.lerp(vec.set(zoom ? 25 : 10, zoom ? 2 : 5, zoom ? 0 : 10), step);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
    light.current.position.lerp(vec.set(zoom ? 1 : 0, zoom ? 3 : 8, zoom ? 3 : 5), step);
    state.camera.lookAt(0, 0, 0);
    state.camera.updateProjectionMatrix();
  });

  return (
    <mesh
      receiveShadow
      castShadow
      onClick={() => set(!zoom)}
      onPointerOver={() => setActive(true)}
      onPointerOut={() => setActive(false)}
      ref={model}>
      {children}

      <Shadow position-y={-4} rotation-x={-Math.PI / 2} opacity={0.6} scale={[0.8, 0.8, 1]} />
      <directionalLight ref={light} castShadow intensity={1.5} shadow-camera-far={70} />
    </mesh>
  );
}

export default CathLabCanvas;

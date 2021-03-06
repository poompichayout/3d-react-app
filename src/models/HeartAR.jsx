/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function HeartAR({
  option,
  xOption,
  zdegree,
  xdegree,
  yDefault,
  ...props
}) {
  const MathUtils = THREE.MathUtils;
  const group = useRef();
  const { nodes, materials } = useGLTF("/prod/heartAR.gltf");

  useFrame(() => {
    const step = 0.1;
    const model = group.current;
    if (option === "RAO")
      model.rotation.y = MathUtils.lerp(model.rotation.y, (Math.PI / 180) * zdegree + yDefault, step);
    else if (option === "LAO") {
      model.rotation.y = MathUtils.lerp(model.rotation.y, (-Math.PI / 180) * zdegree + yDefault, step);
    } else {
      model.rotation.y = MathUtils.lerp(model.rotation.y, yDefault, step);
    }

    const subModel = group.current;
    subModel.rotation.order = "ZYX";
    if (xOption === "CAUDAL"){
      subModel.rotation.z = MathUtils.lerp(subModel.rotation.z, (Math.PI / 180) * xdegree, step);
      // subModel.rotation.x = MathUtils.lerp(subModel.rotation.x, (-Math.PI / 180) * xdegree, step);
    }
    else if (xOption === "CRANIAL") {
      subModel.rotation.z = MathUtils.lerp(subModel.rotation.z, (-Math.PI / 180) * xdegree, step);
      //subModel.rotation.x = MathUtils.lerp(subModel.rotation.x, (Math.PI / 180) * xdegree, step);
    }
    else subModel.rotation.z = MathUtils.lerp(subModel.rotation.z, 0, step);
  });
  return (
    <group ref={group} {...props} dispose={null} rotation={[0, yDefault, 0]}>
      <mesh
        geometry={nodes.aorta_new.geometry}
        material={materials.red}
        position={[0.67, 0.06, 0.71]}
      />
      <mesh
        geometry={nodes.heart.geometry}
        material={materials["Material.002"]}
        position={[-0.04, 0.01, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.5, 0.5, 0.5]}
      />
    </group>
  );
}

useGLTF.preload("/prod/heartAR.gltf");

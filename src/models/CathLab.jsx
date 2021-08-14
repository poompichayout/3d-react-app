import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three";

export default function CathLab({ option, xOption, zdegree, xdegree, ...props}) {
  const MathUtils = THREE.MathUtils;
  const group = useRef()
  const ref = useRef()
  const subRef = useRef()
  const { nodes, materials } = useGLTF('/prod/CATHLAB_03.gltf')
  
  useFrame(() => {
    const step = 0.1;
    const model = ref.current;
    if(option === "LAO")
      model.rotation.z = MathUtils.lerp(model.rotation.z, Math.PI / 180 * zdegree, step);
    else if(option === "RAO") {
      model.rotation.z = MathUtils.lerp(model.rotation.z, -Math.PI / 180 * zdegree, step);
    } else {
      model.rotation.z = MathUtils.lerp(model.rotation.z, 0, step);
    }

    const subModel = subRef.current;
    if(xOption === "CRANIAL")
      subModel.rotation.x = MathUtils.lerp(subModel.rotation.x, Math.PI / 180 * xdegree, step);
    else if(xOption === "CAUDAL")
      subModel.rotation.x = MathUtils.lerp(subModel.rotation.x, -Math.PI / 180 * xdegree, step);
    else
      subModel.rotation.x = MathUtils.lerp(subModel.rotation.x, 0, step);
  })
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 1.48, -1.63]} scale={[0.94, 1.02, 0.63]}>
        <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials.blue} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials.grey} />
      </group>
      <object3D ref={ref} position={[0, 4.23, 5.17]}>
        <group  position={[0-0, 7.87-4.23, 1.2-5.17]} scale={[1.72, 1.39, 1.55]}>
          <object3D ref={subRef} position={[0, -2.66, 0]}>
            <mesh geometry={nodes.Cube009.geometry} material={nodes.Cube009.material} position={[0, 2.66, 0]} />
            <mesh geometry={nodes.Cube009_1.geometry} material={nodes.Cube009_1.material} position={[0, 2.66, 0]} />
            <mesh geometry={nodes.Cube009_2.geometry} material={nodes.Cube009_2.material} position={[0, 2.66, 0]} />
          </object3D>
          <mesh geometry={nodes.Cube009_3.geometry} material={materials['Material.002']} />
        </group>
      </object3D>
      <group position={[0, 4.27, 6.41]} rotation={[-Math.PI / 2, 1.57, 0]} scale={[0.79, 0.53, 0.79]}>
        <mesh geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={nodes.Cylinder003_1.material} />
        <mesh geometry={nodes.Cylinder003_2.geometry} material={nodes.Cylinder003_2.material} />
      </group>
      <mesh
        geometry={nodes.overhead_base001.geometry}
        material={nodes.overhead_base001.material}
        position={[0, 1.26, 6.26]}
        scale={[0.79, 0.86, 0.53]}
      />
    </group>
  )
}

useGLTF.preload('/prod/CATHLAB_03.gltf')

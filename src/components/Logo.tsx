import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GroupProps } from "@react-three/fiber";
import type { GLTF } from "three-stdlib";
import type { Mesh, MeshStandardMaterial } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Curve: Mesh;
  };
  materials: {
    ["SVGMat.001"]: MeshStandardMaterial;
  };
};

export const Model: React.FC<GroupProps> = (props) => {
  const { nodes } = useGLTF(`/logo.glb`) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} />
    </group>
  );
};

useGLTF.preload(`/logo.glb`);

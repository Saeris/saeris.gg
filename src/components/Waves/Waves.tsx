import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import type { ShaderMaterial } from "three";
import { DoubleSide } from "three";
import { WavesMaterial } from "./material";

const Mesh: React.FC = () => {
  const shader = useRef<ShaderMaterial>(null);
  useFrame(() => {
    if (shader.current) {
      shader.current.uniforms.time.value += 0.001 * 2.16;
    }
  });

  return (
    <mesh rotation={[-1.75, 0, 0]}>
      <planeGeometry args={[1, 1, 100, 100]} />
      <wavesMaterial key={WavesMaterial.key} ref={shader} side={DoubleSide} />
    </mesh>
  );
};

export const Waves: React.FC = () => (
  <Canvas
    orthographic
    gl={{ preserveDrawingBuffer: true }}
    camera={{ position: [0.3, 4.8, 1.43], zoom: 2205 }}
    style={{ position: `absolute` }}
  >
    <Suspense fallback={null}>
      <Mesh />
      <Preload all />
    </Suspense>
  </Canvas>
);

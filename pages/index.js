import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls, useProgress } from "@react-three/drei";
import Scene from "../components/Scene";

export default function Home() {
  const target = useRef();

  return (
    <main ref={target}>
      <Canvas
        shadows
        flat
        linear
        onCreated={(state) => state.events.connect(target.current)}
        style={{ height: "100vh" }}
      >
        <Scene />
      </Canvas>
    </main>
  );
}

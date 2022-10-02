import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { Html } from "@react-three/drei";
import Scene from "../components/Scene";
import BarLoader from "react-spinners/BarLoader";
import { motion } from "framer-motion";

const override = {
  display: "block",
  margin: "0 auto",
};

function Loader() {
  return (
    <Html>
      <BarLoader color="#4bffa5" cssOverride={override} size={150} />
    </Html>
  );
}

export default function Home() {
  return (
    <main style={{ display: "flex" }}>
      <Canvas shadows flat linear style={{ height: "100vh", width: "70%" }}>
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>
      <div style={{ backgroundColor: "white", margin: "0 auto" }}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Hello
        </motion.h1>
      </div>
    </main>
  );
}

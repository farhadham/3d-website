import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { Html } from "@react-three/drei";
import Scene from "./Scene";
import BarLoader from "react-spinners/BarLoader";
import Hero from "./Hero";

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

const Web = () => {
  const [level, setLevel] = useState(1);

  return (
    <main className="flex mx-auto">
      <div className="flex justify-center items-start w-4/12">
        <Hero setLevel={setLevel} />
      </div>
      <div className="h-screen w-8/12">
        <Canvas shadows flat linear>
          <Suspense fallback={<Loader />}>
            <Scene level={level} />
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
};

export default Web;

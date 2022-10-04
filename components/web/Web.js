import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { Html } from "@react-three/drei";
import Scene from "./Scene";
import BarLoader from "react-spinners/BarLoader";
import Hero from "./Hero";
import NextButton from "./common/NextButton";

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
    <main className="h-screen mx-auto flex flex-col lg:flex-row">
      <div className="mt-32 pb-32 lg:my-0 flex flex-col justify-center items-center lg:w-4/12 relative">
        <Hero level={level} />
        <NextButton setLevel={setLevel} level={level} />
      </div>
      <div className="h-full lg:w-8/12">
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

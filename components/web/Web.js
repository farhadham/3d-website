import { Canvas } from "@react-three/fiber";
import { useState, createContext, Suspense } from "react";
import { Html } from "@react-three/drei";
import Scene from "./Scene";
import BarLoader from "react-spinners/BarLoader";
import Hero from "./Hero";
import NextButton from "./common/NextButton";
import Portfolio from "./Portfolio";
import About from "./About";

export const Global = createContext();

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
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [resumeHover, setResumeHover] = useState(false);
  const [karlaHover, setKarlaHover] = useState(false);
  const [sorexHover, setSorexHover] = useState(false);
  const [securityHover, setSecurityHover] = useState(false);
  const [atomHover, setAtomHover] = useState(false);
  const [csHover, setCsHover] = useState(false);
  const [googleHover, setGoogleHover] = useState(false);
  const [metaHover, setMetaHover] = useState(false);

  return (
    <Global.Provider
      value={{
        linkedinHover,
        setLinkedinHover,
        resumeHover,
        setResumeHover,
        karlaHover,
        setKarlaHover,
        sorexHover,
        setSorexHover,
        securityHover,
        setSecurityHover,
        atomHover,
        setAtomHover,
        csHover,
        setCsHover,
        googleHover,
        setGoogleHover,
        metaHover,
        setMetaHover,
      }}
    >
      <main className="h-screen mx-auto flex flex-col lg:flex-row">
        <div className="h-3/6 lg:h-full  flex flex-col justify-center items-center lg:w-4/12 relative">
          <Hero level={level} />
          <Portfolio level={level} />
          <About level={level} />
          <NextButton setLevel={setLevel} level={level} />
        </div>
        <div className="h-3/6 lg:h-full lg:w-8/12">
          <Canvas shadows flat linear>
            <Suspense fallback={<Loader />}>
              <Scene level={level} />
            </Suspense>
          </Canvas>
        </div>
      </main>
    </Global.Provider>
  );
};

export default Web;

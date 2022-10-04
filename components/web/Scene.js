import React, { useEffect, useRef } from "react";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei";
import FirstFloor from "./FirstFloor";
import Road from "./Road";

{
  /* <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[0, 0]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      ></PresentationControls> */
}

const Scene = ({ level }) => {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/gprjBHugYEihqeMu/scene.splinecode"
  );

  return (
    <>
      <color attach="background" args={["#464646"]} />
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[0, 0]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      >
        <Road nodes={nodes} materials={materials} level={level} />
        <FirstFloor nodes={nodes} materials={materials} level={level} />
        <mesh
          name="ground"
          geometry={nodes.ground.geometry}
          material={materials["ground Material"]}
          castShadow
          receiveShadow
          position={[4, 1, -4]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        {/* <directionalLight
          name="Directional Light"
          castShadow
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[3119.54, 4064.17, 1012.96]}
        /> */}
        <pointLight
          name="Point Light"
          castShadow
          intensity={1.5}
          distance={2000}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={100}
          shadow-camera-far={100000}
          position={[760.12, 981.41, 302.19]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={0.75}
          color="#eaeaea"
          position={[0, 1, 0]}
        />
      </PresentationControls>

      <OrthographicCamera
        name="Camera"
        makeDefault={true}
        zoom={window.innerWidth > 1920 ? 1.51 : window.innerWidth / 1200}
        far={100000}
        near={-100000}
        up={[0, 1, 0]}
        position={[620.43, 454, 612.92]}
        rotation={[-0.56, 0.7, 0.38]}
      />
    </>
  );
};

export default Scene;

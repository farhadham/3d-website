import React from "react";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei";
import FirstFloor from "./FirstFloor";

{
  /* <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[0, 0]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
      ></PresentationControls> */
}

const Scene = ({ ...props }) => {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/A3MA-sg0mkfpo-xA/scene.splinecode"
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
        <FirstFloor nodes={nodes} materials={materials} />
      </PresentationControls>

      <OrthographicCamera
        name="Camera"
        makeDefault={true}
        zoom={1.51}
        far={100000}
        near={-100000}
        up={[0, 1, 0]}
        position={[656.43, 457.46, 612.92]}
        rotation={[-0.56, 0.7, 0.38]}
      />
    </>
  );
};

export default Scene;

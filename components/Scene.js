import React from "react";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import { PresentationControls } from "@react-three/drei";

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
        <group {...props} dispose={null}>
          <group name="bulding" position={[-12.94, 241, -23.72]}>
            <group name="room 1" position={[256.4, 0, 262.9]}>
              <group name="piano_chair" position={[-122.76, -165.68, 45.35]}>
                <mesh
                  name="Cube"
                  geometry={nodes.Cube.geometry}
                  material={materials.piano_chari_mat}
                  castShadow
                  receiveShadow
                  position={[0, 14.32, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Cylinder"
                  geometry={nodes.Cylinder.geometry}
                  material={materials.piano_chair_leg}
                  castShadow
                  receiveShadow
                  position={[-14.7, -3.32, -15.03]}
                />
              </group>
              <group name="piano" position={[-156.07, -123.13, 114.03]}>
                <mesh
                  name="black_keys"
                  geometry={nodes.black_keys.geometry}
                  material={materials.piano_body}
                  castShadow
                  receiveShadow
                  position={[1.35, 18.46, -12.82]}
                />
                <mesh
                  name="white_keys"
                  geometry={nodes.white_keys.geometry}
                  material={materials.piano_key_white}
                  castShadow
                  receiveShadow
                  position={[3.94, 16.97, -4.22]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1, 1.07, 1]}
                />
                <mesh
                  name="under_key"
                  geometry={nodes.under_key.geometry}
                  material={materials.piano_body}
                  castShadow
                  receiveShadow
                  position={[5.95, 14.45, -69.77]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="top_body"
                  geometry={nodes.top_body.geometry}
                  material={materials.piano_body}
                  castShadow
                  receiveShadow
                  position={[-14.66, 46.46, -68.24]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="back"
                  geometry={nodes.back.geometry}
                  material={materials.piano_body}
                  castShadow
                  receiveShadow
                  position={[-20.82, -0.26, -68.98]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group name="right leg" position={[0, 0, -139.15]}>
                  <mesh
                    name="Cube 4"
                    geometry={nodes["Cube 4"].geometry}
                    material={materials.piano_body}
                    castShadow
                    receiveShadow
                    position={[-12.24, 0, 0.73]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <mesh
                    name="Cube 3"
                    geometry={nodes["Cube 3"].geometry}
                    material={materials.piano_body}
                    castShadow
                    receiveShadow
                    position={[8.75, -53.87, 0.73]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <mesh
                    name="Cube 2"
                    geometry={nodes["Cube 2"].geometry}
                    material={materials.piano_body}
                    castShadow
                    receiveShadow
                    position={[12.16, 14.95, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <mesh
                    name="Cube1"
                    geometry={nodes.Cube1.geometry}
                    material={materials.piano_body}
                    castShadow
                    receiveShadow
                    position={[19.82, -26.22, 0.97]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </group>
                <group name="left lef">
                  <mesh
                    name="Cube 41"
                    geometry={nodes["Cube 41"].geometry}
                    material={materials.piano_body}
                    castShadow
                    receiveShadow
                    position={[-12.24, 0, 0.73]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <mesh
                    name="Cube 31"
                    geometry={nodes["Cube 31"].geometry}
                    material={materials.piano_body}
                    castShadow
                    receiveShadow
                    position={[8.75, -53.87, 0.73]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <mesh
                    name="Cube 21"
                    geometry={nodes["Cube 21"].geometry}
                    material={materials.piano_body}
                    castShadow
                    receiveShadow
                    position={[12.16, 14.95, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                  <mesh
                    name="Cube2"
                    geometry={nodes.Cube2.geometry}
                    material={materials.piano_body}
                    castShadow
                    receiveShadow
                    position={[19.82, -26.22, 0.97]}
                    rotation={[-Math.PI / 2, 0, 0]}
                  />
                </group>
              </group>
              <group name="sofa" position={[95.65, -124.63, -129.5]}>
                <mesh
                  name="Cube 42"
                  geometry={nodes["Cube 42"].geometry}
                  material={materials.sofa}
                  castShadow
                  receiveShadow
                  position={[0.5, 20.33, -36.5]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                  name="Cube 32"
                  geometry={nodes["Cube 32"].geometry}
                  material={materials.sofa}
                  castShadow
                  receiveShadow
                  position={[0, -20.27, 0]}
                />
                <mesh
                  name="Cube 22"
                  geometry={nodes["Cube 22"].geometry}
                  material={materials.sofa}
                  castShadow
                  receiveShadow
                  position={[0, -46.51, 0]}
                />
              </group>
              <mesh
                name="Github"
                geometry={nodes.Github.geometry}
                material={materials["Github Material"]}
                castShadow
                receiveShadow
                position={[-183.25, -12.14, 90.98]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.11}
              >
                <mesh
                  name="Shape"
                  geometry={nodes.Shape.geometry}
                  material={materials["Shape Material"]}
                  visible={false}
                  castShadow
                  receiveShadow
                  position={[-50.58, -208.59, -52.5]}
                />
                <mesh
                  name="Ellipse"
                  geometry={nodes.Ellipse.geometry}
                  material={materials["Ellipse Material"]}
                  visible={false}
                  castShadow
                  receiveShadow
                  position={[11.5, 50.56, -23.72]}
                />
              </mesh>
              <group
                name="linkedin"
                position={[-129.64, 56.14, 90.82]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.1}
              >
                <mesh
                  name="Merged Geometry"
                  geometry={nodes["Merged Geometry"].geometry}
                  material={materials["Merged Geometry Material"]}
                  receiveShadow
                  position={[-10.75, 3.5, -511]}
                />
                <mesh
                  name="Rectangle"
                  geometry={nodes.Rectangle.geometry}
                  material={materials["Rectangle Material"]}
                  castShadow
                  receiveShadow
                  position={[-10.69, 0, -532.64]}
                />
              </group>
              <mesh
                name="wall_left 2"
                geometry={nodes["wall_left 2"].geometry}
                material={materials.room1_wall}
                castShadow
                receiveShadow
                position={[0, 0, -200]}
              />
              <mesh
                name="wall_left"
                geometry={nodes.wall_left.geometry}
                material={materials.room1_wall}
                castShadow
                receiveShadow
                position={[-200, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
              />
              <mesh
                name="floor"
                geometry={nodes.floor.geometry}
                material={materials.room1_floor}
                castShadow
                receiveShadow
                position={[0, -200, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </group>
          </group>
          <mesh
            name="ground"
            geometry={nodes.ground.geometry}
            material={materials["ground Material"]}
            castShadow
            receiveShadow
            position={[-9, 0, 9]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </PresentationControls>
      <OrthographicCamera
        name="Camera"
        makeDefault={true}
        far={100000}
        near={-100000}
        up={[0, 1, 0]}
        position={[577.35, 577.35, 577.35]}
        rotation={[-Math.PI / 4, 0.62, Math.PI / 6]}
      />
      <directionalLight
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
        position={[546.77, 495.52, 845.87]}
      />

      <hemisphereLight
        name="Default Ambient Light"
        intensity={0.75}
        color="#eaeaea"
        position={[0, 1, 0]}
      />
    </>
  );
};

export default Scene;

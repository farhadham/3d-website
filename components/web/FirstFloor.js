import React from "react";
import { motion } from "framer-motion-3d";
import Router from "next/router";

const FirstFloor = ({ nodes, materials }) => {
  return (
    <group dispose={null}>
      <mesh
        name="Rectangle"
        geometry={nodes.Rectangle.geometry}
        material={materials.pot}
        castShadow
        receiveShadow
        position={[125, 216.77, 23]}
      />
      <group name="carpet" position={[287.82, 23.05, 234]}>
        <mesh
          name="Ellipse 2"
          geometry={nodes["Ellipse 2"].geometry}
          material={materials.room1_floor}
          castShadow
          receiveShadow
          position={[0, 0.44, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Ellipse"
          geometry={nodes.Ellipse.geometry}
          material={materials.idk}
          castShadow
          receiveShadow
          position={[0, -1.44, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="plant" position={[77.63, 72.47, 56.27]}>
        <mesh
          name="plant1"
          geometry={nodes.plant1.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[-5.54, -13.85, 10.56]}
          rotation={[-1.53, 0.07, 1.75]}
        />
        <mesh
          name="plant2"
          geometry={nodes.plant2.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[-2.01, -14.38, -3.72]}
          rotation={[-1.75, 0, -1.81]}
        />
        <mesh
          name="plant3"
          geometry={nodes.plant3.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[7.08, -12.64, 5.57]}
          rotation={[-Math.PI / 2, 0.1, -Math.PI]}
        />
        <mesh
          name="plant4"
          geometry={nodes.plant4.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[-7.68, -11.83, 5.57]}
          rotation={[-Math.PI / 2, -0.06, 0]}
        />
        <mesh
          name="pot"
          geometry={nodes.pot.geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[-2.55, -217.56, 3.63]}
        />
      </group>
      <group
        name="cv"
        position={[331, 87.55, 222.83]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <mesh
          name="Shape 4"
          geometry={nodes["Shape 4"].geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[-5.32, 5.65, 12.9]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Shape 3"
          geometry={nodes["Shape 3"].geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[-5.32, 5.65, 9.17]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Shape 2"
          geometry={nodes["Shape 2"].geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[-5.32, 5.65, 5.8]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Shape"
          geometry={nodes.Shape.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[-5.32, 5.65, 2.49]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Rectangle1"
          geometry={nodes.Rectangle1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[2.73, 4.61, 3.4]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Rectangle 3"
          geometry={nodes["Rectangle 3"].geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-2.78, -3.02, 4.17]}
          rotation={[-Math.PI / 2, 0, -0.39]}
        />
        <mesh
          name="Rectangle 2"
          geometry={nodes["Rectangle 2"].geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-7.2, -0.06, -5.13]}
          rotation={[-Math.PI / 2, 0, -0.68]}
        />
      </group>
      <group
        name="controller"
        position={[255.57, 86.47, 207.95]}
        rotation={[0.09, 0, 0]}
        scale={1.66}
      >
        <mesh
          name="Ellipse 21"
          geometry={nodes["Ellipse 21"].geometry}
          material={materials["Ellipse 21 Material"]}
          castShadow
          receiveShadow
          position={[-1.79, 2.01, -0.79]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.72}
        />
        <mesh
          name="Ellipse1"
          geometry={nodes.Ellipse1.geometry}
          material={materials["Ellipse1 Material"]}
          castShadow
          receiveShadow
          position={[1.81, 2.01, -0.79]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.72}
        />
        <mesh
          name="Cube 3"
          geometry={nodes["Cube 3"].geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[6.11, 0.27, 0.82]}
          rotation={[-Math.PI / 2, 0, 2.18]}
          scale={0.62}
        />
        <mesh
          name="Cube 2"
          geometry={nodes["Cube 2"].geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-6.11, 0.27, 0.59]}
          rotation={[-Math.PI / 2, 0, 0.96]}
          scale={0.62}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-0.07, -0.01, -1.45]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="tv" position={[283.06, 114.02, 377.1]}>
        <mesh
          name="Triangle 3"
          geometry={nodes["Triangle 3"].geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[-11.8, -37.9, 0]}
          rotation={[Math.PI / 2, 1.22, -Math.PI / 2]}
        />
        <mesh
          name="Triangle 2"
          geometry={nodes["Triangle 2"].geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[9.25, -37.9, 0]}
          rotation={[-Math.PI / 2, 1.22, Math.PI / 2]}
        />
        <mesh
          name="Rectangle 21"
          geometry={nodes["Rectangle 21"].geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[0, 6.06, -1.42]}
        />
      </group>
      <group name="tv_table" position={[283, 45.8, 377.5]}>
        <mesh
          name="Cylinder 4"
          geometry={nodes["Cylinder 4"].geometry}
          material={materials["Cylinder 4 Material"]}
          castShadow
          receiveShadow
          position={[65.86, -13.89, 9.39]}
          rotation={[0, 0, 0.26]}
        />
        <mesh
          name="Cylinder 2"
          geometry={nodes["Cylinder 2"].geometry}
          material={materials["Cylinder 2 Material"]}
          castShadow
          receiveShadow
          position={[-65.57, -13.82, 9.39]}
          rotation={[0, 0, -0.26]}
        />
        <mesh
          name="Cylinder 3"
          geometry={nodes["Cylinder 3"].geometry}
          material={materials["Cylinder 3 Material"]}
          castShadow
          receiveShadow
          position={[66.08, -13.83, -9.5]}
          rotation={[0, 0, 0.26]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials["Cylinder Material"]}
          castShadow
          receiveShadow
          position={[-65.32, -13.89, -9.5]}
          rotation={[0, 0, -0.26]}
        />
        <mesh
          name="Rectangle2"
          geometry={nodes.Rectangle2.geometry}
          material={materials.piano_chair_leg}
          castShadow
          receiveShadow
          position={[0, -4.44, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="tabel" position={[276.5, 52.91, 213.3]}>
        <mesh
          name="leg_1 2"
          geometry={nodes["leg_1 2"].geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-84.73, -5.23, 33.5]}
        />
        <mesh
          name="leg_1"
          geometry={nodes.leg_1.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[87.44, -5.23, 33.5]}
        />
        <mesh
          name="leg_3"
          geometry={nodes.leg_3.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[87.44, -5.23, -32.5]}
        />
        <mesh
          name="leg_4"
          geometry={nodes.leg_4.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-85, -5.23, -32.5]}
        />
        <mesh
          name="top"
          geometry={nodes.top.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0, 18.38, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="piano_chair" position={[89.93, 40.2, 284.52]}>
        <mesh
          name="Cube1"
          geometry={nodes.Cube1.geometry}
          material={materials["Cube1 Material"]}
          castShadow
          receiveShadow
          position={[0, 14.32, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cylinder1"
          geometry={nodes.Cylinder1.geometry}
          material={materials.piano_chair_leg}
          castShadow
          receiveShadow
          position={[-11.85, -3.32, -11.89]}
        />
      </group>
      <group name="piano" position={[55.25, 83.29, 353.21]}>
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
            name="Cube 32"
            geometry={nodes["Cube 32"].geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[8.75, -53.87, 0.73]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube 22"
            geometry={nodes["Cube 22"].geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[12.16, 14.95, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube3"
            geometry={nodes.Cube3.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[19.82, -26.22, 0.97]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
      <group name="sofa" position={[307.72, 82.73, 73.44]}>
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
          name="Cube 33"
          geometry={nodes["Cube 33"].geometry}
          material={materials.sofa}
          castShadow
          receiveShadow
          position={[0, -20.27, 0]}
        />
        <mesh
          name="Cube 23"
          geometry={nodes["Cube 23"].geometry}
          material={materials.sofa}
          castShadow
          receiveShadow
          position={[0, -46.51, 0]}
        />
      </group>
      <motion.mesh
        name="Github"
        geometry={nodes.Github.geometry}
        material={materials["Github Material"]}
        castShadow
        receiveShadow
        position={[299.08, 186.17, 24.96]}
        scale={0.11}
        whileHover={{ z: 40 }}
        onClick={() => {
          Router.push("https://github.com/farhadham");
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        <mesh
          name="Shape1"
          geometry={nodes.Shape1.geometry}
          material={materials["Shape1 Material"]}
          visible={false}
          castShadow
          receiveShadow
          position={[-50.58, -208.59, -52.5]}
        />
        <mesh
          name="Ellipse2"
          geometry={nodes.Ellipse2.geometry}
          material={materials["Ellipse2 Material"]}
          visible={false}
          castShadow
          receiveShadow
          position={[11.5, 50.56, -23.72]}
        />
      </motion.mesh>
      <motion.group
        name="linkedin"
        position={[301.41, 257.43, 76]}
        scale={0.1}
        whileHover={{ z: 90 }}
        onClick={() => {
          Router.push("https://linkedin.com/in/farhadfaraji");
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        <mesh
          name="Merged Geometry"
          geometry={nodes["Merged Geometry"].geometry}
          material={materials["Merged Geometry Material"]}
          receiveShadow
          position={[-10.75, 3.5, -511]}
        />
        <mesh
          name="Rectangle3"
          geometry={nodes.Rectangle3.geometry}
          material={materials["Rectangle3 Material"]}
          castShadow
          receiveShadow
          position={[-10.69, 0, -532.64]}
        />
      </motion.group>
      <mesh
        name="wall_right"
        geometry={nodes.wall_right.geometry}
        material={materials.room1_floor}
        castShadow
        receiveShadow
        position={[200, 180, 0]}
      />
      <group name="windows frame" position={[24.5, 232.95, 158.48]}>
        <mesh
          name="Rectangle 31"
          geometry={nodes["Rectangle 31"].geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, 2.62, -53.29]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 22"
          geometry={nodes["Rectangle 22"].geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, 2.33, 53.29]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 5"
          geometry={nodes["Rectangle 5"].geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, -23.6, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle 4"
          geometry={nodes["Rectangle 4"].geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, -69.05, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Rectangle4"
          geometry={nodes.Rectangle4.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, 69.05, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <mesh
        name="window"
        geometry={nodes.window.geometry}
        material={materials.room1_floor}
        castShadow
        receiveShadow
        position={[11, 180, 200]}
      >
        <mesh
          name="Cube4"
          geometry={nodes.Cube4.geometry}
          material={materials["Cube4 Material"]}
          visible={false}
          castShadow
          receiveShadow
          position={[0.08, 52.33, -41.52]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="wall_left"
          geometry={nodes.wall_left.geometry}
          material={materials.room1_floor}
          visible={false}
          castShadow
          receiveShadow
          position={[-11, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </mesh>
      <mesh
        name="floor"
        geometry={nodes.floor.geometry}
        material={materials.room1_floor}
        castShadow
        receiveShadow
        position={[200, 0, 200]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default FirstFloor;

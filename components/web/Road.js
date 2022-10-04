import React, { useState } from "react";
import { motion } from "framer-motion-3d";
import Router from "next/router";

const Road = ({ nodes, materials, level }) => {
  const [roadPart, setRoadPart] = useState(1);

  let animateTo;
  if (roadPart === 1) {
    animateTo = { x: -500, y: 178.93, z: -0.93 };
  } else if (roadPart === 2) {
    animateTo = { x: 500, y: 178.93, z: -0.93 };
  } else {
    animateTo = { x: 1200, y: 178.93, z: -0.93 };
  }

  return (
    <motion.group
      name="Road"
      position={[-800, 178.93, -0.93]}
      initial={{ x: 0, y: 1500, z: 0 }}
      animate={level === 2 ? animateTo : { x: -500, y: 1500, z: -0.93 }}
      transition={{
        type: "tween",
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <motion.group
        name="arrow 4"
        position={[-1017.64, -139.93, 96]}
        rotation={[-Math.PI, 0, -Math.PI]}
        onClick={() => {
          setRoadPart(2);
        }}
        animate={{ x: -970 }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
      >
        <mesh
          name="arrow_tri"
          geometry={nodes.arrow_tri.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[-50.16, -4, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="arrow_rect"
          geometry={nodes.arrow_rect.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[25.66, -4, 1.43]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="arrow 3"
        position={[-221.78, -139.93, 96]}
        rotation={[-Math.PI, 0, -Math.PI]}
        onClick={() => {
          setRoadPart(1);
        }}
        animate={{ x: -180 }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
      >
        <mesh
          name="arrow_tri1"
          geometry={nodes.arrow_tri1.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[-50.16, -4, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="arrow_rect1"
          geometry={nodes.arrow_rect1.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[25.66, -4, 1.43]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="arrow 2"
        position={[-401.58, -139.93, 96]}
        onClick={() => {
          setRoadPart(3);
        }}
        animate={{ x: -450 }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
      >
        <mesh
          name="arrow_tri2"
          geometry={nodes.arrow_tri2.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[-50.16, -4, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="arrow_rect2"
          geometry={nodes.arrow_rect2.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[25.66, -4, 1.43]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="arrow"
        position={[691.53, -139.93, 96]}
        onClick={() => {
          setRoadPart(2);
        }}
        animate={{ x: 650 }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
      >
        <mesh
          name="arrow_tri3"
          geometry={nodes.arrow_tri3.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[-50.16, -4, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
        <mesh
          name="arrow_rect3"
          geometry={nodes.arrow_rect3.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[25.66, -4, 1.43]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <group name="dead_end" position={[-1315.16, -61.82, 15.33]}>
        <group
          name="Text"
          position={[4.15, 62.22, 2.34]}
          rotation={[Math.PI, 1.55, Math.PI]}
        >
          <mesh
            name="D"
            geometry={nodes.D.geometry}
            material={materials["My Text Material"]}
            castShadow
            receiveShadow
            position={[-28.33, 0, 0]}
          />
          <mesh
            name="E"
            geometry={nodes.E.geometry}
            material={materials["My Text Material"]}
            castShadow
            receiveShadow
            position={[-13.69, 0, 0]}
          />
          <mesh
            name="A"
            geometry={nodes.A.geometry}
            material={materials["My Text Material"]}
            castShadow
            receiveShadow
            position={[-0.7, 0, 0]}
          />
          <mesh
            name="D1"
            geometry={nodes.D1.geometry}
            material={materials["My Text Material"]}
            castShadow
            receiveShadow
            position={[13.69, 0, 0]}
          />
          <mesh
            name="E1"
            geometry={nodes.E1.geometry}
            material={materials["My Text Material"]}
            castShadow
            receiveShadow
            position={[-21.74, -24, 0]}
          />
          <mesh
            name="N"
            geometry={nodes.N.geometry}
            material={materials["My Text Material"]}
            castShadow
            receiveShadow
            position={[-8.75, -24, 0]}
          />
          <mesh
            name="D2"
            geometry={nodes.D2.geometry}
            material={materials["My Text Material"]}
            castShadow
            receiveShadow
            position={[7.1, -24, 0]}
          />
        </group>
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials["Rectangle Material"]}
          castShadow
          receiveShadow
          position={[-0.4, 59.68, 0.04]}
          rotation={[-Math.PI, 1.55, 2.36]}
          scale={1.59}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials["Cylinder Material"]}
          castShadow
          receiveShadow
          position={[-3.02, -32.27, 0.3]}
        />
      </group>
      <motion.group
        name="sign 5"
        position={[-1233.4, -85, -268.69]}
        whileHover={{ y: -60 }}
        onClick={() => {
          window.open("https://karla-online.com/", "_blank");
        }}
      >
        <mesh
          name="Rectangle1"
          geometry={nodes.Rectangle1.geometry}
          material={materials["Rectangle1 Material"]}
          castShadow
          receiveShadow
          position={[-0.03, 55.22, 5.16]}
        />
        <mesh
          name="Cube 2"
          geometry={nodes["Cube 2"].geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[0, 54.97, 2.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cube"
          geometry={nodes.Cube.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0.38, -32.67, -2.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="sign 4"
        position={[-471.01, -85, -268.69]}
        whileHover={{ y: -60 }}
        onClick={() => {
          window.open("https://sorex-landingpage.vercel.app/", "_blank");
        }}
      >
        <mesh
          name="Rectangle2"
          geometry={nodes.Rectangle2.geometry}
          material={materials["Rectangle2 Material"]}
          castShadow
          receiveShadow
          position={[-0.03, 55.22, 5.16]}
        />
        <mesh
          name="Cube 21"
          geometry={nodes["Cube 21"].geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[0, 54.97, 2.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cube1"
          geometry={nodes.Cube1.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0.38, -32.67, -2.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="sign 3"
        position={[191.62, -85, -268.69]}
        whileHover={{ y: -60 }}
        onClick={() => {
          window.open("https://radical-security.vercel.app/", "_blank");
        }}
      >
        <mesh
          name="Rectangle3"
          geometry={nodes.Rectangle3.geometry}
          material={materials["Rectangle3 Material"]}
          castShadow
          receiveShadow
          position={[-0.03, 55.22, 5.16]}
        />
        <mesh
          name="Cube 22"
          geometry={nodes["Cube 22"].geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[0, 54.97, 2.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cube2"
          geometry={nodes.Cube2.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0.38, -32.67, -2.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="sign 7"
        position={[32.81, -85, -268.69]}
        whileHover={{ y: -60 }}
        onClick={() => {
          window.open("https://atom-libs.vercel.app/", "_blank");
        }}
      >
        <mesh
          name="Rectangle4"
          geometry={nodes.Rectangle4.geometry}
          material={materials["Rectangle4 Material"]}
          castShadow
          receiveShadow
          position={[-0.03, 55.22, 5.16]}
        />
        <mesh
          name="Cube 23"
          geometry={nodes["Cube 23"].geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[0, 54.97, 2.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cube3"
          geometry={nodes.Cube3.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0.38, -32.67, -2.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="sign 6"
        position={[-1081.85, -85, -268.69]}
        whileHover={{ y: -60 }}
        onClick={() => {
          window.open(
            "https://multiplayer-shooting-game-js.herokuapp.com/",
            "_blank"
          );
        }}
      >
        <mesh
          name="Rectangle5"
          geometry={nodes.Rectangle5.geometry}
          material={materials["Rectangle5 Material"]}
          castShadow
          receiveShadow
          position={[-0.03, 55.22, 5.16]}
        />
        <mesh
          name="Cube 24"
          geometry={nodes["Cube 24"].geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[0, 54.97, 2.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cube4"
          geometry={nodes.Cube4.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0.38, -32.67, -2.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="sign 2"
        position={[350.31, -85, -268.69]}
        whileHover={{ y: -60 }}
        onClick={() => {
          window.open("https://then0tbot.vercel.app/", "_blank");
        }}
      >
        <mesh
          name="Rectangle6"
          geometry={nodes.Rectangle6.geometry}
          material={materials["Rectangle6 Material"]}
          castShadow
          receiveShadow
          position={[-0.03, 55.22, 5.16]}
        />
        <mesh
          name="Cube 25"
          geometry={nodes["Cube 25"].geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[0, 54.97, 2.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cube5"
          geometry={nodes.Cube5.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0.38, -32.67, -2.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="sign"
        position={[-622.1, -85, -268.69]}
        whileHover={{ y: -60 }}
        onClick={() => {
          window.open("https://fifth-design.vercel.app/", "_blank");
        }}
      >
        <mesh
          name="Rectangle7"
          geometry={nodes.Rectangle7.geometry}
          material={materials["Rectangle7 Material"]}
          castShadow
          receiveShadow
          position={[-0.03, 55.22, 5.16]}
        />
        <mesh
          name="Cube 26"
          geometry={nodes["Cube 26"].geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[0, 54.97, 2.65]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Cube6"
          geometry={nodes.Cube6.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0.38, -32.67, -2.66]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <group
        name="node"
        position={[-954.2, -176.93, 312.43]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="N1"
          geometry={nodes.N1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-314.45, 13.5, 0]}
        />
        <mesh
          name="o"
          geometry={nodes.o.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-256.97, 13.5, 0]}
        />
        <mesh
          name="d"
          geometry={nodes.d.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-211.21, 13.5, 0]}
        />
        <mesh
          name="e"
          geometry={nodes.e.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-165.45, 13.5, 0]}
        />
        <mesh
          name="/"
          geometry={nodes["/"].geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-102.86, 13.5, 0]}
        />
        <mesh
          name="E2"
          geometry={nodes.E2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-49.45, 13.5, 0]}
        />
        <mesh
          name="x"
          geometry={nodes.x.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-2.35, 13.5, 0]}
        />
        <mesh
          name="p"
          geometry={nodes.p.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[38.19, 13.5, 0]}
        />
        <mesh
          name="r"
          geometry={nodes.r.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[83.95, 13.5, 0]}
        />
        <mesh
          name="e1"
          geometry={nodes.e1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[111.56, 13.5, 0]}
        />
        <mesh
          name="s"
          geometry={nodes.s.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[154.13, 13.5, 0]}
        />
        <mesh
          name="s1"
          geometry={nodes.s1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[196.24, 13.5, 0]}
        />
        <mesh
          name="M"
          geometry={nodes.M.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-314.45, -73.5, 0]}
        />
        <mesh
          name="o1"
          geometry={nodes.o1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-243.69, -73.5, 0]}
        />
        <mesh
          name="n"
          geometry={nodes.n.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-197.93, -73.5, 0]}
        />
        <mesh
          name="g"
          geometry={nodes.g.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-152.16, -73.5, 0]}
        />
        <mesh
          name="o2"
          geometry={nodes.o2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-106.4, -73.5, 0]}
        />
        <mesh
          name="D3"
          geometry={nodes.D3.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-60.64, -73.5, 0]}
        />
        <mesh
          name="B"
          geometry={nodes.B.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-7.57, -73.5, 0]}
        />
      </group>
      <group
        name="react"
        position={[-248.27, -176.93, 312.43]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="R"
          geometry={nodes.R.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-234, 13.5, 0]}
        />
        <mesh
          name="e2"
          geometry={nodes.e2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-180.64, 13.5, 0]}
        />
        <mesh
          name="a"
          geometry={nodes.a.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-138.07, 13.5, 0]}
        />
        <mesh
          name="c"
          geometry={nodes.c.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-93.76, 13.5, 0]}
        />
        <mesh
          name="t"
          geometry={nodes.t.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-51.01, 13.5, 0]}
        />
        <mesh
          name="/1"
          geometry={nodes["/1"].geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-3.16, 13.5, 0]}
        />
        <mesh
          name="N2"
          geometry={nodes.N2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[50.26, 13.5, 0]}
        />
        <mesh
          name="e3"
          geometry={nodes.e3.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[107.74, 13.5, 0]}
        />
        <mesh
          name="x1"
          geometry={nodes.x1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[150.31, 13.5, 0]}
        />
        <mesh
          name="t1"
          geometry={nodes.t1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[190.85, 13.5, 0]}
        />
        <mesh
          name="R1"
          geometry={nodes.R1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-234, -73.5, 0]}
        />
        <mesh
          name="e4"
          geometry={nodes.e4.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-180.64, -73.5, 0]}
        />
        <mesh
          name="a1"
          geometry={nodes.a1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-138.07, -73.5, 0]}
        />
        <mesh
          name="c1"
          geometry={nodes.c1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-93.76, -73.5, 0]}
        />
        <mesh
          name="t2"
          geometry={nodes.t2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-51.01, -73.5, 0]}
        />
        <mesh
          name="N3"
          geometry={nodes.N3.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-3.16, -73.5, 0]}
        />
        <mesh
          name="a2"
          geometry={nodes.a2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[54.32, -73.5, 0]}
        />
        <mesh
          name="t3"
          geometry={nodes.t3.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[98.63, -73.5, 0]}
        />
        <mesh
          name="i"
          geometry={nodes.i.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[126.47, -73.5, 0]}
        />
        <mesh
          name="i1"
          geometry={nodes.i1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[126.47, -73.5, 0]}
        />
        <mesh
          name="v"
          geometry={nodes.v.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[146.77, -73.5, 0]}
        />
        <mesh
          name="e5"
          geometry={nodes.e5.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[187.31, -73.5, 0]}
        />
      </group>
      <group
        name="html"
        position={[559.21, -176.93, 312.43]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="H"
          geometry={nodes.H.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-323.58, 13.5, 0]}
        />
        <mesh
          name="T"
          geometry={nodes.T.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-266.1, 13.5, 0]}
        />
        <mesh
          name="M1"
          geometry={nodes.M1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-218.89, 13.5, 0]}
        />
        <mesh
          name="L"
          geometry={nodes.L.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-148.13, 13.5, 0]}
        />
        <mesh
          name="/2"
          geometry={nodes["/2"].geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-84.62, 13.5, 0]}
        />
        <mesh
          name="C"
          geometry={nodes.C.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-31.2, 13.5, 0]}
        />
        <mesh
          name="S"
          geometry={nodes.S.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[19.84, 13.5, 0]}
        />
        <mesh
          name="S1"
          geometry={nodes.S1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[70.07, 13.5, 0]}
        />
        <mesh
          name="/3"
          geometry={nodes["/3"].geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[140.31, 13.5, 0]}
        />
        <mesh
          name="J"
          geometry={nodes.J.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[193.73, 13.5, 0]}
        />
        <mesh
          name="S2"
          geometry={nodes.S2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[238.15, 13.5, 0]}
        />
      </group>

      <group name="tree 6" position={[-1470.23, 9.2, -276.72]}>
        <group name="tree_top1" position={[0, 56.46, 0]}>
          <mesh
            name="Cone 31"
            geometry={nodes["Cone 31"].geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, 58.55, 0]}
          />
          <mesh
            name="Cone 21"
            geometry={nodes["Cone 21"].geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, 1.77, 0]}
          />
          <mesh
            name="Cone1"
            geometry={nodes.Cone1.geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, -58.55, 0]}
          />
        </group>
        <mesh
          name="tree_body1"
          geometry={nodes.tree_body1.geometry}
          material={materials.piano_chair_leg}
          castShadow
          receiveShadow
          position={[1.21, -70.51, 4]}
        />
      </group>
      <group name="tree 5" position={[-845.45, 9.2, -276.72]}>
        <group name="tree_top2" position={[0, 56.46, 0]}>
          <mesh
            name="Cone 32"
            geometry={nodes["Cone 32"].geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, 58.55, 0]}
          />
          <mesh
            name="Cone 22"
            geometry={nodes["Cone 22"].geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, 1.77, 0]}
          />
          <mesh
            name="Cone2"
            geometry={nodes.Cone2.geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, -58.55, 0]}
          />
        </group>
        <mesh
          name="tree_body2"
          geometry={nodes.tree_body2.geometry}
          material={materials.piano_chair_leg}
          castShadow
          receiveShadow
          position={[1.21, -70.51, 4]}
        />
      </group>
      <group name="tree 3" position={[-215.2, 9.2, -276.72]}>
        <group name="tree_top3" position={[0, 56.46, 0]}>
          <mesh
            name="Cone 33"
            geometry={nodes["Cone 33"].geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, 58.55, 0]}
          />
          <mesh
            name="Cone 23"
            geometry={nodes["Cone 23"].geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, 1.77, 0]}
          />
          <mesh
            name="Cone3"
            geometry={nodes.Cone3.geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, -58.55, 0]}
          />
        </group>
        <mesh
          name="tree_body3"
          geometry={nodes.tree_body3.geometry}
          material={materials.piano_chair_leg}
          castShadow
          receiveShadow
          position={[1.21, -70.51, 4]}
        />
      </group>
      <group name="tree 2" position={[616.95, 9.2, -287.47]}>
        <group name="tree_top4" position={[0, 56.46, 0]}>
          <mesh
            name="Cone 34"
            geometry={nodes["Cone 34"].geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, 58.55, 0]}
          />
          <mesh
            name="Cone 24"
            geometry={nodes["Cone 24"].geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, 1.77, 0]}
          />
          <mesh
            name="Cone4"
            geometry={nodes.Cone4.geometry}
            material={materials.plant}
            castShadow
            receiveShadow
            position={[0, -58.55, 0]}
          />
        </group>
        <mesh
          name="tree_body4"
          geometry={nodes.tree_body4.geometry}
          material={materials.piano_chair_leg}
          castShadow
          receiveShadow
          position={[1.21, -70.51, 4]}
        />
      </group>
      <mesh
        name="Road_white"
        geometry={nodes.Road_white.geometry}
        material={materials.room1_floor}
        castShadow
        receiveShadow
        position={[738.99, -142.42, 0.93]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Road1"
        geometry={nodes.Road1.geometry}
        material={materials.road}
        castShadow
        receiveShadow
        position={[-205.55, -170.65, 0.93]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  );
};

export default Road;

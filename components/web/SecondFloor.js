import React, { useEffect, useContext } from "react";
import { motion } from "framer-motion-3d";
import { useSpring, useTransform } from "framer-motion";
import Router from "next/router";
import { Global } from "./Web";

const SecondFloor = ({ nodes, materials, level }) => {
  const value = useContext(Global);

  const robotX = useSpring(-16.67, { stiffness: 70, damping: 7 });

  useEffect(() => {
    setInterval(() => {
      robotX.set(50);
    }, 5000);

    setTimeout(() => {
      setInterval(() => {
        robotX.set(-16.67);
      }, 5000);
    }, 2500);
  }, []);

  return (
    <motion.group
      name="Room2"
      initial={{ x: 0, y: 1500, z: 0 }}
      animate={
        [2, 3, 4].includes(level)
          ? { x: 100, y: 177.5, z: 100 }
          : { x: 0, y: 1500, z: 0 }
      }
      transition={{
        type: "tween",
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <motion.group
        name="meta"
        position={[58, 16.29, -176.56]}
        animate={{
          z: value.metaHover ? -150 : -176.56,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        <mesh
          name="meta_frame_4"
          geometry={nodes.meta_frame_4.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[17.97, -0.12, -0.75]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="meta_frame_3"
          geometry={nodes.meta_frame_3.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-18, -0.12, -0.75]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="meta_frame_2"
          geometry={nodes.meta_frame_2.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0, -15.11, -0.75]}
        />
        <mesh
          name="meta_frame_1"
          geometry={nodes.meta_frame_1.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0, 15.13, -0.75]}
        />
        <mesh
          name="meta_paper"
          geometry={nodes.meta_paper.geometry}
          material={materials["meta_paper Material"]}
          castShadow
          receiveShadow
          position={[0, 0.13, -0.44]}
        />
      </motion.group>
      <motion.group
        name="google"
        position={[58, 54.06, -176.56]}
        animate={{
          z: value.googleHover ? -150 : -176.56,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        <mesh
          name="google_frame_4"
          geometry={nodes.google_frame_4.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[17.97, -0.12, -0.75]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="google_frame_3"
          geometry={nodes.google_frame_3.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-18, -0.12, -0.75]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="google_frame_2"
          geometry={nodes.google_frame_2.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0, -15.11, -0.75]}
        />
        <mesh
          name="google_frame_1"
          geometry={nodes.google_frame_1.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0, 15.13, -0.75]}
        />
        <mesh
          name="google_paper"
          geometry={nodes.google_paper.geometry}
          material={materials["google_paper Material"]}
          castShadow
          receiveShadow
          position={[0, 0.13, -0.44]}
        />
      </motion.group>
      <motion.group
        name="cs50"
        position={[58, 92.09, -176.56]}
        animate={{
          z: value.csHover ? -150 : -176.56,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        <mesh
          name="cs50_frame_4"
          geometry={nodes.cs50_frame_4.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[17.97, -0.12, -0.75]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="cs50_frame_3"
          geometry={nodes.cs50_frame_3.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-18, -0.12, -0.75]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          name="cs50_frame_2"
          geometry={nodes.cs50_frame_2.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0, -15.11, -0.75]}
        />
        <mesh
          name="cs50_frame_1"
          geometry={nodes.cs50_frame_1.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0, 15.13, -0.75]}
        />
        <mesh
          name="cs50_paper"
          geometry={nodes.cs50_paper.geometry}
          material={materials["cs50_paper Material"]}
          castShadow
          receiveShadow
          position={[0, 0.13, -0.44]}
        />
      </motion.group>
      <group name="mouse_1_g" position={[-24.96, -71.5, -135.24]}>
        <mesh
          name="mouse_1"
          geometry={nodes.mouse_1.geometry}
          material={materials.safe_grey}
          castShadow
          receiveShadow
          position={[-0.31, 0.13, 0.74]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        />
        <mesh
          name="mousepad_1"
          geometry={nodes.mousepad_1.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[0, -1.63, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="keyboard_1" position={[9.01, -72.54, -133.7]}>
        <mesh
          name="keyboard_1_key"
          geometry={nodes.keyboard_1_key.geometry}
          material={materials.safe_grey}
          castShadow
          receiveShadow
          position={[-15.37, 0.46, -3.77]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="keyboard_1_body"
          geometry={nodes.keyboard_1_body.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[0, -0.71, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="monitor_1" position={[6.49, -57.17, -163.83]}>
        <mesh
          name="monitor_1_screen"
          geometry={nodes.monitor_1_screen.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[0, -9.09, 0.23]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="monitor_1_leg_3"
          geometry={nodes.monitor_1_leg_3.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[0.03, -10.38, -2.02]}
          rotation={[-1.22, 0, 0]}
        />
        <mesh
          name="monitor_1_leg_2"
          geometry={nodes.monitor_1_leg_2.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[-4.16, -15.79, -0.13]}
          rotation={[-Math.PI / 2, 0, Math.PI / 4]}
        />
        <mesh
          name="monitor_1_leg_1"
          geometry={nodes.monitor_1_leg_1.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[3.82, -15.91, 0.13]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 4]}
        />
      </group>
      <group name="chair_1" position={[12.32, -113.29, -72.65]} scale={1.23}>
        <mesh
          name="chair_one_connector"
          geometry={nodes.chair_one_connector.geometry}
          material={materials.safe_grey}
          castShadow
          receiveShadow
          position={[0.46, 8.77, 15.29]}
          rotation={[-0.79, -0.01, 3.13]}
        />
        <mesh
          name="chair_1_back"
          geometry={nodes.chair_1_back.geometry}
          material={materials.lock_yellow}
          castShadow
          receiveShadow
          position={[0.46, 28.73, 21.48]}
          rotation={[-Math.PI, 0.02, -Math.PI]}
        />
        <mesh
          name="chair_1_seat"
          geometry={nodes.chair_1_seat.geometry}
          material={materials.lock_yellow}
          castShadow
          receiveShadow
          position={[0.69, 0.46, -1.69]}
          rotation={[-Math.PI / 2, 0, 3.12]}
        />
        <mesh
          name="chair_1_col"
          geometry={nodes.chair_1_col.geometry}
          material={materials.safe_grey}
          castShadow
          receiveShadow
          position={[0.42, -11.46, -1.53]}
          rotation={[Math.PI, 0.02, Math.PI]}
        />
        <group
          name="chair_1_leg_g"
          position={[0, -28.04, -1.42]}
          rotation={[-0.17, 0, 0]}
        >
          <mesh
            name="chair_1_leg_4"
            geometry={nodes.chair_1_leg_4.geometry}
            material={materials.safe_grey}
            castShadow
            receiveShadow
            position={[0.38, -0.08, 10.58]}
            rotation={[2.01, 0.01, -3.13]}
          />
          <mesh
            name="chair_1_leg_3"
            geometry={nodes.chair_1_leg_3.geometry}
            material={materials.safe_grey}
            castShadow
            receiveShadow
            position={[10.13, 0, -0.3]}
            rotation={[2.01, -0.43, -1.47]}
          />
          <mesh
            name="chair_1_leg_2"
            geometry={nodes.chair_1_leg_2.geometry}
            material={materials.safe_grey}
            castShadow
            receiveShadow
            position={[0.62, 2.66, -9.97]}
            rotation={[1.4, 0, -3.12]}
          />
          <mesh
            name="chair_1_leg_1"
            geometry={nodes.chair_1_leg_1.geometry}
            material={materials.safe_grey}
            castShadow
            receiveShadow
            position={[-9.73, 2.01, -0.41]}
            rotation={[2, 0.27, 1.59]}
          />
        </group>
      </group>
      <group name="mug_1_g" position={[-33.22, -62.44, -159.01]}>
        <mesh
          name="mug_cyl_1"
          geometry={nodes.mug_cyl_1.geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[-3.83, 2.87, 0.6]}
          rotation={[0.22, -0.21, 0.23]}
        />
        <mesh
          name="mug_1"
          geometry={nodes.mug_1.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[0.22, -4.75, 0]}
        />
      </group>
      <group name="hand_1" position={[54.59, -46.78, -102.54]}>
        <motion.group
          name="hand_forearm_g"
          position={[0, -22.57, -17.87]}
          animate={{
            rotateY: value.atomHover ? 2 * Math.PI : 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
        >
          <group
            name="hand_palm_g"
            position={[0, 45.85, 25.96]}
            rotation={[-0.47, 0, 0]}
          >
            <mesh
              name="hand_1_finger_8"
              geometry={nodes.hand_1_finger_8.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[-3.47, -1.79, 7.28]}
              rotation={[-1.14, 0.05, -0.07]}
              scale={[1, 0.71, 1]}
            />
            <mesh
              name="hand_1_finger_7"
              geometry={nodes.hand_1_finger_7.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[3.11, -0.61, 7.43]}
              rotation={[-0.99, 0.05, 0.21]}
              scale={[1, 0.71, 1]}
            />
            <mesh
              name="hand_1_finger_6"
              geometry={nodes.hand_1_finger_6.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[0.08, 0.65, 7.91]}
              rotation={[-1.24, 0.04, 0.1]}
              scale={[1, 0.71, 1]}
            />
            <mesh
              name="hand_1_finger_5"
              geometry={nodes.hand_1_finger_5.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[-5.05, 0.35, -0.69]}
              rotation={[-Math.PI / 2, 0, -0.44]}
              scale={[1, 1.09, 1]}
            />
            <mesh
              name="hand_1_finger_4"
              geometry={nodes.hand_1_finger_4.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[-2.95, 1.74, 2.54]}
              rotation={[-1.56, 0, -0.17]}
              scale={[1, 0.84, 1]}
            />
            <mesh
              name="hand_1_finger_3"
              geometry={nodes.hand_1_finger_3.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[-0.43, 1.61, 3.16]}
              rotation={[-1.43, 0.01, 0.11]}
              scale={[1, 0.84, 1]}
            />
            <mesh
              name="hand_1_finger_2"
              geometry={nodes.hand_1_finger_2.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[5.05, -0.21, 1.84]}
              rotation={[-1.43, 0.03, 0.48]}
            />
            <mesh
              name="hand_1_finger_1"
              geometry={nodes.hand_1_finger_1.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[1.94, 1.03, 2.79]}
              rotation={[-1.34, 0.05, 0.23]}
            />
            <mesh
              name="hand_1_palm"
              geometry={nodes.hand_1_palm.geometry}
              material={materials.piano_key_white}
              castShadow
              receiveShadow
              position={[-0.37, 0.33, -4.5]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <mesh
            name="hand_1_wrist"
            geometry={nodes.hand_1_wrist.geometry}
            material={materials.tv}
            castShadow
            receiveShadow
            position={[0.04, 34.94, 13.56]}
            rotation={[-0.91, 0, 0]}
          />
          <mesh
            name="hand_1_forearm"
            geometry={nodes.hand_1_forearm.geometry}
            material={materials.piano_key_white}
            castShadow
            receiveShadow
            position={[0.04, 13.18, 2.51]}
            rotation={[-1.37, 0, 0]}
          />
        </motion.group>
        <mesh
          name="hand_1_base"
          geometry={nodes.hand_1_base.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[0.15, -24.34, -17.96]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name="room_2_windows_frame"
        position={[-51.57, 37.51, -175.53]}
        rotation={[0, -Math.PI / 2, 0]}
      >
        <mesh
          name="room_2_windows_frame_rect_5"
          geometry={nodes.room_2_windows_frame_rect_5.geometry}
          material={materials.sofa_2}
          castShadow
          receiveShadow
          position={[-1.5, 2.62, -53.29]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="room_2_windows_frame_rect_4"
          geometry={nodes.room_2_windows_frame_rect_4.geometry}
          material={materials.sofa_2}
          castShadow
          receiveShadow
          position={[-1.5, 2.33, 53.29]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="room_2_windows_frame_rect_3"
          geometry={nodes.room_2_windows_frame_rect_3.geometry}
          material={materials.sofa_2}
          castShadow
          receiveShadow
          position={[-1.5, -23.6, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="room_2_windows_frame_rect_2"
          geometry={nodes.room_2_windows_frame_rect_2.geometry}
          material={materials.sofa_2}
          castShadow
          receiveShadow
          position={[-1.5, -69.05, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="room_2_windows_frame_rect_1"
          geometry={nodes.room_2_windows_frame_rect_1.geometry}
          material={materials.sofa_2}
          castShadow
          receiveShadow
          position={[-1.5, 69.05, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <group name="table_room_2" position={[10.23, -113.51, -137.31]}>
        <mesh
          name="table_room_2_cube_11"
          geometry={nodes.table_room_2_cube_11.geometry}
          material={materials["table_room_2_cube_11 Material"]}
          castShadow
          receiveShadow
          position={[-39.73, 31.02, 34.31]}
        />
        <mesh
          name="table_room_2_cube_10"
          geometry={nodes.table_room_2_cube_10.geometry}
          material={materials["table_room_2_cube_10 Material"]}
          castShadow
          receiveShadow
          position={[-39.73, 8.33, 34.31]}
        />
        <mesh
          name="table_room_2_cube_9"
          geometry={nodes.table_room_2_cube_9.geometry}
          material={materials["table_room_2_cube_9 Material"]}
          castShadow
          receiveShadow
          position={[-39.73, -14.37, 34.31]}
        />
        <mesh
          name="table_room_2_cube_8"
          geometry={nodes.table_room_2_cube_8.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-40.45, -22.09, 14.15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1.45, 1]}
        />
        <mesh
          name="table_room_2_cube_7"
          geometry={nodes.table_room_2_cube_7.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-40.45, 0.58, 14.15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1.45, 1]}
        />
        <mesh
          name="table_room_2_cube_6"
          geometry={nodes.table_room_2_cube_6.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-40.45, 23.26, 14.15]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1.45, 1]}
        />
        <mesh
          name="table_room_2_cube_5"
          geometry={nodes.table_room_2_cube_5.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[0, 37.44, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="table_room_2_cube_4"
          geometry={nodes.table_room_2_cube_4.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-62.43, -2.42, -31.45]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="table_room_2_cube_3"
          geometry={nodes.table_room_2_cube_3.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[62.16, -2.42, -31.45]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="table_room_2_cube_2"
          geometry={nodes.table_room_2_cube_2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-62.29, -36.81, 30.94]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="table_room_2_cube_1"
          geometry={nodes.table_room_2_cube_1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[62.16, -2.42, 30.94]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="safe_1" position={[-151.5, 47.6, 111.21]}>
        <motion.group
          name="safe_1_door_g"
          position={[17.8, -0.12, 0]}
          animate={{
            rotateY: value.sorexHover ? Math.PI / 4 : 0,
            z: value.sorexHover ? -15 : 0,
            x: value.sorexHover ? 25 : 17.8,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
        >
          <mesh
            name="safe_1_door"
            geometry={nodes.safe_1_door.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[-0.61, 0, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          />
          <mesh
            name="safe_1_rect_9"
            geometry={nodes.safe_1_rect_9.geometry}
            material={materials["safe_1_rect_9 Material"]}
            castShadow
            receiveShadow
            position={[1.7, -2.57, 8.53]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_rect_8"
            geometry={nodes.safe_1_rect_8.geometry}
            material={materials["safe_1_rect_8 Material"]}
            castShadow
            receiveShadow
            position={[1.7, -0.98, 8.53]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_rect_7"
            geometry={nodes.safe_1_rect_7.geometry}
            material={materials["safe_1_rect_7 Material"]}
            castShadow
            receiveShadow
            position={[1.7, 0.73, 8.53]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_rect_6"
            geometry={nodes.safe_1_rect_6.geometry}
            material={materials["safe_1_rect_6 Material"]}
            castShadow
            receiveShadow
            position={[1.7, -2.57, 9.99]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_rect_5"
            geometry={nodes.safe_1_rect_5.geometry}
            material={materials["safe_1_rect_5 Material"]}
            castShadow
            receiveShadow
            position={[1.7, -0.98, 9.99]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_rect_4"
            geometry={nodes.safe_1_rect_4.geometry}
            material={materials["safe_1_rect_4 Material"]}
            castShadow
            receiveShadow
            position={[1.7, 0.73, 9.99]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_rect_3"
            geometry={nodes.safe_1_rect_3.geometry}
            material={materials["safe_1_rect_3 Material"]}
            castShadow
            receiveShadow
            position={[1.7, -2.57, 11.58]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_rect_2"
            geometry={nodes.safe_1_rect_2.geometry}
            material={materials["safe_1_rect_2 Material"]}
            castShadow
            receiveShadow
            position={[1.7, -0.98, 11.58]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_rect_1"
            geometry={nodes.safe_1_rect_1.geometry}
            material={materials["safe_1_rect_1 Material"]}
            castShadow
            receiveShadow
            position={[1.7, 0.73, 11.58]}
            rotation={[0, Math.PI / 2, 0]}
          />
          <mesh
            name="safe_1_label"
            geometry={nodes.safe_1_label.geometry}
            material={materials["safe_1_label Material"]}
            castShadow
            receiveShadow
            position={[0.7, -0.92, 12.7]}
            rotation={[0, Math.PI / 2, 0]}
          />
        </motion.group>
        <mesh
          name="safe-1_cube"
          geometry={nodes["safe-1_cube"].geometry}
          material={materials.safe_grey}
          castShadow
          receiveShadow
          position={[-4.5, 0, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />
      </group>
      <mesh
        name="carper_2"
        geometry={nodes.carper_2.geometry}
        material={materials.idk}
        castShadow
        receiveShadow
        position={[45.09, -154.38, -13.03]}
        rotation={[-Math.PI / 2, 0, 3.13]}
      />
      <motion.group
        name="security_1"
        position={[144.79, 26.25, -175.18]}
        animate={{
          z: value.securityHover ? -150 : -175.18,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
        }}
      >
        <mesh
          name="security_1_rect_10"
          geometry={nodes.security_1_rect_10.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[7.55, -11.19, 0.82]}
        />
        <mesh
          name="security_1_rect_9"
          geometry={nodes.security_1_rect_9.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[7.55, -4.41, 0.82]}
        />
        <mesh
          name="security_1_rect_8"
          geometry={nodes.security_1_rect_8.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[7.55, 2.37, 0.82]}
        />
        <mesh
          name="security_1_rect_7"
          geometry={nodes.security_1_rect_7.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[0.57, -11.19, 0.82]}
        />
        <mesh
          name="security_1_rect_6"
          geometry={nodes.security_1_rect_6.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[0.57, -4.41, 0.82]}
        />
        <mesh
          name="security_1_rect_5"
          geometry={nodes.security_1_rect_5.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[0.57, 2.37, 0.82]}
        />
        <mesh
          name="security_1_rect_4"
          geometry={nodes.security_1_rect_4.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-6.6, -11.19, 0.82]}
        />
        <mesh
          name="security_1_rect_3"
          geometry={nodes.security_1_rect_3.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-6.6, -4.41, 0.82]}
        />
        <mesh
          name="security_1_rect_2"
          geometry={nodes.security_1_rect_2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-6.6, 2.37, 0.82]}
        />
        <mesh
          name="security_1_rect_1"
          geometry={nodes.security_1_rect_1.geometry}
          material={materials.t_shirt_1}
          castShadow
          receiveShadow
          position={[0.24, 11.87, 0.86]}
        />
        <mesh
          name="security_1_cube"
          geometry={nodes.security_1_cube.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[0, 0, -0.89]}
        />
      </motion.group>
      <mesh
        name="wall_shelf_1"
        geometry={nodes.wall_shelf_1.geometry}
        material={materials[" closet_1"]}
        castShadow
        receiveShadow
        position={[-155.82, 26.44, 113.11]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <motion.group
        name="closet_1"
        position={[-111.22, -58.17, -45.49]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <group name="t_shirt_12" position={[31.49, 45.42, -20.49]}>
          <mesh
            name="t_shirt_12_3"
            geometry={nodes.t_shirt_12_3.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_12_2"
            geometry={nodes.t_shirt_12_2.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_12_1"
            geometry={nodes.t_shirt_12_1.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_11" position={[1.7, 45.42, -20.49]}>
          <mesh
            name="t_shirt_11_3"
            geometry={nodes.t_shirt_11_3.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_11_2"
            geometry={nodes.t_shirt_11_2.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_11_1"
            geometry={nodes.t_shirt_11_1.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_10" position={[-27.94, 45.42, -20.49]}>
          <mesh
            name="t_shirt_10_3"
            geometry={nodes.t_shirt_10_3.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_10_2"
            geometry={nodes.t_shirt_10_2.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_10_1"
            geometry={nodes.t_shirt_10_1.geometry}
            material={materials.t_shirt_4}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_9" position={[30.05, 2.04, -20.49]}>
          <mesh
            name="t_shirt_9_3"
            geometry={nodes.t_shirt_9_3.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_9_2"
            geometry={nodes.t_shirt_9_2.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_9_1"
            geometry={nodes.t_shirt_9_1.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_8" position={[0.91, 2.04, -20.49]}>
          <mesh
            name="t_shirt_8_3"
            geometry={nodes.t_shirt_8_3.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_8_2"
            geometry={nodes.t_shirt_8_2.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_8_1"
            geometry={nodes.t_shirt_8_1.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_7" position={[-28.11, 2.04, -20.49]}>
          <mesh
            name="t_shirt_7_3"
            geometry={nodes.t_shirt_7_3.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_7_2"
            geometry={nodes.t_shirt_7_2.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_7_1"
            geometry={nodes.t_shirt_7_1.geometry}
            material={materials.t_shirt_3}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_6" position={[-28.11, -38.23, -20.49]}>
          <mesh
            name="t_shirt_6_3"
            geometry={nodes.t_shirt_6_3.geometry}
            material={materials["t_shirt_6_3 Material"]}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_6_2"
            geometry={nodes.t_shirt_6_2.geometry}
            material={materials["t_shirt_6_2 Material"]}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_6_1"
            geometry={nodes.t_shirt_6_1.geometry}
            material={materials["t_shirt_6_1 Material"]}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_5" position={[29.86, -38.23, -20.49]}>
          <mesh
            name="t_shirt_5_3"
            geometry={nodes.t_shirt_5_3.geometry}
            material={materials.t_shirt_2}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_5_2"
            geometry={nodes.t_shirt_5_2.geometry}
            material={materials.t_shirt_2}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_5_1"
            geometry={nodes.t_shirt_5_1.geometry}
            material={materials.t_shirt_2}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_4" position={[0.35, -38.23, -20.49]}>
          <mesh
            name="t_shirt_4_3"
            geometry={nodes.t_shirt_4_3.geometry}
            material={materials.t_shirt_2}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_4_2"
            geometry={nodes.t_shirt_4_2.geometry}
            material={materials.t_shirt_2}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_4_1"
            geometry={nodes.t_shirt_4_1.geometry}
            material={materials.t_shirt_2}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_3" position={[29.72, -80.4, -20.49]}>
          <mesh
            name="t_shirt_3_3"
            geometry={nodes.t_shirt_3_3.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_3_2"
            geometry={nodes.t_shirt_3_2.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_3_1"
            geometry={nodes.t_shirt_3_1.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_2" position={[0.35, -80.4, -20.49]}>
          <mesh
            name="t_shirt_2_3"
            geometry={nodes.t_shirt_2_3.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_2_2"
            geometry={nodes.t_shirt_2_2.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_2_1"
            geometry={nodes.t_shirt_2_1.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="t_shirt_1" position={[-28.96, -80.4, -20.49]}>
          <mesh
            name="t_shirt_1_3"
            geometry={nodes.t_shirt_1_3.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[2.3, 0.94, -10.33]}
            rotation={[-Math.PI / 2, 0, 0.44]}
          />
          <mesh
            name="t_shirt_1_2"
            geometry={nodes.t_shirt_1_2.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[-2.75, 0.94, -10.32]}
            rotation={[-Math.PI / 2, 0, -0.44]}
          />
          <mesh
            name="t_shirt_1_1"
            geometry={nodes.t_shirt_1_1.geometry}
            material={materials.t_shirt_1}
            castShadow
            receiveShadow
            position={[0, -0.94, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <mesh
          name="closet_cube_8"
          geometry={nodes.closet_cube_8.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[2.64, 39.54, -30.21]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="closet_cube_7"
          geometry={nodes.closet_cube_7.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[2.64, -3.65, -30.21]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="closet_cube_6"
          geometry={nodes.closet_cube_6.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[2.64, -44.47, -30.21]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="closet_cube_5"
          geometry={nodes.closet_cube_5.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[2.64, -86.47, -30.21]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="closet_cube_4"
          geometry={nodes.closet_cube_4.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[2.64, 94.01, -30.31]}
          rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        />
        <mesh
          name="closet_cube_3"
          geometry={nodes.closet_cube_3.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[3.19, -0.01, -57.7]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        />

        <motion.mesh
          name="closet_cube_10"
          geometry={nodes.closet_cube_10.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          position={[27.9, 3.88, 1.49]}
          animate={{
            rotateZ: value.karlaHover ? 0 : -Math.PI / 2,
            z: value.karlaHover ? 22 : 1.49,
            x: value.karlaHover ? 50 : 27.9,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
        />
        <motion.mesh
          name="closet_cube_9"
          geometry={nodes.closet_cube_9.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          position={[-24.08, 3.76, 1.29]}
          animate={{
            rotateZ: value.karlaHover ? -Math.PI : -Math.PI / 2,
            z: value.karlaHover ? 22 : 1.29,
            x: value.karlaHover ? -47 : -24.08,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
        />

        <mesh
          name="closet_cube_2"
          geometry={nodes.closet_cube_2.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[52.09, -0.01, -30.21]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="closet_cube_1"
          geometry={nodes.closet_cube_1.geometry}
          material={materials[" closet_1"]}
          castShadow
          receiveShadow
          position={[-46.68, -0.01, -30.21]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <motion.group
        name="robot"
        position={[robotX, -127.38, 95.5]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
      >
        <group
          name="robot_arm_left"
          position={[-0.2, -7.97, -0.4]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            name="robot_hand_rect_3_left"
            geometry={nodes.robot_hand_rect_3_left.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[1.52, -9.27, -0.83]}
          />
          <mesh
            name="robot_hand_rect_2_left"
            geometry={nodes.robot_hand_rect_2_left.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[-1.52, -9.27, -0.83]}
          />
          <mesh
            name="robot_hand_rect_1_left"
            geometry={nodes.robot_hand_rect_1_left.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[0.02, -7.44, -0.83]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            name="robot_arm_arm_left"
            geometry={nodes.robot_arm_arm_left.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[0.04, 1.2, -0.6]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            name="robot_arm_cube_left"
            geometry={nodes.robot_arm_cube_left.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[0.06, 10.27, 0.33]}
            rotation={[0, 0, Math.PI / 2]}
          />
        </group>
        <group
          name="robot_arm_right"
          position={[-0.2, 8.54, -0.4]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            name="robot_hand_rect_3_right"
            geometry={nodes.robot_hand_rect_3_right.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[1.52, -9.27, -0.16]}
          />
          <mesh
            name="robot_hand_rect_2_right"
            geometry={nodes.robot_hand_rect_2_right.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[-1.52, -9.27, -0.16]}
          />
          <mesh
            name="robot_hand_rect_1_right"
            geometry={nodes.robot_hand_rect_1_right.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[0.02, -7.44, -0.16]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            name="robot_arm_arm_right"
            geometry={nodes.robot_arm_arm_right.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[0.04, 1.2, 0.08]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            name="robot_arm_cube_right"
            geometry={nodes.robot_arm_cube_right.geometry}
            material={materials.road}
            castShadow
            receiveShadow
            position={[0.06, 10.27, -0.34]}
            rotation={[0, 0, Math.PI / 2]}
          />
        </group>
        <mesh
          name="robot_left_ear"
          geometry={nodes.robot_left_ear.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[22.8, -6.67, 0.08]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="robot_right_ear"
          geometry={nodes.robot_right_ear.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[22.8, 7.87, 0.08]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <mesh
          name="robot_nose"
          geometry={nodes.robot_nose.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[23.07, 0.35, 6.58]}
          rotation={[0, 0, -Math.PI / 2]}
        />
        <mesh
          name="robot_left_eye_ball"
          geometry={nodes.robot_left_eye_ball.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[25.01, -3.06, 6.86]}
        />
        <mesh
          name="robot_right_eye_ball"
          geometry={nodes.robot_right_eye_ball.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[25.01, 4.02, 6.86]}
        />
        <mesh
          name="robot_left_eye_black"
          geometry={nodes.robot_left_eye_black.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[25, -3.05, 7.67]}
        />
        <mesh
          name="robot_left_eye_white"
          geometry={nodes.robot_left_eye_white.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[25, -3.04, 7.67]}
        />
        <mesh
          name="robot_right_eye_white"
          geometry={nodes.robot_right_eye_white.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[25, 4, 7.67]}
        />
        <mesh
          name="robot_right_eye_black"
          geometry={nodes.robot_right_eye_black.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[25, 4, 7.67]}
        />
        <mesh
          name="robot_mouth_black"
          geometry={nodes.robot_mouth_black.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[19.07, 0.5, 6.84]}
        />
        <mesh
          name="robot_mouth_white"
          geometry={nodes.robot_mouth_white.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[19.07, 0.5, 7.04]}
        />
        <mesh
          name="robot_cube_3"
          geometry={nodes.robot_cube_3.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[21.95, 0.59, -0.11]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="robot_cube_2"
          geometry={nodes.robot_cube_2.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[15.38, 0.5, -0.36]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="robot_body"
          geometry={nodes.robot_body.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[-3.03, 0.27, -0.27]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="robot_botoom_cube"
          geometry={nodes.robot_botoom_cube.geometry}
          material={materials.arrow}
          castShadow
          receiveShadow
          position={[-21.31, -10.19, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="robot_leg_left"
          geometry={nodes.robot_leg_left.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[-21.37, -14.08, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="robot_leg_right"
          geometry={nodes.robot_leg_right.geometry}
          material={materials.road}
          castShadow
          receiveShadow
          position={[-21.45, 9.08, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </motion.group>
      <group name="plant_2" position={[154.59, -105.03, -140.78]}>
        <motion.mesh
          name="plant_2_4"
          geometry={nodes.plant_2_4.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[-5.54, -13.85, 10.56]}
          rotation={[-1.53, 0.07, 1.75]}
          animate={{ rotateX: -1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        />
        <motion.mesh
          name="plant_2_3"
          geometry={nodes.plant_2_3.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[-2.01, -14.38, -3.72]}
          rotation={[-1.75, 0, -1.81]}
          animate={{ rotateX: -2 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            delay: 0.5,
          }}
        />
        <motion.mesh
          name="plant_2_2"
          geometry={nodes.plant_2_2.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[7.08, -12.64, 5.57]}
          rotation={[-Math.PI / 2, 0.1, -Math.PI]}
          animate={{ rotateY: 0.3 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            delay: 0.5,
          }}
        />
        <motion.mesh
          name="plant_2_1"
          geometry={nodes.plant_2_1.geometry}
          material={materials.plant}
          castShadow
          receiveShadow
          position={[-7.68, -11.83, 5.57]}
          rotation={[-Math.PI / 2, -0.06, 0]}
          animate={{ rotateY: -0.5 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            delay: 0.5,
          }}
        />
        <mesh
          name="pot_2"
          geometry={nodes.pot_2.geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[-2.55, -217.56, 3.63]}
        />
      </group>
      <mesh
        name="room_2_window"
        geometry={nodes.room_2_window.geometry}
        material={materials.room2_floor}
        castShadow
        receiveShadow
        position={[-52.31, 37.48, -182.64]}
      >
        <mesh
          name="room_2_window_cube"
          geometry={nodes.room_2_window_cube.geometry}
          material={materials["room_2_window_cube Material"]}
          visible={false}
          castShadow
          receiveShadow
        />
        <mesh
          name="room_2_wall_right"
          geometry={nodes.room_2_wall_right.geometry}
          material={materials.room2_floor}
          visible={false}
          castShadow
          receiveShadow
          position={[52.31, -34.98, -17.36]}
        />
      </mesh>
      <mesh
        name="room_2_wall_left"
        geometry={nodes.room_2_wall_left.geometry}
        material={materials.room2_floor}
        castShadow
        receiveShadow
        position={[-200, 2.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        name="room_2_floor"
        geometry={nodes.room_2_floor.geometry}
        material={materials.room2_floor}
        castShadow
        receiveShadow
        position={[0, -177.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  );
};

export default SecondFloor;

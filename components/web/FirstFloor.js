import React, { useContext } from "react";
import { motion } from "framer-motion-3d";
import { Global } from "./Web";

const FirstFloor = ({ nodes, materials, level }) => {
  const value = useContext(Global);

  return (
    <motion.group
      name="Room1"
      initial={{ x: 0, y: 1500, z: 0 }}
      animate={
        level === 1 ? { x: 100, y: 177.5, z: 100 } : { x: 0, y: 1500, z: 0 }
      }
      transition={{
        type: "tween",
        duration: 1.5,
        ease: "easeInOut",
      }}
    >
      <motion.mesh
        name="ball_1"
        geometry={nodes.ball_1.geometry}
        material={materials.arrow}
        castShadow
        receiveShadow
        position={[5.94, -84.5, 17]}
        rotation={[-Math.PI / 2, 0, 0]}
        animate={{ y: 10 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
        }}
      />
      <group name="resume" position={[-75, 39.27, -175]}>
        <motion.mesh
          name="resume_rect_2"
          geometry={nodes.resume_rect_2.geometry}
          material={materials["resume_rect_2 Material"]}
          castShadow
          receiveShadow
          position={[0, -0.27, 1]}
          animate={{ z: value.resumeHover ? 30 : 1 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 200,
          }}
        />
        <mesh
          name="resume_rect_1"
          geometry={nodes.resume_rect_1.geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[0, 0, -2]}
        />
      </group>
      <group name="carpet_1" position={[87.82, -154.45, 34]}>
        <mesh
          name="carpet_1_circle_2"
          geometry={nodes.carpet_1_circle_2.geometry}
          material={materials.room1_floor}
          castShadow
          receiveShadow
          position={[0, 0.44, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="carpet_1_circle_1"
          geometry={nodes.carpet_1_circle_1.geometry}
          material={materials.idk}
          castShadow
          receiveShadow
          position={[0, -1.44, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="plant_1" position={[-122.37, -105.03, -143.73]}>
        <motion.mesh
          name="plant_1_4"
          geometry={nodes.plant_1_4.geometry}
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
          name="plant_1_3"
          geometry={nodes.plant_1_3.geometry}
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
          name="plant_1_2"
          geometry={nodes.plant_1_2.geometry}
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
          name="plant_1_1"
          geometry={nodes.plant_1_1.geometry}
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
          name="pot_1"
          geometry={nodes.pot_1.geometry}
          material={materials.pot}
          castShadow
          receiveShadow
          position={[-2.55, -217.56, 3.63]}
        />
      </group>
      <group
        name="cv_1"
        position={[131, -89.95, 22.83]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <mesh
          name="cv_rect_3"
          geometry={nodes.cv_rect_3.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[2.73, 4.61, 3.4]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="cv_rect_2"
          geometry={nodes.cv_rect_2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-2.78, -3.02, 4.17]}
          rotation={[-Math.PI / 2, 0, -0.39]}
        />
        <mesh
          name="cv_rect_1"
          geometry={nodes.cv_rect_1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-7.2, -0.06, -5.13]}
          rotation={[-Math.PI / 2, 0, -0.68]}
        />
      </group>
      <group
        name="controller_1"
        position={[55.57, -91.03, 7.95]}
        rotation={[0.09, 0, 0]}
        scale={1.66}
      >
        <mesh
          name="controllet_1_circle_1"
          geometry={nodes.controllet_1_circle_1.geometry}
          material={materials["controllet_1_circle_1 Material"]}
          castShadow
          receiveShadow
          position={[-1.79, 2.01, -0.79]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.72}
        />
        <mesh
          name="controllet_1_circle_11"
          geometry={nodes.controllet_1_circle_11.geometry}
          material={materials["controllet_1_circle_11 Material"]}
          castShadow
          receiveShadow
          position={[1.81, 2.01, -0.79]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.72}
        />
        <mesh
          name="controllet_1_cube_3"
          geometry={nodes.controllet_1_cube_3.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[6.11, 0.27, 0.82]}
          rotation={[-Math.PI / 2, 0, 2.18]}
          scale={0.62}
        />
        <mesh
          name="controllet_1_cube_2"
          geometry={nodes.controllet_1_cube_2.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-6.11, 0.27, 0.59]}
          rotation={[-Math.PI / 2, 0, 0.96]}
          scale={0.62}
        />
        <mesh
          name="controllet_1_cube_1"
          geometry={nodes.controllet_1_cube_1.geometry}
          material={materials.piano_key_white}
          castShadow
          receiveShadow
          position={[-0.07, -0.01, -1.45]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="tv" position={[83.06, -63.48, 177.1]}>
        <mesh
          name="tv_tri_2"
          geometry={nodes.tv_tri_2.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[-11.8, -37.9, 0]}
          rotation={[Math.PI / 2, 1.22, -Math.PI / 2]}
        />
        <mesh
          name="tv_tri_1"
          geometry={nodes.tv_tri_1.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[9.25, -37.9, 0]}
          rotation={[-Math.PI / 2, 1.22, Math.PI / 2]}
        />
        <mesh
          name="tv_rect_1"
          geometry={nodes.tv_rect_1.geometry}
          material={materials.piano_body}
          castShadow
          receiveShadow
          position={[0, 6.06, -1.42]}
        />
      </group>
      <group name="tv_table" position={[83, -131.7, 177.5]}>
        <mesh
          name="tv_table_cyl_4"
          geometry={nodes.tv_table_cyl_4.geometry}
          material={materials["tv_table_cyl_4 Material"]}
          castShadow
          receiveShadow
          position={[65.86, -13.89, 9.39]}
          rotation={[0, 0, 0.26]}
        />
        <mesh
          name="tv_table_cyl_3"
          geometry={nodes.tv_table_cyl_3.geometry}
          material={materials["tv_table_cyl_3 Material"]}
          castShadow
          receiveShadow
          position={[-65.57, -13.82, 9.39]}
          rotation={[0, 0, -0.26]}
        />
        <mesh
          name="tv_table_cyl_2"
          geometry={nodes.tv_table_cyl_2.geometry}
          material={materials["tv_table_cyl_2 Material"]}
          castShadow
          receiveShadow
          position={[66.08, -13.83, -9.5]}
          rotation={[0, 0, 0.26]}
        />
        <mesh
          name="tv_table_cyl_1"
          geometry={nodes.tv_table_cyl_1.geometry}
          material={materials["tv_table_cyl_1 Material"]}
          castShadow
          receiveShadow
          position={[-65.32, -13.89, -9.5]}
          rotation={[0, 0, -0.26]}
        />
        <mesh
          name="tv_table_rect"
          geometry={nodes.tv_table_rect.geometry}
          material={materials.piano_chair_leg}
          castShadow
          receiveShadow
          position={[0, -4.44, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="tabel_1" position={[76.5, -124.59, 13.3]}>
        <mesh
          name="table_1_leg_4"
          geometry={nodes.table_1_leg_4.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-84.73, -5.23, 33.5]}
        />
        <mesh
          name="table_1_leg_3"
          geometry={nodes.table_1_leg_3.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[87.44, -5.23, 33.5]}
        />
        <mesh
          name="table_1_leg_2"
          geometry={nodes.table_1_leg_2.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[87.44, -5.23, -32.5]}
        />
        <mesh
          name="table_1_leg_1"
          geometry={nodes.table_1_leg_1.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-85, -5.23, -32.5]}
        />
        <mesh
          name="table_1_top"
          geometry={nodes.table_1_top.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[0, 18.38, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group name="piano_chair" position={[-110.07, -137.3, 84.52]}>
        <mesh
          name="piano_chair_cube"
          geometry={nodes.piano_chair_cube.geometry}
          material={materials["piano_chair_cube Material"]}
          castShadow
          receiveShadow
          position={[0, 14.32, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="piano_chair_cyl"
          geometry={nodes.piano_chair_cyl.geometry}
          material={materials.piano_chair_leg}
          castShadow
          receiveShadow
          position={[-11.85, -3.32, -11.89]}
        />
      </group>
      <group name="piano" position={[-144.75, -94.21, 153.21]}>
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
            name="right_leg_cube_4"
            geometry={nodes.right_leg_cube_4.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[-12.24, 0, 0.73]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="right_leg_cube_3"
            geometry={nodes.right_leg_cube_3.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[8.75, -53.87, 0.73]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="right_leg_cube_2"
            geometry={nodes.right_leg_cube_2.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[12.16, 14.95, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="right_leg_cube_1"
            geometry={nodes.right_leg_cube_1.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[19.82, -26.22, 0.97]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group name="left lef">
          <mesh
            name="left_leg_cube_4"
            geometry={nodes.left_leg_cube_4.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[-12.24, 0, 0.73]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="left_leg_cube_3"
            geometry={nodes.left_leg_cube_3.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[8.75, -53.87, 0.73]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="left_leg_cube_2"
            geometry={nodes.left_leg_cube_2.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[12.16, 14.95, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="left_leg_cube_1"
            geometry={nodes.left_leg_cube_1.geometry}
            material={materials.piano_body}
            castShadow
            receiveShadow
            position={[19.82, -26.22, 0.97]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
      <group name="sofa" position={[107.72, -94.77, -126.56]}>
        <mesh
          name="sofa_cube_3"
          geometry={nodes.sofa_cube_3.geometry}
          material={materials.sofa_2}
          castShadow
          receiveShadow
          position={[0.5, 20.33, -36.5]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name="sofa_cube_2"
          geometry={nodes.sofa_cube_2.geometry}
          material={materials.sofa_2}
          castShadow
          receiveShadow
          position={[0, -20.27, 0]}
        />
        <mesh
          name="sofa_cube_1"
          geometry={nodes.sofa_cube_1.geometry}
          material={materials.sofa_2}
          castShadow
          receiveShadow
          position={[0, -46.51, 0]}
        />
      </group>
      <motion.group
        name="linkedin"
        position={[101.41, 42.28, -124]}
        scale={0.1}
        animate={{ z: value.linkedinHover ? -90 : -124 }}
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
          name="linkedin_rect"
          geometry={nodes.linkedin_rect.geometry}
          material={materials["linkedin_rect Material"]}
          castShadow
          receiveShadow
          position={[-10.69, 0, -532.64]}
        />
      </motion.group>
      <mesh
        name="room_1_wall_right"
        geometry={nodes.room_1_wall_right.geometry}
        material={materials.room1_floor}
        castShadow
        receiveShadow
        position={[0, 2.5, -200]}
      />
      <group name="room_1_windows_frame" position={[-175.5, 55.45, -41.52]}>
        <mesh
          name="room_1_windows_frame_rect_5"
          geometry={nodes.room_1_windows_frame_rect_5.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, 2.62, -53.29]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="room_1_windows_frame_rect_4"
          geometry={nodes.room_1_windows_frame_rect_4.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, 2.33, 53.29]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        />
        <mesh
          name="room_1_windows_frame_rect_3"
          geometry={nodes.room_1_windows_frame_rect_3.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, -23.6, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="room_1_windows_frame_rect_2"
          geometry={nodes.room_1_windows_frame_rect_2.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, -69.05, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="room_1_windows_frame_rect_1"
          geometry={nodes.room_1_windows_frame_rect_1.geometry}
          material={materials["table _brown"]}
          castShadow
          receiveShadow
          position={[-1.5, 69.05, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </group>
      <mesh
        name="room_1_window"
        geometry={nodes.room_1_window.geometry}
        material={materials.room1_floor}
        castShadow
        receiveShadow
        position={[-189, 2.5, 0]}
      >
        <mesh
          name="room_1_window_cube"
          geometry={nodes.room_1_window_cube.geometry}
          material={materials["room_1_window_cube Material"]}
          visible={false}
          castShadow
          receiveShadow
          position={[0.08, 52.33, -41.52]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="room_1_wall_left"
          geometry={nodes.room_1_wall_left.geometry}
          material={materials.room1_floor}
          visible={false}
          castShadow
          receiveShadow
          position={[-11, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </mesh>
      <mesh
        name="room_1_floor"
        geometry={nodes.room_1_floor.geometry}
        material={materials.room1_floor}
        castShadow
        receiveShadow
        position={[0, -177.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  );
};

export default FirstFloor;

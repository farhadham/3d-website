import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ children, onMouseEnter, onMouseLeave, ...rest }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.button
      {...rest}
      className="w-40"
      style={{
        borderStyle: "solid",
        borderWidth: "2px",
        borderColor: "#4bffa5",
        position: "relative",
        overflow: "hidden",
        zIndex: 10,
        height: "40px",
        background: "none",
        fontSize: "16px",
        fontWeight: 500,
        display: "inline-block",
      }}
      onMouseEnter={() => {
        onMouseEnter && onMouseEnter();
        setHover(true);
      }}
      onMouseLeave={() => {
        onMouseLeave && onMouseLeave();
        setHover(false);
      }}
      animate={hover ? { color: "#000000" } : { color: "#4bffa5" }}
      initial={{ color: "#4bffa5" }}
      transition={{ duration: 0.35 }}
    >
      {children}
      <motion.div
        style={{
          width: "160px",
          height: "200px",
          borderRadius: "50%",
          position: "absolute",
          left: "0px",
          top: "-80px",
          zIndex: -10,
          backgroundColor: "#4bffa5",
        }}
        initial={{ scale: 0 }}
        animate={hover ? { scale: 1.1 } : { scale: 0 }}
        transition={{ duration: 0.35 }}
      ></motion.div>
    </motion.button>
  );
};

export default Button;

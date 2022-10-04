import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ children, ...rest }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.button
      {...rest}
      style={{
        fontWeight: 300,
        paddingTop: 16,
        paddingBottom: 16,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "white",
        position: "relative",
        overflow: "hidden",
        zIndex: 10,
        width: "100%",
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className="text-xl xl:text-2xl 2xl:text-4xl"
    >
      <motion.div
        className="absolute bg-primary h-96 top-0 left-0 -z-10"
        animate={hover ? { width: 450 } : { width: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      ></motion.div>
      {children}
    </motion.button>
  );
};

export default Button;

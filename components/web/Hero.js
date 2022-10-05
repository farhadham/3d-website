import React from "react";
import Button from "./common/Button";
import { motion, AnimatePresence } from "framer-motion";

const Hero = ({ level }) => {
  return (
    <AnimatePresence>
      {level === 1 && (
        <motion.div
          className="text-white text-6xl font-bold flex flex-col justify-center items-center h-full mx-6 absolute z-20"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="mb-8 2xl:mb-10">
            <p className="text-xl xl:text-2xl 2xl:text-3xl mb-4">Hi I`m </p>
            <h1 className="text-5xl xl:text-6xl 2xl:text-7xl mb-2">
              Farhad Faraji
            </h1>
            <h1 className="text-3xl xl:text-4xl 2xl:text-5xl">
              <span className="text-primary">Full-Stack</span> Developer
            </h1>
          </div>
          <Button
            className=""
            onClick={() => {
              window.open("https://linkedin.com/in/farhadfaraji", "_blank");
            }}
          >
            Linkedin
          </Button>

          <a
            href="https://resume-farhadham.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-light text-xl lg:text-4xl text-center mt-4 lg:mt-8 cursor-pointer"
          >
            Download CV
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;

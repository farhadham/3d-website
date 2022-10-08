import React, { useContext } from "react";
import Button from "./common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Global } from "./Web";

const Hero = ({ level }) => {
  const value = useContext(Global);

  const handleLinkedinEnter = (e) => {
    value.setLinkedinHover(true);
  };
  const handleLinkedinLeave = (e) => {
    value.setLinkedinHover(false);
  };

  const handleResumeEnter = (e) => {
    value.setResumeHover(true);
  };
  const handleResumeLeave = (e) => {
    value.setResumeHover(false);
  };

  return (
    <AnimatePresence>
      {level === 1 && (
        <motion.div
          className="text-white text-6xl font-bold flex flex-col justify-center h-full mx-6 absolute z-20"
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
          <div className="flex justify-center gap-4">
            <Button
              onClick={() => {
                window.open("https://linkedin.com/in/farhadfaraji", "_blank");
              }}
              onMouseEnter={handleLinkedinEnter}
              onMouseLeave={handleLinkedinLeave}
            >
              Linkedin
            </Button>
            <Button
              onClick={() => {
                window.open("https://resume-farhadham.vercel.app/", "_blank");
              }}
              onMouseEnter={handleResumeEnter}
              onMouseLeave={handleResumeLeave}
            >
              Download CV
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;

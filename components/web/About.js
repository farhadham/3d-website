import React from "react";
import Button from "./common/Button";
import { motion, AnimatePresence } from "framer-motion";

const About = ({ level }) => {
  return (
    <AnimatePresence>
      {level === 2 && (
        <motion.div
          className=" text-white text-6xl font-bold flex flex-col justify-center items-center h-full mx-12 absolute z-10 "
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="mb-8 2xl:mb-10">
            <p className="text-base xl:text-lg 2xl:text-xl mb-2 font-normal text-justify">
              Hello! I`m Farhad Faraji.
            </p>
            <p className="text-base xl:text-lg 2xl:text-xl mb-2 font-normal text-justify">
              Full Stack Developer and Music Composer
            </p>
            <p className="text-base xl:text-lg 2xl:text-xl mb-2 font-normal text-justify">
              I love coding and creativity and I am always looking to learn new
              skills!
            </p>
          </div>
          <div className="text-2xl">
            <p className="font-normal mb-2">
              <span className="text-primary">Born</span> 1996
            </p>
            <p className="font-normal mb-2">
              <span className="text-primary">Residence</span> Iran/Turkey
            </p>
            <a href="mailto:farhadham2@gmail.com" className="font-normal mb-2">
              <span className="text-primary">Email</span> farhadham2@gmail.com
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default About;
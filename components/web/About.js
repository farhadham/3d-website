import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Global } from "./Web";

const About = ({ level }) => {
  const value = useContext(Global);

  const handleCsEnter = (e) => {
    value.setCsHover(true);
  };
  const handleCsLeave = (e) => {
    value.setCsHover(false);
  };

  const handleGoogleEnter = (e) => {
    value.setGoogleHover(true);
  };
  const handleGoogleLeave = (e) => {
    value.setGoogleHover(false);
  };

  const handleMetaEnter = (e) => {
    value.setMetaHover(true);
  };
  const handleMetaLeave = (e) => {
    value.setMetaHover(false);
  };

  //test

  return (
    <AnimatePresence>
      {level === 3 && (
        <motion.div
          className=" text-white text-xl flex flex-col justify-center items-center lg:items-start h-full mx-12 absolute z-10 text-left"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h3 className="font-bold text-2xl mb-4">Education</h3>
          <p className="mb-2 text-base">2013 - 2017</p>
          <p className="mb-2 text-lg text-primary">
            Bachelor`s Degree - Civil Engineering
          </p>
          <p className="mb-12 text-lg text-center lg:text-left">
            I have graduated with a degree in Civil Engineering from University
            of Tabriz, one of the top universities in Iran
          </p>
          <h3 className="font-bold text-2xl mb-4">Certifications</h3>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1zK0I6izWqq9z_R8VSEUUaFs3TTfhC921/view?usp=sharing"
            className="mb-2 text-lg text-primary underline"
            onMouseEnter={() => {
              handleCsEnter();
            }}
            onMouseLeave={() => {
              handleCsLeave();
            }}
          >
            CS50`s Understanding Technology - Harvard University
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1XBrw2G1_wRIuEHlLeZlaA3OI2ryPoBv-/view?usp=sharing"
            className="mb-2 text-lg text-primary underline"
            onMouseEnter={() => {
              handleGoogleEnter();
            }}
            onMouseLeave={() => {
              handleGoogleLeave();
            }}
          >
            The Fundementals of Digital Marketing - Google Inc.
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1ZkphkjQIdbeTQqXvqoNUQiF6vw-bnYAw/view?usp=sharing"
            className="mb-2 text-lg text-primary underline"
            onMouseEnter={() => {
              handleMetaEnter();
            }}
            onMouseLeave={() => {
              handleMetaLeave();
            }}
          >
            Meta Back-End Developer - Programming in Python
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const NextButton = ({ setLevel, level }) => {
  return (
    <div className="text-stone-900 text-xl flex justify-center items-center  rounded-full mt-16 lg:mt-0 mb-8  lg:mb-16 bg-stone-100 cursor-pointer shadow-2xl shadow-stone-600 absolute bottom-0 z-50">
      <div
        className="w-16 text-center px-4 text-3xl"
        onClick={() => {
          setLevel((state) => {
            if (state > 1) {
              return state - 1;
            } else {
              return state;
            }
          });
        }}
      >
        ⇩
      </div>
      <div className="w-40 text-center border-x border-stone-400 border-solid py-5">
        {level === 1 ? "Home" : level === 2 ? "Portfolio" : "About"}
      </div>
      <div
        className="w-16 text-center px-4 text-3xl"
        onClick={() => {
          setLevel((state) => {
            if (state < 3) {
              return state + 1;
            } else {
              return state;
            }
          });
        }}
      >
        ⇧
      </div>
    </div>
  );
};

export default NextButton;

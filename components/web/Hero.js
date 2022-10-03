import React from "react";

const Hero = ({ setLevel }) => {
  return (
    <div className=" text-white text-6xl font-bold flex flex-col justify-center h-full mx-8">
      <p className="text-3xl mb-2">Hi I`m </p>
      <h1 className="text-7xl">Farhad Faraji</h1>
      <h1 className="text-5xl">
        <span className="text-primary">Full-Stack</span> Developer
      </h1>
      <button
        onClick={() => {
          setLevel((state) => {
            return state === 1 ? 2 : 1;
          });
        }}
      >
        LEVEL
      </button>
    </div>
  );
};

export default Hero;

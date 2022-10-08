import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Global } from "./Web";

const Portfolio = ({ level }) => {
  const value = useContext(Global);

  const handleKarlaEnter = (e) => {
    value.setKarlaHover(true);
  };
  const handleKarlaLeave = (e) => {
    value.setKarlaHover(false);
  };

  const handleSorexEnter = (e) => {
    value.setSorexHover(true);
  };
  const handleSorexLeave = (e) => {
    value.setSorexHover(false);
  };

  const handleSecurityEnter = (e) => {
    value.setSecurityHover(true);
  };
  const handleSecurityLeave = (e) => {
    value.setSecurityHover(false);
  };

  const handleAtomEnter = (e) => {
    value.setAtomHover(true);
  };
  const handleAtomLeave = (e) => {
    value.setAtomHover(false);
  };

  return (
    <AnimatePresence>
      {level === 2 && (
        <motion.div
          className=" text-white text-xl flex flex-col justify-center items-center lg:items-start h-full mx-12 absolute z-10 text-left"
          initial={{ opacity: 0, x: -400 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -400 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <p
            className="mb-6"
            onMouseEnter={() => handleKarlaEnter()}
            onMouseLeave={() => handleKarlaLeave()}
          >
            <a
              href="https://karla-online.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary underline"
            >
              Karla Shop
            </a>
            : Back-end (MongoDB / Node.js / Express.js) and React Native
          </p>

          <p
            className="mb-6"
            onMouseEnter={() => handleAtomEnter()}
            onMouseLeave={() => handleAtomLeave()}
          >
            <a
              href="https://atom-libs.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary underline"
            >
              Atom Limbs
            </a>
            : Front-end (Next.js)
          </p>
          <p className="mb-6">
            <a
              href="https://then0tbot.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary underline"
            >
              Then0bot
            </a>
            : Landing Page (Next.js / Tailwind.css)
          </p>
          <p
            className="mb-6"
            onMouseEnter={() => handleSorexEnter()}
            onMouseLeave={() => handleSorexLeave()}
          >
            <a
              href="https://sorex-landingpage.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary underline"
            >
              Sorex.eu
            </a>
            : Scroll-animation + 3D model (Next.js / Framer-motion)
          </p>
          <p
            className=""
            onMouseEnter={() => handleSecurityEnter()}
            onMouseLeave={() => handleSecurityLeave()}
          >
            <a
              href="https://radical-security.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary underline"
            >
              Radical Security
            </a>
            : Front-end (Next.js)
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Portfolio;

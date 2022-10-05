import Web from "../components/web/Web";
import { useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import Router from "next/router";
import Head from "next/head";

import BarLoader from "react-spinners/BarLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

function Loader() {
  return (
    <Html>
      <BarLoader color="#4bffa5" cssOverride={override} size={150} />
    </Html>
  );
}

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 650) {
      Router.push("https://fifth-design.vercel.app/");
    }
    setScreenWidth(window.innerWidth);
  }, []);

  return !screenWidth ? null : screenWidth > 640 ? (
    <>
      <Head>
        <title>Farhad Faraji - Full-Stack Web Developer</title>
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React, Next.js, MongoDB, MERN, Expressjs , Nodejs"
        ></meta>
        <meta name="author" content="Farhad Faraji"></meta>
        <meta
          name="description"
          content="Farhad Faraji personal website, Front-end and Back-end web developer"
        ></meta>
      </Head>
      <Web />
    </>
  ) : null;
}

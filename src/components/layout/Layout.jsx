import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import Img from "../nano/Img";
import imgBg from "../../img/bg.webp";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="main" className="main">
        <Img
          src={imgBg}
          type="bg"
          styles={{ height: "120vh", backgroundSize: "cover" , top: "0"}}
        ></Img>
        {children}
      </main>
      <Footer />
    </>
  );
};

export function Head() {
  return (
    <link rel="shortcut icon" href="/src/img/favicon.png" type="image/x-icon" />
  );
}

export default Layout;

import React from "react";

import Img from "../nano/Img";

import imgLogo from "../../img/logo.webp";

const Header = () => {
  return (
    <header className="header" id="header">
      <Img src={imgLogo} css="logo" type="img" />
    </header>
  );
};

export default Header;

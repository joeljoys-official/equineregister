import React from "react";
import LogoIMG from "../../../Assets/Images/Logo.png";
const style = {
  img: {
    width: "auto",
    height: "100%",
    objectFit: "contain",
  },
};
const Logo = () => {
  return <img src={LogoIMG} alt="Equine Register" style={style.img} />;
};

export default Logo;

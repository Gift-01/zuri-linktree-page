import React from "react";
import Zuri from "../assets/Zuri.Internship_Logo.svg";
import { ReactComponent as Zuri2 } from "../assets/Vector2.svg";
import Footertext from "../assets/Footer text.svg";
import { ReactComponent as FooterText2 } from "../assets/Footer2.svg";
import I4G from "../assets/I4G.svg";
import { ReactComponent as I4G2 } from "../assets/I4G2.svg";
import "../HomePage.css";

export default function Footer() {
  return (
    <>
      <div className="innerFooter">
        <div className="line"></div>
        <div className="innerFooter-icons">
          <img src={Zuri} alt="text" />
          <img src={Footertext} alt="text" />
          <img src={I4G} alt="I4GLogo" />
        </div>
      </div>
      <div className="mobileInnerFooter">
        <Zuri2 />
        <FooterText2 />
        <I4G2 />
      </div>
    </>
  );
}

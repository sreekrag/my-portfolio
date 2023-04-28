import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey I'm</h5>
        <Typewriter
          options={{
            strings: ["Sreerag"],
            autoStart: true,
            loop: true,
          }}
        />
        <h5 className="text-light">FullStack Developer </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
        <img className="myImg" src={ME} alt="me"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

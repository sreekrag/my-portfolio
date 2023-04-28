import React from "react";
import "./experience.css";
import {ImHtmlFive} from "react-icons/im";
import {DiCss3,DiBootstrap,DiReact,DiAngularSimple,DiJava,DiPython,DiNodejsSmall,DiSqllite} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import {SiSpring,SiDjango,SiMongodb,SiMysql,SiGit,SiFirebase} from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImHtmlFive className="experience__details-icon"/>
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon"/>
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon"/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <DiBootstrap className="experience__details-icon"/>
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon"/>
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <DiAngularSimple className="experience__details-icon"/>
              <h4>Angular</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiJava className="experience__details-icon"/>
              <h4>Java</h4>
            </article>
            <article className="experience__details">
              <SiSpring className="experience__details-icon"/>
              <h4>Spring</h4>
            </article>
            <article className="experience__details">
              <DiNodejsSmall className="experience__details-icon"/>
              <h4>NodeJS</h4>
            </article>
            <article className="experience__details">
              <DiPython className="experience__details-icon"/>
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <SiDjango className="experience__details-icon"/>
              <h4>Django</h4>
            </article>
          </div>
        </div>
        <div className="experience__other">
          <h3>Other</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiMongodb className="experience__details-icon"/>
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon"/>
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <DiSqllite className="experience__details-icon"/>
              <h4>SQlite</h4>
            </article>
            <article className="experience__details">
              <SiGit className="experience__details-icon"/>
              <h4>GIT</h4>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon"/>
              <h4>FireBase</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from "react";
import "./about.css";
import ME from "../../assets/sree.png";
import { FaAward } from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img classname="meImg" src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                Over a 3+ year with startups and multinationals, I developed
                skills in app development, analysis, and team management
              </small>
            </article>
            <article className="about__card">
              <HiBookOpen className="about__icon" />
              <h5>Education</h5>
              <small>
                I hold a Post Graduate Diploma in Computer Software and Database
                Development and a Bachelor's degree in Computer Science
                Engineering
              </small>
            </article>
          </div>
          <p>
            As a passionate full stack developer, I excel in development,
            testing, and documentation with over 3 years' experience in app
            development, analysis, and programming. In my free time, I enjoy
            traveling and cooking.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

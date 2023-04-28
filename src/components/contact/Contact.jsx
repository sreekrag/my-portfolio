import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";

const Contact = () => {
 const form=useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_4eiwcd6', 'template_djoc0mw', form.current, 'E7QcI5kuQe20K1ECQ')
    // .then((result) => {
    //   alert("Email send")
    // }, (error) => {
    //   alert("Email send failed")
    // });
    e.target.reset();
};


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ksreek123@gmail.com</h5>
            <a href="mailto:ksreek123@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <MdWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+16476175997</h5>
            <a href="https://wa.me/16476175997">Send a message</a>
          </article>
        </div>
        {/* Form  */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

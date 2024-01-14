import React from "react";
import jade1Img from "../assets/jade1.jpg";
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact-container" id="contacts">
      {/* Contact info */}
      <div className="contact-info">
        <h2>Contact Us.</h2>
        <p>
          For more Info. Please Contact Me my phone number is:
          <span>0981 711 1980</span> or email: <span>angeljade.anoba@sccpag.edu.ph</span>
        </p>
        {/* forms */}
        <form>
            <input type="text" name="name" id="name"  placeholder="Your name" required/>
            <input type="email" name="email" id="email"  placeholder="Your email" required/>
            <input type="text" name="subject" id="subject"  placeholder="Your subject"/>
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Type Your message"></textarea>
            <button className="btn">Submit</button>
        </form>
      </div>
      {/* image */}
      <div className="contact-img">
        <img src={jade1Img} alt="jade1" />
      </div>
    </div>
  );
};

export default Contact;

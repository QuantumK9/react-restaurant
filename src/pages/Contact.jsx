import React from "react";
import Slider from "../components/Slider/Slider";

export default function Order() {
  return (
    <div className="wrapper">
      <Slider />
      <h2 className="contact-header">Contact Us</h2>
      <div className="contact-wrapper">
        <div className="left-section">
          <ContactInfo />
        </div>
        <div className="right-section">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

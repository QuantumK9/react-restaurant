import React from "react";
import "./ContactInfo.css";

export default function ContactInfo() {
  return (
    <div className="contact-info-wrapper">
      <h3 className="contact-info-header">Email</h3>
      <p className="contact-info-text">info@reactrestaurant.com</p>
      <h3 className="contact-info-header">Address</h3>
      <p className="contact-info-text">1234 Street Name, London, UK</p>
      <h3 className="contact-info-header">Phone</h3>
      <p className="contact-info-text">+4412345678</p>
    </div>
  );
}

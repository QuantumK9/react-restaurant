import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactForm.css";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <h2 id="contact-form-header">Contact Form</h2>
        <p id="contact-form-message">
          Leave us your message and will get back to you.
        </p>
        <label>First Name</label>
        <input {...register("firstName")} placeholder="First name" />
        <label>Last Name</label>
        <input {...register("lastName")} placeholder="Last name" />
        <label>Message:</label>
        <textarea {...register("message")} placeholder="Your message..." />
        <p>{data}</p>
        <input type="submit" />
      </form>
    </div>
  );
}

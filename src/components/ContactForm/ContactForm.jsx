import React from "react";
import "./ContactForm.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
    e.preventDefault();
  };
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, message } = this.state;
    return (
      <form
        name="contact"
        netlify-honeypot="bot-field"
        data-netlify="true"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <h2 id="contact-form-header">Contact Form</h2>
        <p id="contact-form-message">
          Leave us your message and will get back to you.
        </p>

        <label>
          Your Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Your Email:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Message:{" "}
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
          />
        </label>

        <p>
          <button type="submit">Submit</button>
        </p>
      </form>
    );
  }
}

export default ContactForm;

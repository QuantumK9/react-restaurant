import React from "react";
import Slider from "../components/Slider/Slider";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactForm from "../components/ContactForm/ContactForm";
import "./Contact.css";
import { Segment, Container } from "semantic-ui-react";

export default function Order() {
  return (
    <div className="wrapper">
      {/* <Slider /> */}
      <Segment
        basic
        style={{ fontFamily: "Glook", color: "#EFCD77" }}
        className="contact-hero"
      >
        <Container>
          <h1
            className="one column stackable ui grid centered"
            style={{ fontFamily: "Corinthia", fontSize: "4rem" }}
          >
            Contact Us
          </h1>
          <h2
            className="one column stackable ui grid centered"
            style={{ fontFamily: "Corinthia" }}
          ></h2>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Container>
            <h3 className="one column stackable ui grid centered"> </h3>
            <br />
            <br />
          </Container>
          <div className="one column stackable ui grid">
            <div className="row">
              <div>
                <div
                  className="six wide computer column centered"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h2
                    className="one column stackable ui grid centered"
                    style={{ fontFamily: "Corinthia", fontSize: "3rem" }}
                  >
                    We'd love to hear from you !
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <br />
      </Segment>
      <div className="info-form-wrapper">
        <div className="contact-wrapper">
          <div className="left-section">
            <ContactInfo />
          </div>
          <div className="right-section">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

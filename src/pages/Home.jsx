import React from "react";
import { Link } from 'react-router-dom';
import Sliderpage from '../../src/components/Slider/Slider';
import { Segment, Container } from 'semantic-ui-react';
import Pagemenu from '../container/Menus/BestMenu'



export default function Home() {
  return (
    <div>
      <Segment basic style={{ fontFamily: "Glook", color: "#EFCD77" }}>
        <Container>
          <h1
            className="one column stackable ui grid centered"
            style={{ fontFamily: "Corinthia" }}
          >
            <b>
              <u>Nonna's</u>
            </b>
          </h1>
          <h2
            className="one column stackable ui grid centered"
            style={{ fontFamily: "Corinthia" }}
          >
            Mediterranean Bistro
          </h2>
          <br />
          <br />
          <Container>
            <h3 className="one column stackable ui grid centered">
              {" "}
              Welcome to Nonna's Bistro - your one-stop-shop for all things
              delicious and Mediterranean! Our family-owned and operated
              takeaway serves up mouthwatering dishes that are sure to satisfy
              your cravings
            </h3>
            <br />
            <br />
          </Container>
          <div className="one column stackable ui grid">
            <div className="row">
              <div>
                <div
                  className="six wide computer column centered"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a style={{ position: "relative", zIndex: "1" }} href="#about">
                    <button class="ui inverted yellow button">
                      Explore More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <br />
      </Segment>
      <div>
        <div
          className="ui grid"
          style={{ color: "white", backgroundColor: "#5A1B0E" }}
        >
          <div className="one column stackable ui grid centered">
            <div className="ui divider"></div>
            <div className="sixteen wide column">
              <Container>
                <h1 id="about"
                  className="one column stackable ui grid centered"
                  style={{ fontFamily: "Corinthia" }}
                >
                  {" "}
                  About
                </h1>
                <h3 className="one column stackable ui grid centered">
                  {" "}
                  Nonna's Mediterranean Bistro - we are a family-run business
                  that prides itself on delivering authentic Mediterranean
                  cuisine using fresh and high-quality ingredients. Our recipes
                  have been passed down from generations and are rooted in the
                  traditions of the Mediterranean.
                </h3>
              </Container>
              <br />
            </div>
            <div className="ui divider"></div>
            <Container>
              <Sliderpage />
            </Container>
          </div>
        </div>
        <div></div>
      </div>
      <div
        className="ui grid"
        style={{ color: "white", backgroundColor: "#5A1B0E" }}
      >
        <div className="one column stackable ui grid centered">
          <div className="sixteen wide column">
            <Container>
              <h1
                className="one column stackable ui grid centered"
                style={{ fontFamily: "Corinthia" }}
              >
                To know more ...
              </h1>
              <div
                className="ui one column stackable ui grid centered"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to="/Menu"><button className="ui inverted yellow button">
                  Nonna's Menu
                </button></Link>
                <Link to="Contact"><button className="ui inverted yellow button">
                  Book Table
                </button></Link>
              </div>
            </Container>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

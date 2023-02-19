import React from "react";
import Sliderpage from "../components/Slider/Slider.js";
import { Segment, Container, Image } from "semantic-ui-react";
export default function Home() {
  return (
    <div>
      {/* <Segment basic style={{ fontFamily: 'Gloock'}}>
       <h1 class="one column stackable ui grid centered huge header" style={{ fontFamily: 'Corinthia' }}><u>Nonna's</u></h1>
        <h2 class="one column stackable ui grid centered">Mediterranean Bistro</h2>
        <h3 class="one column stackable ui grid centered">Welcome to Nonnas Bistro -  your one-stop-shop for all things delicious and Mediterranean! Our family-owned and operated takeaway serves up mouthwatering dishes that are sure to satisfy your cravings</h3>
        <button class="ui inverted teal basic button">Explore More</button>
       
          <div class="two column stackable ui grid">
            <div class="row">
              <img src={Top} style={{ display: 'flex', position: 'relative', width: '100%' ,opacity: '90%', zIndex: '0', justifyContent: 'center'}}/>
           
            </div>
          </div>
          <div className="ui diver"></div>
          <Container text>
          <div class="six wide computer column" style={{ fontFamily: 'Gloock' }}>
            <p>Nonna's Mediterranean Bistro - we are a family-run business that prides itself on delivering authentic Mediterranean cuisine using fresh and high-quality ingredients. Our recipes have been       passed down from generations and are rooted in the traditions of the Mediterranean.
            </p>
          </div>
          
        </Container>
        </Segment> */}
      <Segment basic style={{ fontFamily: "Glook", color: "#FFF979" }}>
        <Container>
          <h1
            class="one column stackable ui grid centered"
            style={{ fontFamily: "Corinthia" }}
          >
            <b>
              <u>Nonna</u>
            </b>
          </h1>
          <h2
            class="one column stackable ui grid centered"
            style={{ fontFamily: "Corinthia" }}
          >
            Mediterranean Bistro
          </h2>
          <br />
          <br />
          <Container>
            <h3 class="one column stackable ui grid centered">
              {" "}
              Welcome to Nonnas Bistro - your one-stop-shop for all things
              delicious and Mediterranean! Our family-owned and operated
              takeaway serves up mouthwatering dishes that are sure to satisfy
              your cravings
            </h3>
            <br />
            <br />
          </Container>
          <div class="one column stackable ui grid">
            <div class="row">
              <div>
                <div
                  class="six wide computer column centered"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a style={{ position: "relative", zIndex: "1" }} href="#">
                    <button class="ui yellow  basic button">
                      Explore More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ui divider"></div>
          <div class="one column stackable ui grid centered">
            <h1 style={{ fontFamily: "Corinthia" }}> About</h1>
            <h3>
              {" "}
              Nonna's Mediterranean Bistro - we are a family-run business that
              prides itself on delivering authentic Mediterranean cuisine using
              fresh and high-quality ingredients. Our recipes have been passed
              down from generations and are rooted in the traditions of the
              Mediterranean.
            </h3>
            <idv></idv>
          </div>
        </Container>
      </Segment>
      <div>
        <Sliderpage />
        <br /> <br />
      </div>
      <div
        class="ui one column stackable ui grid centered"
        style={{ marginTop: "100" }}
      >
        <button class="ui basic yellow button">Nonnas' Menu</button>
        <button class="ui basic yellow button">Book Table</button>
      </div>
      <div className="ui divider"></div>
    </div>
  );
}

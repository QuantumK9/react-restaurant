import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./nav.css";
import { Link } from "react-router-dom";
import image from "../../assets/nonna-logo-light.png";

function MyNav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="space ">
      <div className="space-logo">
        <img src={image} alt="logo" />
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" />
      <Navbar.Collapse classeName="pages">
        <Nav className="ml-auto clear">
          <Link></Link>
          <Link to="/">
            <Nav.Link
              className="nav-link"
              style={{ color: "white", listStyle: "none", fontSize: "10 rem" , display:'flex', justifyContent:'center', maxWidth:'100rem'}}
              as="div"
            >
              Home{" "}
            </Nav.Link>
          </Link>
          <Link to="/menus">
            <Nav.Link className="nav-link" style={{ color: "white" , display:'flex', justifyContent:'center'}} as="div">
              Menu
            </Nav.Link>
          </Link>
          <Link to="/Contact">
            <Nav.Link className="ui yellow button medium  nav-link" as="div" style={{display:'flex', justifyContent:'center'}}>
              Contact us
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNav;

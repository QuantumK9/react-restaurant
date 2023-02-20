import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import "./nav.css";
import { Link } from 'react-router-dom';
import image from '../../assets/image.png'

function MyNav() {
    return (

        <Navbar collapseOnSelect expand="lg"  className="space">
            <div className='space-logo'>
                
                <img src ={image} alt="logo"/>
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse classeName ='pages'>
                <Nav className="ml-auto clear">
                    <Link></Link>
                    <Link to="/home"><Nav.Link  style={{ color: "white", listStyle:'none' }} as="div">Home </Nav.Link></Link>
                    <Link to="/menu"><Nav.Link style={{ color: "white" }} as="div">Menu</Nav.Link></Link>
                    <Link to="/order now"><Nav.Link className="ui yellow button small"style={{ fontFamily:'roboto' }} as="div">Order Now</Nav.Link></Link> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNav;
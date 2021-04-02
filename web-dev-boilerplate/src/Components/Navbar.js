import React, { useState } from "react";
import "../App.css";
import * as ReactBootStrap from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Navbar = () => {
  return (
    <ReactBootStrap.Navbar bg="dark" variant="dark" expand="lg">
      <ReactBootStrap.Navbar.Brand href="#home">
        My Website
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <Link to="/Home"><ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link></Link>
          <Link to="/Search"><ReactBootStrap.Nav.Link href="#link">Pokemon Search</ReactBootStrap.Nav.Link></Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
};

export default Navbar;

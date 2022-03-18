import React from "react";
import "../Components/navbar.css"
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function myNavbar() {
  return (
    <Navbar style={{ backgroundColor: "skyblue" }} variant="light" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">Twitter</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink}
              to="/posts"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Post
          </Nav.Link>
          <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Us
            </Nav.Link>
          <Nav.Link as={NavLink}
              to="/count"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Count
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default myNavbar;

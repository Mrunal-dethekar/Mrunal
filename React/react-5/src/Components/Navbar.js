import React from "react";
import "../Components/navbar.css"
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function myNavbar() {
  return (
    <Navbar style={{ backgroundColor: "skyblue" }} variant="light" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/landingpage">Twitter</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink}
              to="/posts"
              style={{ textDecoration: "none", color: "inherit" }}
              className={({ isActive }) => (isActive ? "active" : "")}>
              Post
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default myNavbar;

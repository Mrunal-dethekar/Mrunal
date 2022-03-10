import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function myNavbar() {
  return (
    <Navbar style={{ backgroundColor: "skyblue" }} variant="light" sticky="top">
      <Container>
        <Navbar.Brand>Twitter</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/landingpage" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/posts"
              style={{ textDecoration: "none", color: "inherit" }}>
              Post
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default myNavbar;

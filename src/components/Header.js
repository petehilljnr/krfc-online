import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/demon.png";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          style={{
            verticalAlign: "center",
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "2rem",
            color: "#184C92",
            textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
          }}
        >
          <img
            alt=""
            src={logo}
            height="50"
            className="d-inline-block align-center"
          />
          {'  '}
          Bucklands Folly
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/teams">
              Teams
            </Nav.Link>
            <Nav.Link as={Link} to="/draws">
              Draws
            </Nav.Link>
            <Nav.Link as={Link} to="/results">
              Results
            </Nav.Link>
            <Nav.Link as={Link} to="/programme">
              Generate Programme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/demon.png";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          style={{
            verticalAlign: "center",
            fontFamily: "'Permanent Marker', cursive",
            fontSize: "calc(18px + 1vw)",
            color: "#184C92",
            textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white"
          }}
        >
          <img
            alt=""
            src={logo}
            width="50"
            className="d-inline-block align-center"
          />
          {'  '}
          Demon Handbook
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} eventKey={1} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} eventKey={2}to="/teams">
              Teams
            </Nav.Link>
            <Nav.Link as={Link} eventKey={3} to="/draws">
              Draws
            </Nav.Link>
            <Nav.Link as={Link} eventKey={4} to="/results">
              Results
            </Nav.Link>
            <Nav.Link as={Link} eventKey={5} to="/programme">
              Generate Programme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

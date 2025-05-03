import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="md" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" height="45" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
                <i class="fa-solid fa-house"></i> Home
            </Nav.Link>
            <Nav.Link>
                <i class="fa-solid fa-arrow-right-to-bracket"></i> SignIn
            </Nav.Link>
            <Nav.Link>
                <i class="fa-solid fa-user-plus"></i> SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

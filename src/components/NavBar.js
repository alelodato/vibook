import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
        <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
        </Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to='/' >
                <i class="fa-solid fa-house"></i> Home
            </NavLink>
            <NavLink to='/signin' >
                <i class="fa-solid fa-arrow-right-to-bracket"></i> SignIn
            </NavLink>
            <NavLink to='/signup' >
                <i class="fa-solid fa-user-plus"></i> SignUp
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

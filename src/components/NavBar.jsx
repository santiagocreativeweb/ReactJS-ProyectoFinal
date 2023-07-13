import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">
            <img
              src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/222/768/themes/common/logo-1228662973-1617249357-67cc9fa88809f092671a17af84eafc001617249357-480-0.png?0"
              width="250"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/category/celulares">Celulares</Nav.Link>
            <Nav.Link href="/category/computadoras">Computadoras</Nav.Link>
            <Nav.Link href="/category/accesorios">Accesorios</Nav.Link>
            <Nav.Link href="/category/servicios">Servicios</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

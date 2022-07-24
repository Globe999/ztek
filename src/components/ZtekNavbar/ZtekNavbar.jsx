import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import './ZtekNavbar.css'
import mediumLogo from '../../media/logo_liten.png';
//Stateless Functional Component
const ZtekNavbar = () => {

  return (
    <Navbar fixed="top" expand="lg" bg="grey" collapseOnSelect="true" sticky="top" className="ztekNavbar mx-0">
    <Container className="mx-0">
      <Navbar.Brand href="/">
        <img className='navbarLogo' src={mediumLogo}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navText">
          <LinkContainer to="/about">
            <Nav.Link>Om Z</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/documents">
            <Nav.Link>Dokument</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/zaloonen">
            <Nav.Link>Zaloonen</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/committees">
            <Nav.Link>Sektionsorgan</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/samo">
            <Nav.Link>SAMO</Nav.Link>
          </LinkContainer>
            <Nav.Link  href="https://znollk.se/">Ny student</Nav.Link>
          <LinkContainer to="/companies">
            <Nav.Link>Företag</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default ZtekNavbar;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link , Outlet} from 'react-router-dom';


// This example was studied from:
// https://react-bootstrap.netlify.app/docs/components/navbar/

function NavBar() 
{
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to= "" as={Link}>NASA-API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="" as ={Link}>Home</Nav.Link>
            <Nav.Link to="form" as ={Link}>Form</Nav.Link>
            <Nav.Link to="usage" as ={Link}>Help</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.google.com">Source Code</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com">Youtube</NavDropdown.Item>

              <NavDropdown.Item href="https://www.wikipedia.org">Wikipedia</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://apod.nasa.gov/apod/">
                NASA APOD
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
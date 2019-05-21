// @flow
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import React from 'react';

function NavigationBar(props) {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Cordeso XYZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Technology</Nav.Link>
            <Nav.Link onClick={()=>props.toggleSB()}>SB</Nav.Link>
            <NavDropdown title="Social" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://instagram.com/cordesoapp" target="_blank" >Instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/Cordeso/" target="_blank" >Facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://twitter.com/cordeso" target="_blank" >Twitter</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/devonyu/cordeso" target="_blank" >Github</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Header() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="element-transfer">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="element-transfer">Element-Transfer</Nav.Link>
            <Nav.Link href="nestedlist">nestedList</Nav.Link>
            <Nav.Link href="infinate-scroll">Infinate-Scroll</Nav.Link>
            <Nav.Link href="hitgame">Hit-Game</Nav.Link>
            <Nav.Link href="splitbox">Splitbox</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header
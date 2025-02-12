import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from './logo.png'
const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <Navbar className="shadow" expand="lg">
      <Container>
        <Navbar.Brand className="brand-name" href="#home">
          <img src={logo}  height="40" className="me-2" />
          Sunrise Events
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setShow(!show)} />
        <Navbar.Collapse in={show}>
          <Nav className="ms-auto" onClick={() => setShow(false)}>
            <Nav.Link href="#gallery">Gallery</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#booking">Booking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
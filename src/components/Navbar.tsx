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
            <Nav.Link href="#gallery" className="nav-link-custom">Gallery</Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            <Nav.Link href="#booking" className="nav-link-custom">Booking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
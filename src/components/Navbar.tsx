// src/components/Navbar.tsx
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from './logo.png';

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  // Function to handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar className="shadow" expand="lg">
      <Container>
        <Navbar.Brand className="brand-name" href="/">
          <img src={logo} height="40" className="me-2" alt="Sunrise Events Logo" />
          Sunrise Events
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setShow(!show)} />
        <Navbar.Collapse in={show}>
          <Nav className="ms-auto" onClick={() => setShow(false)}>
            <Nav.Link onClick={() => scrollToSection("gallery")}>Gallery</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("services")}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")}>Contact</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("booking")}>Booking</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;

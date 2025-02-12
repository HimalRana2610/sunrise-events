// src/components/Contact.tsx
// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          <Col md={6}>
            <h4>Phone</h4>
            <p>+91 9887829699</p>
            <h4>Gmail</h4>
            <p><a href="mailto:info@sunrise-events.com">info@sunrise-events.com</a></p>
            <h4>Instagram</h4>
            <p><a href="https://www.instagram.com/sunriseevents.in?igsh=MTJuZXdoMnVvcGNxZw==">@sunriseevents</a></p>
            <h4>Location</h4>
            <p>Sunrise Events <br /> Black Bunny Campus<br /> Beside High Field Ascot Mall Building<br /> VIP Road, opp. Palm Avenue<br />
Surat, Gujarat - 395 007</p>
          </Col>
          <Col md={6}>
            <h4>Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Your Message" rows={4}></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
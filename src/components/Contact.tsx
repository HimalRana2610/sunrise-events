// src/components/Contact.tsx
// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          <Col md={6}>
            <h4>Phone</h4>
            <p>+1 234 567 890</p>
            <h4>Email</h4>
            <p>info@sunrise-events.com</p>
            <h4>Instagram</h4>
            <p>@sunriseevents</p>
            <h4>Location</h4>
            <p>123 Event Street, City, Country</p>
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

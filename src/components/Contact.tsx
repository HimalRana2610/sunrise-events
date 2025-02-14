// src/components/Contact.tsx
// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
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
        {/* Updated Google Map Section */}
        <Row className="justify-content-center mt-5">
          <Col md={12} className="text-center">
            <h3>Our Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14677.719168715634!2d72.78690515!3d21.17024005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7a5f9bfa6f%3A0x8fcb7f6a7d1a33ff!2sBlack%20Bunny%20Campus%2C%20Beside%20High%20Field%20Ascot%20Mall%20Building%2C%20VIP%20Road%2C%20opp.%20Palm%20Avenue%2C%20Surat%2C%20Gujarat%20-%20395%20007!5e0!3m2!1sen!2sin!4v1707894567890!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="map-icon">
                <a 
                  href="https://www.google.com/maps?q=Black+Bunny+Campus,+Beside+High+Field+Ascot+Mall+Building,+VIP+Road,+opp.+Palm+Avenue,+Surat,+Gujarat+-+395007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt size={40} color="red" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
// src/components/Contact.tsx
// import React from 'react';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setStatusMessage("Contact form submitted successfully!");
        setContactData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatusMessage("Error submitting contact form.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Error submitting contact form.");
    }
  };
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Us</h2>
        <Row>
          <Col width="30%">
            <h4>Phone</h4>
            <p>+91 9887829699</p>
            <h4>Gmail</h4>
            <p>
              <a href="mailto:info@sunrise-events.com">
                info@sunrise-events.com
              </a>
            </p>
            <h4>Instagram</h4>
            <p>
              <a href="https://www.instagram.com/sunriseevents.in?igsh=MTJuZXdoMnVvcGNxZw==">
                @sunriseevents
              </a>
            </p>
            <h4>Location</h4>
            <p>
              Sunrise Events <br /> Black Bunny Campus
              <br /> Beside High Field Ascot Mall Building
              <br /> VIP Road, opp. Palm Avenue
              <br />
              Surat, Gujarat - 395 007
            </p>
          </Col>
          <Col md={6}>
            <h4>Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={contactData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Your Message"
                  rows={4}
                  value={contactData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
            {statusMessage && <p>{statusMessage}</p>}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <h3>Our Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3005623175327!2d72.77040767430935!3d21.14043378393545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05362b26e0b2b%3A0x184d69514dbd8923!2sSunrise%20Craft%20%26%20Decor!5e0!3m2!1sen!2sin!4v1739611777058!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="map-icon">
                <a
                  href="https://maps.app.goo.gl/rGLcDfNeZEZY8Dgt9"
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

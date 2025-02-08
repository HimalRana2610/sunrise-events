// src/components/Services.tsx
// import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

const Services = () => {
  return (
    <section id="services" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Wedding Decoration</Card.Title>
                <Card.Text>Elegant and beautiful wedding decorations for your special day.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Reception Setup</Card.Title>
                <Card.Text>Professional setup for your reception, tailored to your theme.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Sangeet Decoration</Card.Title>
                <Card.Text>Colorful and festive decorations for your Sangeet ceremony.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Haldi Decoration</Card.Title>
                <Card.Text>Traditional Haldi ceremony decor to add to the spirit of the occasion.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Rental Furniture</Card.Title>
                <Card.Text>Rent stylish furniture and accessories for all types of events.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Sitting Arrangements</Card.Title>
                <Card.Text>Comfortable and beautiful seating arrangements for your guests.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

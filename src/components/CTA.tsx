// src/components/CTA.tsx
// import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CTA = () => {
  return (
    <section className="py-5 bg-primary text-white text-center">
      <Container>
        <h2>Ready to Create Unforgettable Moments?</h2>
        <p>Contact us today to start planning your event!</p>
        <Button href="#contact" variant="light" size="lg">Get in Touch</Button>
      </Container>
    </section>
  );
};

export default CTA;

// src/components/CTA.tsx
import { Container, Button } from 'react-bootstrap';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <Container>
        <h2 className="cta-heading">Ready to Create Unforgettable Moments?</h2>
        <p className="cta-text">Contact us today to start planning your event!</p>
        <Button href="#contact" className="cta-button" size="lg">
          Get in Touch
        </Button>
      </Container>
    </section>
  );
};

export default CTA;
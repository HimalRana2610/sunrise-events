// src/components/FAQs.tsx
import './FAQs.css';
import { Accordion, Container } from 'react-bootstrap';

const FAQs = () => {
  return (
    <section id="faqs" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What services do you offer?</Accordion.Header>
            <Accordion.Body>
              We provide decoration, furniture rentals, and seating arrangements for weddings, receptions, and other events.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I customize my event decoration?</Accordion.Header>
            <Accordion.Body>
              Yes! We tailor decorations according to your theme and preferences.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Do you offer rental furniture?</Accordion.Header>
            <Accordion.Body>
              Absolutely! We have a wide variety of stylish furniture and accessories available for rent.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQs;

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
            <Accordion.Header>What types of events do you specialize in?</Accordion.Header>
            <Accordion.Body>
              We specialize in organizing weddings, mehndi ceremonies, haldi functions, birthday parties, corporate events, anniversaries, and more.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What services do you offer for these events?</Accordion.Header>
            <Accordion.Body>
              We offer event planning, venue selection, decorations, catering, entertainment, photography, videography, transportation, and complete event coordination.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can we customize the event according to our preferences?</Accordion.Header>
            <Accordion.Body>
              Yes! We work with you to tailor every detail of the event to match your specific theme, colors, style, and preferences.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>How early should we book your services?</Accordion.Header>
            <Accordion.Body>
              We recommend booking at least 6-12 months in advance, especially for larger events such as weddings, to ensure availability.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Do you assist with venue selection?</Accordion.Header>
            <Accordion.Body>
              Yes! We have a wide network of venues to choose from and can recommend locations based on your event's size, theme, and budget.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>What is your pricing structure?</Accordion.Header>
            <Accordion.Body>
              Our pricing is flexible and depends on the scale of the event, the services you choose, and your budget. We offer customized packages for every client.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Can you handle last-minute changes?</Accordion.Header>
            <Accordion.Body>
              Yes, our team is prepared to handle last-minute changes or emergencies to ensure your event runs smoothly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Do you provide on-the-day event coordination?</Accordion.Header>
            <Accordion.Body>
              Yes, we offer on-the-day coordination to ensure that every detail is executed as planned, allowing you to enjoy the day stress-free.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Can you assist with vendor selection?</Accordion.Header>
            <Accordion.Body>
              We have a list of trusted vendors for photography, catering, entertainment, and more. We will help you choose and manage them.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>Do you offer destination event planning?</Accordion.Header>
            <Accordion.Body>
              Yes, we specialize in destination events and will manage all logistics, travel, accommodation, and local vendor coordination for you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>How do I start planning my event with you?</Accordion.Header>
            <Accordion.Body>
              You can begin by contacting us for a consultation, where we’ll discuss your needs, budget, and vision for the event.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="11">
            <Accordion.Header>What safety measures do you implement during events?</Accordion.Header>
            <Accordion.Body>
              We follow all local health and safety regulations, including sanitation measures, emergency plans, and crowd control protocols for a safe event.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="12">
            <Accordion.Header>Can I get a refund if I need to cancel my event?</Accordion.Header>
            <Accordion.Body>
              Our refund policy depends on the specific terms of the contract. Please contact us for more information on cancellation and refund options.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="13">
            <Accordion.Header>What happens if there is bad weather for an outdoor event?</Accordion.Header>
            <Accordion.Body>
              We provide backup plans, including tent rentals or shifting to an indoor venue, to ensure your event runs smoothly, no matter the weather.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="14">
            <Accordion.Header>Do you offer event decor and theme design?</Accordion.Header>
            <Accordion.Body>
              Yes, we specialize in designing beautiful event themes, from traditional to contemporary, and provide complete decoration services tailored to your event.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default FAQs;

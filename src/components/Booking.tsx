// src/components/Booking.tsx
// import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Booking = () => {
  return (
    <section id="booking" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Book Your Event</h2>
        <p className="text-center">Choose your event date and book a consultation with us!</p>
        <div className="d-flex justify-content-center">
          <Button variant="primary" size="lg">Book Now</Button>
        </div>
      </Container>
    </section>
  );
};

export default Booking;

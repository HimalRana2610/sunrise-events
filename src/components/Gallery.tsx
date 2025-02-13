// src/components/Gallery.tsx
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import punyashBirthday from '../assets/Sunrise events/punyash-birthday.jpg';
import event1 from '../assets/Sunrise events/Event1.jpg';
import event2 from '../assets/Sunrise events/Event2.jpg';
import './Carousel.css';

const Gallery = () => {
  return (
    <section className='gallery'>
      <Container className='carousel'>
        <h2 className="text-center mb-4">Event Gallery</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={punyashBirthday}
              alt="Event 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={event1}
              alt="Event 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={event2}
              alt="Event 3"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Gallery;

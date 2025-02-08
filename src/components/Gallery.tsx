// src/components/Gallery.tsx
// import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const Gallery = () => {
  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Event Gallery</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Event+1"
              alt="Event 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Event+2"
              alt="Event 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400?text=Event+3"
              alt="Event 3"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Gallery;

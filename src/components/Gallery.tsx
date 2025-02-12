// src/components/Gallery.tsx
// import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import logo from './logo.png'
import './Carousel.css'
const Gallery = () => {
  return (
    <section className='gallery'>
      <Container className='carousel'>
        <h2 className="text-center mb-4">Event Gallery</h2>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo}
              alt="Event 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo}
              alt="Event 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={logo}
              alt="Event 3"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Gallery;

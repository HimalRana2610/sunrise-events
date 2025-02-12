import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "The stunning decor exceeded my expectations. Highly recommended for elegant wedding decoration!",
    author: "Priya Sharma",
  },
  {
    id: 2,
    text: "As a corporate professional, I entrusted Eventplus for my product launch and conference management. Their seamless execution left a lasting impression.",
    author: "Rahul Mehta",
  },
  {
    id: 3,
    text: "Sunrise Events transformed my birthday into a grand celebration. Amazing experience and wonderful service!",
    author: "Aisha Khan",
  },
  {
    id: 4,
    text: "They provided excellent rental furniture and seating arrangements. Perfect for any event!",
    author: "Vikram Singh",
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials">
      <Container>
        <h2 className="text-center mb-4">Hear from trusted clients</h2>
        <Slider {...settings}>
          {testimonials.map((review) => (
            <div key={review.id} className="testimonial-card">
              <p className="testimonial-text">“{review.text}”</p>
              <h5 className="testimonial-author">- {review.author}</h5>
            </div>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

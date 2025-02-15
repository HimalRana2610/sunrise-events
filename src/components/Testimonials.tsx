import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "Empire Events is a fantastic service that offers top-notch event planning at a reasonable price. Their friendly representatives are always willing to go the extra mile to ensure that your event is perfect. I highly recommend Empire Events for anyone looking for a reliable and affordable event planning service.",
    author: "Mr. Arun Patel",
  },
  {
    id: 2,
    text: "I recently used Empire Events for a party and had a great experience. The representative was really friendly and helpful. They responded immediately to my inquiries and their prices were very reasonable. I would definitely recommend them!",
    author: "Gaurav Patel",
  },
  {
    id: 3,
    text: "Empire Events delivers excellent services with well-trained professionals. Their expertise and attention to detail ensure a flawless event from start to finish. With Empire Events, you can trust that your special occasion is in capable hands.",
    author: "Rajendra Kumar",
  },
  {
    id: 4,
    text: "Nice decoration at sunrise event book with vasim Bhai ... wonderful decoration & nice behaviour team sunrise event",
    author: "Divyesh",
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

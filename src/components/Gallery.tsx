// src/components/Gallery.tsx
import { Carousel, Container } from 'react-bootstrap';
import punyashBirthday from '../assets/Sunrise events/punyash-birthday.jpg';
import event1 from '../assets/Sunrise events/Event1.jpg';
import event2 from '../assets/Sunrise events/Event2.jpg';
import gitanshBirthday from '../assets/Sunrise events/gitansh-birthday.jpg';
import haavyaWonderland from '../assets/Sunrise events/haavya-wonderland.jpg';
import img20250212WA0031 from '../assets/Sunrise events/IMG-20250212-WA0031.jpg';
import img20250212WA0033 from '../assets/Sunrise events/IMG-20250212-WA0033.jpg';
import img20250212WA0034 from '../assets/Sunrise events/IMG-20250212-WA0034.jpg';
import img20250212WA0035 from '../assets/Sunrise events/IMG-20250212-WA0035.jpg';
import img20250212WA0036 from '../assets/Sunrise events/IMG-20250212-WA0036.jpg';
import img20250212WA0037 from '../assets/Sunrise events/IMG-20250212-WA0037.jpg';
import img20250212WA0038 from '../assets/Sunrise events/IMG-20250212-WA0038.jpg';
import img20250212WA0040 from '../assets/Sunrise events/IMG-20250212-WA0040.jpg';
import img20250212WA0042 from '../assets/Sunrise events/IMG-20250212-WA0042.jpg';
import img20250212WA0043 from '../assets/Sunrise events/IMG-20250212-WA0043.jpg';
import img20250212WA0044 from '../assets/Sunrise events/IMG-20250212-WA0044.jpg';
import img20250212WA0045 from '../assets/Sunrise events/IMG-20250212-WA0045.jpg';
import img20250212WA0046 from '../assets/Sunrise events/IMG-20250212-WA0046.jpg';
import img20250212WA0047 from '../assets/Sunrise events/IMG-20250212-WA0047.jpg';
import img20250212WA0048 from '../assets/Sunrise events/IMG-20250212-WA0048.jpg';
import img20250212WA0050 from '../assets/Sunrise events/IMG-20250212-WA0050.jpg';
import './Carousel.css';

const images = [
  { src: punyashBirthday, alt: 'Event 1' },
  { src: event1, alt: 'Event 2' },
  { src: event2, alt: 'Event 3' },
  { src: gitanshBirthday, alt: 'Event 4' },
  { src: haavyaWonderland, alt: 'Event 5' },
  { src: img20250212WA0031, alt: 'Event 6' },
  { src: img20250212WA0033, alt: 'Event 7' },
  { src: img20250212WA0034, alt: 'Event 8' },
  { src: img20250212WA0035, alt: 'Event 9' },
  { src: img20250212WA0036, alt: 'Event 10' },
  { src: img20250212WA0037, alt: 'Event 11' },
  { src: img20250212WA0038, alt: 'Event 12' },
  { src: img20250212WA0040, alt: 'Event 13' },
  { src: img20250212WA0042, alt: 'Event 14' },
  { src: img20250212WA0043, alt: 'Event 15' },
  { src: img20250212WA0044, alt: 'Event 16' },
  { src: img20250212WA0045, alt: 'Event 17' },
  { src: img20250212WA0046, alt: 'Event 18' },
  { src: img20250212WA0047, alt: 'Event 19' },
  { src: img20250212WA0048, alt: 'Event 20' },
  { src: img20250212WA0050, alt: 'Event 21' },
];

const Gallery = () => {
  return (
    <section id="gallery" className='gallery'>
      <Container className='carousel'>
        <h2 className="text-center mb-4">Event Gallery</h2>
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 carousel-image"
                src={image.src}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Gallery;

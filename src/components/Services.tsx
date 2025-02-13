import { Card, Col, Row, Container } from 'react-bootstrap';
import weddingImg from './logo.png';
import receptionImg from './logo.png';
import sangeetImg from './logo.png';
import haldiImg from './mehandi.png';
import furnitureImg from './logo.png';
import seatingImg from './logo.png';
import './Services.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="py-5">
      <Container fluid>
        <h2 className="text-center mb-4">Our Services</h2>

        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <Card className="service-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={weddingImg} className="zoom-img full-img" />
              </div>
              <Card.Body>
                <Card.Title>Wedding Decoration</Card.Title>
                <Card.Text>
                  Elegant and beautiful wedding decorations for your special day.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="service-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={receptionImg} className="zoom-img full-img" />
              </div>
              <Card.Body>
                <Card.Title>Reception Setup</Card.Title>
                <Card.Text>Professional setup for your reception, tailored to your theme.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <Card className="service-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={sangeetImg} className="zoom-img full-img" />
              </div>
              <Card.Body>
                <Card.Title>Sangeet Decoration</Card.Title>
                <Card.Text>Colorful and festive decorations for your Sangeet ceremony.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="service-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={haldiImg} className="zoom-img full-img circular-img" />
              </div>
              <Card.Body>
                <Card.Title>Haldi Decoration</Card.Title>
                <Card.Text>Traditional Haldi ceremony decor to add to the spirit of the occasion.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="service-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={furnitureImg} className="zoom-img full-img" />
              </div>
              <Card.Body>
                <Card.Title>Rental Furniture</Card.Title>
                <Card.Text>Rent stylish furniture and accessories for all types of events.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="service-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={seatingImg} className="zoom-img full-img" />
              </div>
              <Card.Body>
                <Card.Title>Sitting Arrangements</Card.Title>
                <Card.Text>Comfortable and beautiful seating arrangements for your guests.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Updated Google Map Section */}
        <Row className="justify-content-center mt-5">
          <Col md={12} className="text-center">
            <h3>Our Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14677.719168715634!2d72.78690515!3d21.17024005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f7a5f9bfa6f%3A0x8fcb7f6a7d1a33ff!2sBlack%20Bunny%20Campus%2C%20Beside%20High%20Field%20Ascot%20Mall%20Building%2C%20VIP%20Road%2C%20opp.%20Palm%20Avenue%2C%20Surat%2C%20Gujarat%20-%20395%20007!5e0!3m2!1sen!2sin!4v1707894567890!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="map-icon">
                <a 
                  href="https://www.google.com/maps?q=Black+Bunny+Campus,+Beside+High+Field+Ascot+Mall+Building,+VIP+Road,+opp.+Palm+Avenue,+Surat,+Gujarat+-+395007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt size={40} color="red" />
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Event Gallery Section */}
        <Row className="justify-content-center mt-5">
          <Col md={12} className="text-center">
            <h3>Event Gallery</h3>
            <div className="gallery-container">
              {/* Add your gallery content here */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

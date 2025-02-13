import { Card, Col, Row, Container } from 'react-bootstrap';
import weddingImg from './logo.png';
import receptionImg from './logo.png';
import sangeetImg from './logo.png';
import haldiImg from './mehandi.png'; // Updated import
import furnitureImg from './logo.png';
import seatingImg from './logo.png';
import './Services.css'
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the map marker icon

const Services = () => {
  return (
    <section id="services" className="py-5">
      <Container>
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
                <Card.Img variant="top" src={haldiImg} className="zoom-img full-img circular-img" /> {/* Updated image source */}
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

        {/* New Section for Google Map */}
        <Row className="justify-content-center mt-5">
          <Col md={12} className="text-center">
            <h3>Our Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086509474517!2d144.9630579153169!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b1e4b0b1b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611810190847!5m2!1sen!2sau"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="map-icon">
                <a href="https://www.google.com/maps?q=Federation+Square" target="_blank" rel="noopener noreferrer">
                  <FaMapMarkerAlt size={40} color="red" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

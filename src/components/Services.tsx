import { Card, Col, Row, Container } from 'react-bootstrap';
import weddingImg from './logo.png';
import receptionImg from './logo.png';
import sangeetImg from './logo.png';
import haldiImg from './logo.png';
import furnitureImg from './logo.png';
import seatingImg from './logo.png';
import './Services.css'

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
                <Card.Img variant="top" src={haldiImg} className="zoom-img full-img" />
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
      </Container>
    </section>
  );
};

export default Services;

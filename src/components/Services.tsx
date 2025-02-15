import { Card, Col, Row, Container } from 'react-bootstrap';
import weddingImg from './wedding.png';
import receptionImg from './reception.png';
import sangeetImg from './sangeet.png';
import haldiImg from './mehandi.png';
import furnitureImg from './furniture.png';
import seatingImg from './sitting.png';
import './Services.css';

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
                <Card.Text className='textcard'>
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
                <Card.Text className='textcard'>Professional setup for your reception, tailored to your theme.</Card.Text>
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
                <Card.Text className='textcard'>Colorful and festive decorations for your Sangeet ceremony.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="service-card">
              <div className="card-img-container">
                <Card.Img variant="top" src={haldiImg} className="zoom-img full-img circular-img " />
              </div>
              <Card.Body>
                <Card.Title>Haldi Decoration</Card.Title>
                <Card.Text className='textcard'>Traditional Haldi ceremony decor to add to the spirit of the occasion.</Card.Text>
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
                <Card.Text className='textcard'>Rent stylish furniture and accessories for all types of events.</Card.Text>
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
                <Card.Text className='textcard'>Comfortable and beautiful seating arrangements for your guests.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;

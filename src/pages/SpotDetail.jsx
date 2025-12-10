import { Container, Row, Col, Badge, Button, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { studySpots } from '../data/studySpots';
import RatingDisplay from '../components/RatingDisplay';
import NoiseLevelBadge from '../components/NoiseLevelBadge';
import ReviewCard from '../components/ReviewCard';
import Footer from '../components/Footer';
import AmenityBadge from '../components/AmenityBadge';
import InfoCard from '../components/InfoCard';

function SpotDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const spot = studySpots.find(s => s.id === parseInt(id));

  if (!spot) {
    return (
      <Container className="page-container text-center">
        <h1>Study Spot Not Found</h1>
        <p>The study spot you're looking for doesn't exist.</p>
        <Button variant="danger" onClick={() => navigate('/spots')}>
          Back to All Spots
        </Button>
      </Container>
    );
  }

  return (
    <div className="page-container">
      <main>
        <Container>
          <Button 
            variant="outline-secondary" 
            className="mb-3"
            onClick={() => navigate('/spots')}
          >
            ← Back to All Spots
          </Button>

          <header className="detail-header">
            <Row>
              <Col>
                <h1>{spot.name}</h1>
                <p className="lead text-muted">{spot.building}</p>
                <div className="mt-3">
                  <NoiseLevelBadge level={spot.noiseLevel} />
                  {spot.accessibility && (
                    <Badge bg="info" className="ms-2">
                      <span aria-hidden="true">♿</span> Accessible
                    </Badge>
                  )}
                </div>
              </Col>
            </Row>
          </header>

          <Row>
            <Col md={8}>
              <img 
                src={spot.image} 
                alt={`Interior view of ${spot.name} study area in ${spot.building}, showing the seating arrangement and study environment`}
                className="detail-image"
              />

              <Card className="mb-4">
                <Card.Body>
                  <h2>About This Location</h2>
                  <p>{spot.description}</p>
                </Card.Body>
              </Card>

              <Card className="mb-4">
                <Card.Body>
                  <h2>Reviews</h2>
                  <div className="mb-3">
                    <RatingDisplay rating={spot.rating} size="lg" />
                    <p className="text-muted mt-2">
                      Based on {spot.reviews.length} review{spot.reviews.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  {spot.reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                  ))}
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <InfoCard title="Amenities">
                <div className="amenities-list">
                  {spot.amenities.map((amenity, index) => (
                    <AmenityBadge key={index} amenity={amenity} />
                  ))}
                </div>
              </InfoCard>

              <InfoCard title="Peak Hours">
                <p className="mb-0">
                  <strong><span aria-hidden="true">⏰</span> {spot.peakHours}</strong>
                </p>
                <small className="text-muted">
                  Try visiting outside peak hours for less crowding
                </small>
              </InfoCard>

              <InfoCard title="Quick Info">
                <dl className="mb-0">
                  <div className="mb-2">
                    <dt className="d-inline">Noise Level: </dt>
                    <dd className="d-inline">{spot.noiseLevel.charAt(0).toUpperCase() + spot.noiseLevel.slice(1)}</dd>
                  </div>
                  <div className="mb-2">
                    <dt className="d-inline">Rating: </dt>
                    <dd className="d-inline">{spot.rating.toFixed(1)}/5.0</dd>
                  </div>
                  <div className="mb-2">
                    <dt className="d-inline">Accessible: </dt>
                    <dd className="d-inline">{spot.accessibility ? 'Yes' : 'No'}</dd>
                  </div>
                </dl>
              </InfoCard>

              <div className="d-grid gap-2">
                <Button variant="danger" size="lg">
                  <span aria-hidden="true">⭐</span> Bookmark This Spot
                </Button>
                <Button variant="outline-danger" size="lg">
                  <span aria-hidden="true">📝</span> Write a Review
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default SpotDetail;

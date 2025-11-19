import { Container, Row, Col, Badge, Button, Card } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { studySpots } from '../data/studySpots';
import RatingDisplay from '../components/RatingDisplay';

function SpotDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const spot = studySpots.find(s => s.id === parseInt(id));

  if (!spot) {
    return (
      <Container className="page-container text-center">
        <h2>Study Spot Not Found</h2>
        <Button variant="danger" onClick={() => navigate('/spots')}>
          Back to All Spots
        </Button>
      </Container>
    );
  }

  const getNoiseBadgeClass = (level) => {
    switch(level) {
      case 'quiet': return 'noise-quiet';
      case 'moderate': return 'noise-moderate';
      case 'lively': return 'noise-lively';
      default: return '';
    }
  };

  return (
    <div className="page-container">
      <Container>
        <Button 
          variant="outline-secondary" 
          className="mb-3"
          onClick={() => navigate('/spots')}
        >
          ← Back to All Spots
        </Button>

        <div className="detail-header">
          <Row>
            <Col>
              <h1>{spot.name}</h1>
              <h4 className="text-muted">{spot.building}</h4>
              <div className="mt-3">
                <Badge 
                  className={`noise-badge ${getNoiseBadgeClass(spot.noiseLevel)} me-2`}
                >
                  {spot.noiseLevel.charAt(0).toUpperCase() + spot.noiseLevel.slice(1)}
                </Badge>
                {spot.accessibility && (
                  <Badge bg="info">♿ Accessible</Badge>
                )}
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <Col md={8}>
            <img 
              src={spot.image} 
              alt={spot.name}
              className="detail-image"
            />

            <Card className="mb-4">
              <Card.Body>
                <h3>About This Location</h3>
                <p>{spot.description}</p>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h3>Reviews</h3>
                <div className="mb-3">
                  <RatingDisplay rating={spot.rating} size="lg" />
                  <p className="text-muted mt-2">
                    Based on {spot.reviews.length} review{spot.reviews.length !== 1 ? 's' : ''}
                  </p>
                </div>
                
                {spot.reviews.map((review, index) => (
                  <div key={index} className="review-card">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <strong>{review.user}</strong>
                      <RatingDisplay rating={review.rating} />
                    </div>
                    <p className="mb-0">{review.comment}</p>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <h5>Amenities</h5>
                <div className="amenities-list">
                  {spot.amenities.map((amenity, index) => (
                    <Badge key={index} bg="secondary" className="amenity-badge">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h5>Peak Hours</h5>
                <p className="mb-0">
                  <strong>⏰ {spot.peakHours}</strong>
                </p>
                <small className="text-muted">
                  Try visiting outside peak hours for less crowding
                </small>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h5>Quick Info</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Noise Level:</strong> {spot.noiseLevel.charAt(0).toUpperCase() + spot.noiseLevel.slice(1)}
                  </li>
                  <li className="mb-2">
                    <strong>Rating:</strong> {spot.rating.toFixed(1)}/5.0
                  </li>
                  <li className="mb-2">
                    <strong>Accessible:</strong> {spot.accessibility ? 'Yes' : 'No'}
                  </li>
                </ul>
              </Card.Body>
            </Card>

            <div className="d-grid gap-2">
              <Button variant="danger" size="lg">
                ⭐ Bookmark This Spot
              </Button>
              <Button variant="outline-danger" size="lg">
                📝 Write a Review
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SpotDetail;
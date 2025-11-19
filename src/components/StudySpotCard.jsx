import { Card, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RatingDisplay from './RatingDisplay';

function StudySpotCard({ spot }) {
  const navigate = useNavigate();

  const getNoiseBadgeClass = (level) => {
    switch(level) {
      case 'quiet': return 'noise-quiet';
      case 'moderate': return 'noise-moderate';
      case 'lively': return 'noise-lively';
      default: return '';
    }
  };

  return (
    <Card 
      className="study-spot-card" 
      onClick={() => navigate(`/spots/${spot.id}`)}
    >
      <Card.Img variant="top" src={spot.image} alt={spot.name} />
      <Card.Body>
        <Card.Title>{spot.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {spot.building}
        </Card.Subtitle>
        <div className="mb-2">
          <Badge 
            className={`noise-badge ${getNoiseBadgeClass(spot.noiseLevel)}`}
          >
            {spot.noiseLevel.charAt(0).toUpperCase() + spot.noiseLevel.slice(1)}
          </Badge>
        </div>
        <RatingDisplay rating={spot.rating} />
        <Card.Text className="mt-2">
          {spot.description.substring(0, 100)}...
        </Card.Text>
        <div className="d-flex flex-wrap gap-1 mt-2">
          {spot.amenities.slice(0, 3).map((amenity, index) => (
            <Badge key={index} bg="secondary" className="amenity-badge">
              {amenity}
            </Badge>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StudySpotCard;
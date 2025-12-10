import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RatingDisplay from './RatingDisplay';
import NoiseLevelBadge from './NoiseLevelBadge';
import AmenityBadge from './AmenityBadge';

function StudySpotCard({ spot }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/spots/${spot.id}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/spots/${spot.id}`);
    }
  };

  return (
    <Card 
      className="study-spot-card" 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${spot.name} at ${spot.building}. Rating: ${spot.rating} out of 5 stars. Noise level: ${spot.noiseLevel}`}
    >
      <Card.Img 
        variant="top" 
        src={spot.image} 
        alt={`Interior view of ${spot.name} study area located in ${spot.building}`}
      />
      <Card.Body>
        <Card.Title as="h3">{spot.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {spot.building}
        </Card.Subtitle>
        <div className="mb-2">
          <NoiseLevelBadge level={spot.noiseLevel} />
        </div>
        <RatingDisplay rating={spot.rating} />
        <Card.Text className="mt-2">
          {spot.description.substring(0, 100)}...
        </Card.Text>
        <div className="d-flex flex-wrap gap-1 mt-2">
          {spot.amenities.slice(0, 3).map((amenity, index) => (
            <AmenityBadge key={index} amenity={amenity} />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default StudySpotCard;

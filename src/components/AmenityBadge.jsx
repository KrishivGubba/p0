import { Badge } from 'react-bootstrap';

function AmenityBadge({ amenity }) {
  return (
    <Badge bg="secondary" className="amenity-badge">
      {amenity}
    </Badge>
  );
}

export default AmenityBadge;
 
import { Card } from 'react-bootstrap';

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="feature-card h-100">
      <Card.Body className="text-center p-4">
        <div className="feature-icon" aria-hidden="true">{icon}</div>
        <Card.Title as="h3" className="feature-title">{title}</Card.Title>
        <Card.Text className="feature-description">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;


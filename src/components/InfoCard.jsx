import { Card } from 'react-bootstrap';

function InfoCard({ title, children }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h2 className="h5">{title}</h2>
        {children}
      </Card.Body>
    </Card>
  );
}

export default InfoCard;


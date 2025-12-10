import { Container } from 'react-bootstrap';

function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <Container>
        <h1>{title}</h1>
        {subtitle && <p className="lead text-muted">{subtitle}</p>}
      </Container>
    </div>
  );
}

export default PageHeader;


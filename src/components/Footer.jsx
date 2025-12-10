import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="mb-3 mb-md-0">
            <h2 className="footer-heading">📚 Study Spot Finder</h2>
            <p className="footer-text">
              Find your perfect study location at UW-Madison.
            </p>
          </Col>
          <Col md={4} className="mb-3 mb-md-0">
            <h2 className="footer-heading">Quick Links</h2>
            <nav aria-label="Footer navigation">
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/spots">All Study Spots</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </Col>
          <Col md={4}>
            <h2 className="footer-heading">Contact</h2>
            <p className="footer-text">
              CS571 Project - Fall 2024<br />
              University of Wisconsin-Madison
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="footer-copyright">
              © 2024 Campus Study Spot Finder | UW-Madison
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;


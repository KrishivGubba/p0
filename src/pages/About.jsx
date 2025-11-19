import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <div className="page-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <h1 className="mb-4">About Campus Study Spot Finder</h1>
            
            <Card className="mb-4">
              <Card.Body>
                <h3>Our Mission</h3>
                <p>
                  Campus Study Spot Finder is dedicated to helping UW-Madison students discover 
                  the perfect study environment for their needs. Whether you prefer absolute 
                  silence in a traditional library setting or the ambient energy of a bustling 
                  café, we've got you covered.
                </p>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h3>How It Works</h3>
                <p>
                  Our platform allows students to explore various study locations around campus, 
                  each with detailed information about:
                </p>
                <ul>
                  <li><strong>Noise Levels:</strong> Quiet, Moderate, or Lively environments</li>
                  <li><strong>Amenities:</strong> WiFi, power outlets, printing, food options, and more</li>
                  <li><strong>Accessibility:</strong> Information about building accessibility</li>
                  <li><strong>Peak Hours:</strong> When to expect crowds</li>
                  <li><strong>Community Reviews:</strong> Real ratings from fellow students</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h3>Features</h3>
                <Row>
                  <Col md={6}>
                    <h5>🔍 Search & Filter</h5>
                    <p>
                      Quickly find spots by name or filter by your preferences to discover 
                      new locations that match your study style.
                    </p>
                  </Col>
                  <Col md={6}>
                    <h5>⭐ Ratings & Reviews</h5>
                    <p>
                      Browse community ratings and reviews to make informed decisions about 
                      where to study.
                    </p>
                  </Col>
                  <Col md={6}>
                    <h5>📚 Comprehensive Details</h5>
                    <p>
                      Each location includes photos, amenities, peak hours, and accessibility 
                      information.
                    </p>
                  </Col>
                  <Col md={6}>
                    <h5>🎯 Personalized Experience</h5>
                    <p>
                      Bookmark your favorite spots and contribute reviews to help other 
                      students (coming soon!).
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h3>About This Project</h3>
                <p>
                  This web application was created as part of CS571: Building User Interfaces 
                  at the University of Wisconsin-Madison. The project demonstrates the 
                  implementation of modern web development practices including:
                </p>
                <ul>
                  <li>React for building interactive user interfaces</li>
                  <li>React Router for seamless page navigation</li>
                  <li>React Bootstrap for responsive, mobile-friendly design</li>
                  <li>Component-based architecture for maintainable code</li>
                  <li>State management for filtering and search functionality</li>
                  <li>Vite for fast development and optimized builds</li>
                </ul>
              </Card.Body>
            </Card>

            <Card className="mb-4 bg-light">
              <Card.Body>
                <h3>Future Enhancements</h3>
                <p>
                  We're constantly working to improve the platform. Upcoming features include:
                </p>
                <ul>
                  <li>User authentication and personalized bookmarks</li>
                  <li>Ability to submit new study spots</li>
                  <li>Write and edit reviews</li>
                  <li>Real-time occupancy information</li>
                  <li>Mobile app version</li>
                  <li>Interactive campus map integration</li>
                </ul>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body className="text-center">
                <h3>Contact & Feedback</h3>
                <p>
                  Have suggestions or found a bug? We'd love to hear from you!
                </p>
                <p className="mb-0">
                  <strong>GitHub:</strong> KrishivGubba<br />
                  <strong>Course:</strong> CS571 - Fall 2024<br />
                  <strong>University:</strong> UW-Madison
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
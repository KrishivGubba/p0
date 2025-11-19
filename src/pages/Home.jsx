import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { studySpots } from '../data/studySpots';
import SearchBar from '../components/SearchBar';
import StudySpotCard from '../components/StudySpotCard';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const topRatedSpots = studySpots
    .filter(spot => spot.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const filteredSpots = searchTerm
    ? studySpots.filter(spot =>
        spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.building.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <div className="hero-section">
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <h1>Find Your Perfect Study Spot</h1>
              <p>
                Discover the best study locations around UW-Madison campus. 
                Filter by noise level, amenities, and more to find your ideal workspace.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
            {searchTerm && (
              <div className="mt-3">
                <p className="text-muted">
                  Found {filteredSpots.length} results for "{searchTerm}"
                </p>
                {filteredSpots.length > 0 && (
                  <Row className="g-4">
                    {filteredSpots.map(spot => (
                      <Col key={spot.id} md={6} lg={4}>
                        <StudySpotCard spot={spot} />
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
            )}
            {!searchTerm && (
              <div className="text-center mt-3">
                <Button 
                  variant="danger" 
                  size="lg"
                  onClick={() => navigate('/spots')}
                >
                  Browse All Study Spots
                </Button>
              </div>
            )}
          </Col>
        </Row>

        {!searchTerm && (
          <div className="top-rated-section">
            <h2 className="section-title text-center">Top Rated Study Spots</h2>
            <Row className="g-4">
              {topRatedSpots.map(spot => (
                <Col key={spot.id} md={6} lg={4}>
                  <StudySpotCard spot={spot} />
                </Col>
              ))}
            </Row>
          </div>
        )}

        <Row className="g-4 my-5">
          <Col md={4}>
            <div className="text-center p-4 bg-white rounded shadow-sm">
              <h3 style={{ fontSize: '3rem' }}>📚</h3>
              <h5>Multiple Locations</h5>
              <p className="text-muted">
                Browse study spots across campus libraries, cafes, and quiet spaces
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4 bg-white rounded shadow-sm">
              <h3 style={{ fontSize: '3rem' }}>⭐</h3>
              <h5>Community Rated</h5>
              <p className="text-muted">
                Real ratings and reviews from fellow UW-Madison students
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="text-center p-4 bg-white rounded shadow-sm">
              <h3 style={{ fontSize: '3rem' }}>🔍</h3>
              <h5>Easy Filtering</h5>
              <p className="text-muted">
                Filter by noise level, amenities, and accessibility
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-0">
                © 2024 Campus Study Spot Finder | UW-Madison CS571 Project
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
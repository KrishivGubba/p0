import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { studySpots } from '../data/studySpots';
import SearchBar from '../components/SearchBar';
import StudySpotCard from '../components/StudySpotCard';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';

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
      <header className="hero-section">
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
      </header>

      <main>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <SearchBar 
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
              />
              {searchTerm && (
                <div className="mt-3" role="region" aria-live="polite">
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
            <section className="top-rated-section" aria-labelledby="top-rated-heading">
              <h2 id="top-rated-heading" className="section-title text-center">Top Rated Study Spots</h2>
              <Row className="g-4">
                {topRatedSpots.map(spot => (
                  <Col key={spot.id} md={6} lg={4}>
                    <StudySpotCard spot={spot} />
                  </Col>
                ))}
              </Row>
            </section>
          )}

          <section className="features-section" aria-labelledby="features-heading">
            <h2 id="features-heading" className="visually-hidden">Why Choose Campus Study Spot Finder</h2>
            <Row className="g-4 my-5">
              <Col md={4}>
                <FeatureCard 
                  icon="📚"
                  title="Multiple Locations"
                  description="Browse study spots across campus libraries, cafes, and quiet spaces"
                />
              </Col>
              <Col md={4}>
                <FeatureCard 
                  icon="⭐"
                  title="Community Rated"
                  description="Real ratings and reviews from fellow UW-Madison students"
                />
              </Col>
              <Col md={4}>
                <FeatureCard 
                  icon="🔍"
                  title="Easy Filtering"
                  description="Filter by noise level, amenities, and accessibility"
                />
              </Col>
            </Row>
          </section>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

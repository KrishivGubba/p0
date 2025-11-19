import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { studySpots } from '../data/studySpots';
import StudySpotCard from '../components/StudySpotCard';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';

function StudySpots() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    noiseLevel: '',
    amenity: '',
    minRating: '0'
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      noiseLevel: '',
      amenity: '',
      minRating: '0'
    });
    setSearchTerm('');
  };

  const filteredSpots = studySpots.filter(spot => {
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        spot.name.toLowerCase().includes(searchLower) ||
        spot.building.toLowerCase().includes(searchLower) ||
        spot.description.toLowerCase().includes(searchLower);
      if (!matchesSearch) return false;
    }

    if (filters.noiseLevel && spot.noiseLevel !== filters.noiseLevel) {
      return false;
    }

    if (filters.amenity && !spot.amenities.includes(filters.amenity)) {
      return false;
    }

    if (parseFloat(filters.minRating) > 0 && spot.rating < parseFloat(filters.minRating)) {
      return false;
    }

    return true;
  });

  return (
    <div className="page-container">
      <Container>
        <h1 className="mb-4">All Study Spots</h1>
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <FilterBar 
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
        />

        <div className="mb-3">
          <p className="text-muted">
            Showing {filteredSpots.length} of {studySpots.length} study spots
          </p>
        </div>

        {filteredSpots.length === 0 ? (
          <div className="text-center py-5">
            <h3>No study spots found</h3>
            <p className="text-muted">Try adjusting your filters or search terms</p>
          </div>
        ) : (
          <Row className="g-4">
            {filteredSpots.map(spot => (
              <Col key={spot.id} md={6} lg={4}>
                <StudySpotCard spot={spot} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default StudySpots;
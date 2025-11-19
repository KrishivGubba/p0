import { Form, Row, Col, Button } from 'react-bootstrap';

function FilterBar({ filters, onFilterChange, onClearFilters }) {
  return (
    <div className="filter-section">
      <h5 className="mb-3">Filter Study Spots</h5>
      <Row>
        <Col md={4} className="mb-3">
          <Form.Group>
            <Form.Label>Noise Level</Form.Label>
            <Form.Select 
              value={filters.noiseLevel}
              onChange={(e) => onFilterChange('noiseLevel', e.target.value)}
            >
              <option value="">All Levels</option>
              <option value="quiet">Quiet</option>
              <option value="moderate">Moderate</option>
              <option value="lively">Lively</option>
            </Form.Select>
          </Form.Group>
        </Col>
        
        <Col md={4} className="mb-3">
          <Form.Group>
            <Form.Label>Amenities</Form.Label>
            <Form.Select 
              value={filters.amenity}
              onChange={(e) => onFilterChange('amenity', e.target.value)}
            >
              <option value="">All Amenities</option>
              <option value="WiFi">WiFi</option>
              <option value="Outlets">Outlets</option>
              <option value="Food Nearby">Food Nearby</option>
              <option value="Coffee">Coffee</option>
              <option value="Printing">Printing</option>
            </Form.Select>
          </Form.Group>
        </Col>
        
        <Col md={4} className="mb-3">
          <Form.Group>
            <Form.Label>Minimum Rating</Form.Label>
            <Form.Select 
              value={filters.minRating}
              onChange={(e) => onFilterChange('minRating', e.target.value)}
            >
              <option value="0">Any Rating</option>
              <option value="3">3+ Stars</option>
              <option value="4">4+ Stars</option>
              <option value="4.5">4.5+ Stars</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      
      <Button variant="outline-secondary" onClick={onClearFilters}>
        Clear Filters
      </Button>
    </div>
  );
}

export default FilterBar;
import { Form, InputGroup } from 'react-bootstrap';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <Form.Group>
        <Form.Label htmlFor="search-input" className="visually-hidden">
          Search for study spots
        </Form.Label>
        <InputGroup size="lg">
          <InputGroup.Text id="search-addon" aria-hidden="true">🔍</InputGroup.Text>
          <Form.Control
            id="search-input"
            type="text"
            placeholder="Search for study spots..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-describedby="search-addon"
          />
        </InputGroup>
      </Form.Group>
    </div>
  );
}

export default SearchBar;

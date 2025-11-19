import { Form, InputGroup } from 'react-bootstrap';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <InputGroup size="lg">
        <InputGroup.Text>🔍</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search for study spots..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
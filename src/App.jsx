import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import StudySpots from './pages/StudySpots';
import SpotDetail from './pages/SpotDetail';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router basename="/p0">
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spots" element={<StudySpots />} />
          <Route path="/spots/:id" element={<SpotDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
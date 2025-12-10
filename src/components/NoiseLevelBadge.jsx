import { Badge } from 'react-bootstrap';

function NoiseLevelBadge({ level }) {
  const getBadgeClass = (noiseLevel) => {
    switch(noiseLevel) {
      case 'quiet': return 'noise-quiet';
      case 'moderate': return 'noise-moderate';
      case 'lively': return 'noise-lively';
      default: return '';
    }
  };

  const getLabel = (noiseLevel) => {
    return noiseLevel.charAt(0).toUpperCase() + noiseLevel.slice(1);
  };

  return (
    <Badge 
      className={`noise-badge ${getBadgeClass(level)}`}
      aria-label={`Noise level: ${getLabel(level)}`}
    >
      {getLabel(level)}
    </Badge>
  );
}

export default NoiseLevelBadge;


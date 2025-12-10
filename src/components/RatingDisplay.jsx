function RatingDisplay({ rating, size = 'md' }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starSize = size === 'lg' ? '1.5rem' : '1rem';

  return (
    <div 
      className="rating-display" 
      style={{ fontSize: starSize }}
      role="img"
      aria-label={`Rating: ${rating.toFixed(1)} out of 5 stars`}
    >
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`} aria-hidden="true">★</span>
      ))}
      {hasHalfStar && <span aria-hidden="true">⯨</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#6c757d' }} aria-hidden="true">★</span>
      ))}
      <span style={{ color: '#495057', fontSize: '0.9em', marginLeft: '0.5rem' }}>
        ({rating.toFixed(1)})
      </span>
    </div>
  );
}

export default RatingDisplay;

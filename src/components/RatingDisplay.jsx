function RatingDisplay({ rating, size = 'md' }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const starSize = size === 'lg' ? '1.5rem' : '1rem';

  return (
    <div className="rating-display" style={{ fontSize: starSize }}>
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}
      {hasHalfStar && <span>⯨</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`} style={{ color: '#ddd' }}>★</span>
      ))}
      <span style={{ color: '#666', fontSize: '0.9em', marginLeft: '0.5rem' }}>
        ({rating.toFixed(1)})
      </span>
    </div>
  );
}

export default RatingDisplay;
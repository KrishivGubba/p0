import RatingDisplay from './RatingDisplay';

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <div className="d-flex justify-content-between align-items-start mb-2">
        <strong>{review.user}</strong>
        <RatingDisplay rating={review.rating} />
      </div>
      <p className="mb-0">{review.comment}</p>
    </article>
  );
}

export default ReviewCard;


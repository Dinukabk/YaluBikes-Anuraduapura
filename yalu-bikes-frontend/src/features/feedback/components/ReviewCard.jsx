import { Card } from 'react-bootstrap';
import StarRating from '../../../components/ui/StarRating';

export default function ReviewCard({ review }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between mb-2">
          <h5>{review.user.name}</h5>
          <StarRating rating={review.rating} />
        </div>
        <Card.Text>{review.comment}</Card.Text>
        <Card.Text className="text-muted small">
          {new Date(review.date).toLocaleDateString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
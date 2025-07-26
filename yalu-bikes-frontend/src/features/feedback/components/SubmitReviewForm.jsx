import { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import StarRating from '../../../components/ui/StarRating';

export default function SubmitReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Your Rating</Form.Label>
        <StarRating 
          rating={rating}
          onRate={setRating}
          editable
        />
      </Form.Group>

      <FloatingLabel label="Your Review" className="mb-3">
        <Form.Control
          as="textarea"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ height: '100px' }}
          required
        />
      </FloatingLabel>

      <Button variant="primary" type="submit">
        Submit Review
      </Button>
    </Form>
  );
}
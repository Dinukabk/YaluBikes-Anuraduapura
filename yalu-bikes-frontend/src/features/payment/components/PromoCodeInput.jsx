import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { applyPromoCode } from '../paymentAPI';

export default function PromoCodeInput({ onApply }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [discount, setDiscount] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const result = await applyPromoCode(code);
      setDiscount(result.discount);
      onApply(result.discount);
    } catch (err) {
      setError('Invalid promo code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group>
        <Form.Label>Promo Code</Form.Label>
        <div className="d-flex">
          <Form.Control
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            disabled={loading || discount}
          />
          <Button
            variant="outline-primary"
            type="submit"
            disabled={loading || !code || discount}
            className="ms-2"
          >
            {loading ? 'Applying...' : 'Apply'}
          </Button>
        </div>
        {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
        {discount && (
          <Alert variant="success" className="mt-2">
            {discount}% discount applied!
          </Alert>
        )}
      </Form.Group>
    </Form>
  );
}
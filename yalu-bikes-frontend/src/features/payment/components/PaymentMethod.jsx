import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const PAYMENT_METHODS = [
  { id: 'payhere', name: 'PayHere', icon: 'credit-card' },
  { id: 'lankaqr', name: 'LankaQR', icon: 'qrcode' },
  { id: 'cash', name: 'Cash on Delivery', icon: 'money-bill' }
];

export default function PaymentMethod({ onMethodSelect, onNext }) {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedMethod) {
      onMethodSelect(selectedMethod);
      onNext();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Select Payment Method</Form.Label>
        {PAYMENT_METHODS.map(method => (
          <div key={method.id} className="mb-3">
            <Form.Check
              type="radio"
              id={`method-${method.id}`}
              label={
                <>
                  <i className={`fas fa-${method.icon} me-2`}></i>
                  {method.name}
                </>
              }
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id)}
            />
          </div>
        ))}
      </Form.Group>

      <Button 
        variant="primary" 
        type="submit" 
        disabled={!selectedMethod}
      >
        Continue to Payment
      </Button>
    </Form>
  );
}
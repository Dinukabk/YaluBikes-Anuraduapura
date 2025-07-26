import { Form } from 'react-bootstrap';

export default function HelmetOption({ 
  included, 
  onChange,
  price = 200 
}) {
  return (
    <Form.Check
      type="checkbox"
      label={`Add Helmet (LKR ${price})`}
      checked={included}
      onChange={(e) => onChange(e.target.checked)}
      className="mb-3"
    />
  );
}
import { forwardRef } from 'react';
import { Form } from 'react-bootstrap';

const TextInput = forwardRef(({ label, error, ...props }, ref) => {
  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control 
        ref={ref}
        {...props}
        isInvalid={!!error}
      />
      {error && (
        <Form.Control.Feedback type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
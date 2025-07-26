import { Alert } from 'react-bootstrap';

export default function AlertBanner({ 
  message, 
  variant = 'danger',
  dismissible = false,
  onClose 
}) {
  return (
    <Alert 
      variant={variant} 
      dismissible={dismissible}
      onClose={onClose}
      className="mb-4"
    >
      {message}
    </Alert>
  );
}
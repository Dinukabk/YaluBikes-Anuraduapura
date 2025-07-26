import { Toast } from 'react-bootstrap';

export default function CustomToast({ 
  show, 
  onClose, 
  title, 
  message, 
  variant = 'success',
  delay = 3000 
}) {
  return (
    <Toast 
      show={show} 
      onClose={onClose}
      delay={delay}
      autohide
      bg={variant}
      className="position-fixed top-0 end-0 m-3"
    >
      <Toast.Header>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body className="text-white">
        {message}
      </Toast.Body>
    </Toast>
  );
}
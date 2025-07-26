import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function IconButton({ 
  icon, 
  variant = 'outline-primary',
  ...props 
}) {
  return (
    <Button 
      variant={variant}
      className="rounded-circle"
      style={{ width: '40px', height: '40px' }}
      {...props}
    >
      <FontAwesomeIcon icon={icon} />
    </Button>
  );
}
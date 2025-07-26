import { Button, Spinner } from 'react-bootstrap';

export default function PrimaryButton({ 
  children, 
  isLoading = false, 
  ...props 
}) {
  return (
    <Button 
      variant="primary" 
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="me-2"
          />
          {children}
        </>
      ) : children}
    </Button>
  );
}
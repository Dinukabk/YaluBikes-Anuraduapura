import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function CookieConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <Modal show={show} centered backdrop="static">
      <Modal.Header>
        <Modal.Title>Cookie Consent</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>We use cookies to enhance your experience on our website.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleAccept}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
import { Container, Alert, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useWhatsAppMessage } from '../../../app/hooks/useWhatsAppMessage';

export default function BookingConfirmationPage() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { generateBookingMessage } = useWhatsAppMessage();

  const handleContact = () => {
    const message = generateBookingMessage(state.booking);
    window.open(
      `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <Container className="py-4">
      <Alert variant="success">
        <Alert.Heading>{t('booking.successTitle')}</Alert.Heading>
        <p>{t('booking.successMessage')}</p>
      </Alert>

      <div className="d-flex gap-3 mt-4">
        <Button variant="primary" onClick={handleContact}>
          {t('booking.contactUs')}
        </Button>
        <Button variant="outline-primary" onClick={() => navigate('/')}>
          {t('booking.goHome')}
        </Button>
      </div>
    </Container>
  );
}
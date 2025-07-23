import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function useWhatsAppMessage() {
  const { t } = useTranslation();

  const sendWhatsAppMessage = useCallback((phone, message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  }, []);

  const generateBookingMessage = useCallback((booking) => {
    return t('whatsapp.bookingMessage', {
      name: booking.user.name,
      bike: booking.bike.model,
      dates: `${booking.startDate} to ${booking.endDate}`,
      total: booking.totalPrice
    });
  }, [t]);

  return { sendWhatsAppMessage, generateBookingMessage };
}
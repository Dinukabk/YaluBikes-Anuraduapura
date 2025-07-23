import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function BikeCard({ bike }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBook = () => {
    navigate(`/bookings/new?bikeId=${bike._id}`);
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={bike.images[0]} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{bike.model}</Card.Title>
        <Card.Text>
          <Badge bg={bike.available ? 'success' : 'danger'}>
            {bike.available ? t('booking.available') : t('booking.unavailable')}
          </Badge>
        </Card.Text>
        <Card.Text className="text-muted">
          {t('booking.price', { price: bike.dailyRate })}
        </Card.Text>
        <Button 
          variant="primary" 
          onClick={handleBook}
          disabled={!bike.available}
          className="mt-auto"
        >
          {t('booking.bookNow')}
        </Button>
      </Card.Body>
    </Card>
  );
}
import { Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function TourCard({ tour }) {
  const { t } = useTranslation();

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={tour.image || '/assets/images/tour-default.jpg'} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{tour.name}</Card.Title>
        <Card.Text>{tour.description}</Card.Text>
        <div className="mt-auto">
          <Card.Text className="fw-bold">
            {t('common.price')}: LKR {tour.price}
          </Card.Text>
          <Card.Text className="text-muted">
            {t('common.duration')}: {tour.duration}
          </Card.Text>
          <Button variant="primary" className="w-100">
            {t('common.bookNow')}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
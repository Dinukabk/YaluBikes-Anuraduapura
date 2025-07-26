import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import TourCard from '../features/booking/components/TourCard';

const tours = [
  {
    id: 1,
    name: 'Heritage Tour',
    description: 'Explore ancient Anuradhapura',
    price: 5000,
    duration: 'Full day'
  },
  // Add more tours...
];

export default function ToursPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <h2 className="mb-4">{t('tours.title')}</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {tours.map(tour => (
          <Col key={tour.id}>
            <TourCard tour={tour} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
import { Container, Row, Col } from 'react-bootstrap';
import BikeCard from '../components/BikeCard';
import { useGetAvailableBikes } from '../bookingAPI';
import { useTranslation } from 'react-i18next';

export default function BikeListPage() {
  const { data: bikes, isLoading } = useGetAvailableBikes();
  const { t } = useTranslation();

  if (isLoading) return <div>Loading bikes...</div>;

  return (
    <Container className="py-4">
      <h2>{t('bikes.availableBikes')}</h2>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {bikes?.map(bike => (
          <Col key={bike._id}>
            <BikeCard bike={bike} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
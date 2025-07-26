import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h1>{t('home.title')}</h1>
          <p className="lead">{t('home.subtitle')}</p>
          <Button 
            as={Link} 
            to="/bikes" 
            variant="primary" 
            size="lg"
          >
            {t('home.cta')}
          </Button>
        </Col>
        <Col md={6}>
          <img 
            src="/assets/images/home-banner.jpg" 
            alt="Bike Rental" 
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
}
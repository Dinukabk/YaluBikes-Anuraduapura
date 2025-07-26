import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <h2>{t('about.title')}</h2>
      <Row className="mt-4">
        <Col md={6}>
          <h5>{t('about.ourStory')}</h5>
          <p>{t('about.ourStoryContent')}</p>
        </Col>
        <Col md={6}>
          <h5>{t('about.ourMission')}</h5>
          <p>{t('about.ourMissionContent')}</p>
        </Col>
      </Row>
    </Container>
  );
}
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container className="text-center py-5">
      <h1 className="display-1">404</h1>
      <p className="lead">{t('notFound.message')}</p>
      <Button 
        variant="primary" 
        onClick={() => navigate('/')}
        className="mt-3"
      >
        {t('notFound.goHome')}
      </Button>
    </Container>
  );
}
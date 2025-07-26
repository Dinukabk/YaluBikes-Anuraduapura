import { Container } from 'react-bootstrap';
import RegisterForm from '../components/RegisterForm';
import { useTranslation } from 'react-i18next';

export default function RegisterPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <h2>{t('auth.registerTitle')}</h2>
      <div className="mt-4" style={{ maxWidth: '500px' }}>
        <RegisterForm />
      </div>
    </Container>
  );
}
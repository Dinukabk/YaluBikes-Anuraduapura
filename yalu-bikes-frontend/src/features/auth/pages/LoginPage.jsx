import { Container } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import { useTranslation } from 'react-i18next';

export default function LoginPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <h2>{t('auth.loginTitle')}</h2>
      <div className="mt-4" style={{ maxWidth: '500px' }}>
        <LoginForm />
      </div>
    </Container>
  );
}
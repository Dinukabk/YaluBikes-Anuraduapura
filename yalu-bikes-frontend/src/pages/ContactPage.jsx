import { Form, Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <h2>{t('contact.title')}</h2>
      <Form className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>{t('contact.name')}</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{t('contact.email')}</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>{t('contact.message')}</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Button variant="primary" type="submit">
          {t('contact.submit')}
        </Button>
      </Form>
    </Container>
  );
}
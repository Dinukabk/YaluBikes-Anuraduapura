import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function TermsPage() {
  const { t } = useTranslation();
  
  return (
    <Container className="py-4">
      <h2>{t('terms.title')}</h2>
      <div className="mt-4">
        <h5>{t('terms.rentalTerms')}</h5>
        <p>{t('terms.rentalContent')}</p>
        
        <h5 className="mt-4">{t('terms.cancellationPolicy')}</h5>
        <p>{t('terms.cancellationContent')}</p>
      </div>
    </Container>
  );
}
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <Container className="py-4">
      <h2>{t('privacy.title')}</h2>
      <div className="mt-4">
        <h5>{t('privacy.dataCollection')}</h5>
        <p>{t('privacy.dataCollectionContent')}</p>
        
        <h5 className="mt-4">{t('privacy.dataUsage')}</h5>
        <p>{t('privacy.dataUsageContent')}</p>
      </div>
    </Container>
  );
}
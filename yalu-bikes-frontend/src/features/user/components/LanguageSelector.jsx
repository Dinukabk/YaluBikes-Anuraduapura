import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'si', name: 'සිංහල' },
  { code: 'ta', name: 'தமிழ்' }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-light" id="language-selector">
        {languages.find(l => l.code === i18n.language)?.name}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {languages.map(lang => (
          <Dropdown.Item 
            key={lang.code}
            active={i18n.language === lang.code}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
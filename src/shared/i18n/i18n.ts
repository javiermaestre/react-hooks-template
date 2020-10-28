import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../../static/texts/en.json';
import es from '../../static/texts/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: { ...en }
    },
    es: {
      translation: { ...es }
    }
  },
  fallbackLng: ['en', 'es'],
  debug: process.env.NODE_ENV !== 'production',
  interpolation: {
    escapeValue: false
  },
  lng: 'en'
});

export default i18n;

import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';
import translations from '../../data/translations/translations.json';
import difficulties from '../../data/translations/difficulties.json';

const SUPPORTED_TRANSLATIONS = ['en', 'ru', 'by'];

i18n
  .use(XHR)
  .use(reactI18nextModule)
  .init({
    ns: ['translation', 'difficulties'],
    fallbackLng: 'en',
    debug: true,

    react: {
      wait: false,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  });

SUPPORTED_TRANSLATIONS
  .forEach((lang) => {
    i18n.addResourceBundle(lang, 'translation', translations[lang]);
    i18n.addResourceBundle(lang, 'difficulties', difficulties[lang]);
  });


export default i18n;

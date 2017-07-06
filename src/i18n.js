import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import {locales} from "./locales/";

i18n
  .use(LngDetector)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: locales,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
      format: function(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      }
    }
  });

export default i18n;

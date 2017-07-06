import i18n from 'i18next';
import LngDetector from 'i18next-browser-languagedetector';
import {locales} from "./locales/";

i18n
  .use(LngDetector)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: locales
  });

export default i18n;

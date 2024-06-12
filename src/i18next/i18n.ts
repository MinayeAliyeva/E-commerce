import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.init({
  fallbackLng: ["az"],
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: "en",
    // interpolation: {
    //   escapeValue: false,
    // },
    resources: {
      en: {
        translation: {
          home: "home",
        },
      },
      de: {
        translation: {
          home: "Esas sayfa",
        },
      },
      fr: {
        translation: {
          home: "maison",
        },
      },
      tr: {
        translation: {
          home: "Ev",
        },
      },
      az: {
        translation: {
          home: "Esas",
        },
      },
    },
  });

export default i18n;
//task:select box buttonlarda ,trans componente bax,navbar home about news deyisdir dillerle

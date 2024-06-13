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
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home: "home",
          Home: "Home ",
          About: "About",
        },
      },
      de: {
        translation: {
          home: "deutsch",
          Home: "Deutsch ",
        },
      },
      fr: {
        translation: {
          home: "maison",
          Home: "Maison",
        },
      },
      tr: {
        translation: {
          home: "Ev",
          Home: "Ana sayfa",
          About: "Hakkimizda",
        },
      },
      az: {
        translation: {
          home: "Esas",
          Home: "Esas sehife",
          About: "Haqqimizda",
        },
      },
    },
  });

export default i18n;
//task:select box buttonlarda ,trans componente bax,navbar home about news deyisdir dillerle

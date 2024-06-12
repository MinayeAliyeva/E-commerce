// import "./App.css";
// import Products from "./components/products";

// function App() {
//   return (
//     <div className="App">
//       Hello
//       <Products />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useTranslation, Trans } from "react-i18next";

const lngs: any = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
  fr: { nativeName: "French" },
  tr: { nativeName: "Turkish" },
  az: { nativeName: "Azerbaijan" },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs?.[lng].nativeName}
            </button>
          ))}
        </div>

        <p>{t("home")}</p>
      </header>
    </div>
  );
}

export default App;

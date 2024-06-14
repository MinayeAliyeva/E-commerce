import "./App.css";
import Products from "./components/products";
import HeaderComp from "./components/header";

const lngs: any = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
  fr: { nativeName: "French" },
  tr: { nativeName: "Turkish" },
  az: { nativeName: "Azerbaijan" },
};

function App() {
  // const { t, i18n } = useTranslation();

  // const changeLanguange = (lng: any) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <div className="App">
      {/* <header className="App-header">
        <div>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              style={{
                fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => changeLanguange(lng)}
            >
              {lngs?.[lng].nativeName}
            </button>
          ))}
        </div>

        <p>{t("home")}</p>

        <nav className="navbar">
          <Link to="/">{t("Home")}</Link>
          <a href="">{t("About")}</a>
          <a href="">{t("Company")}</a>
          <a href="">{t("Blog")}</a>
          <select onChange={(e) => changeLanguange(e.target.value)}>
            <option disabled selected>
              Language
            </option>
            {Object.keys(lngs).map((lng) => (
              <option key={lng} value={lng}>
                {" "}
                {lngs?.[lng].nativeName}
              </option>
            ))}
          </select>
        </nav>
      </header> */}
      <HeaderComp />
      <Products />
    </div>
  );
}

export default App;

//basket yaz ayri component

import React from "react";
import ReactDOM from "react-dom/client";
import { BasketContextProvider } from "./contextApi/BasketContext";
import App from "./App";
import "../src/i18next/i18n";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./contextApi/ThemeContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BasketContextProvider>
      <ThemeContextProvider>
        <BrowserRouter  basename="/github.io/E-commerce">
          <App />
        </BrowserRouter>
      </ThemeContextProvider>
    </BasketContextProvider>
  </React.StrictMode>
);

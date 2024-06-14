import React from "react";
import ReactDOM from "react-dom/client";
import { BasketContextProvider } from "./contextApi/BasketContext";
import App from "./App";
import "../src/i18next/i18n";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BasketContextProvider>
        <App />
      </BasketContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

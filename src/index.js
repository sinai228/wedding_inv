import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Story from "./Story";
import ToDo from "./ToDo";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import common_kr from "./translations/kr/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'kr',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    kr: {
      common: common_kr
    },
    fallbackLng: "en",
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <I18nextProvider i18n={i18next}>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/story' element={<Story />} />
        <Route exact path='/todo' element={<ToDo />} />
      </Routes>
    </I18nextProvider >
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

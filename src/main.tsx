import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en.json"
import ru from "./lang/ru.json"
import uz from "./lang/uz.json"
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      },
      uz: {
        translation: uz
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


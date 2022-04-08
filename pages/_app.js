import "../styles/globals.css";
import Menu from "../components/Menu.jsx";
import { LanguageContext } from "../components/LanguageContext";
import { useState } from "react";
import { themes } from "../components/LanguageContext";

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState(themes.uz)
  return (
    <LanguageContext.Provider value={lang} >
      <Menu />
      <Component {...pageProps} />
    </LanguageContext.Provider>
  );
}

export default MyApp;

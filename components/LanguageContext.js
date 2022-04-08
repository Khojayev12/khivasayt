import React from "react";
export const themes = {
  uz: {
    home: "Bosh sahifa",
    aboutSchool: "Maktab haqida",
  },
  en: {
    home: "Home",
    aboutSchool: "About school",
  },
};

export const LanguageContext = React.createContext(
  themes.uz // default value
);

import { LanguageContext } from "./LanguageContext.js";
export default function Menu(props) {
  return (
    <LanguageContext.Consumer>
      {(lang) => (<>
        <p>Menu</p>
        <h1> {lang.home} </h1>
        </>)}
    </LanguageContext.Consumer>
  );
}

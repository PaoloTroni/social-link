import "../css/headerNoLogin.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export const HeaderNoLogin = () => {
  return (
    <header>
      <section className="headerNoLoginGlobal">
        <p className="sectionLogoHeaderNoLogin">
          <Link className="linkHeaderNoLogin" to="/">
            <img className="logoHeaderNoLogin" src={logo} alt="logo"></img>
          </Link>
        </p>
      </section>
    </header>
  );
};

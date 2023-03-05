import "../css/header.css";
import logo from "../images/socialLinktext.png";
import { Link } from "react-router-dom";
import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header>
      <section className="headerGlobal">
        <section className="sectionLogo">
          <p className="logoHeader">
            <Link className="logoHeader" to="/">
              <img className="logoHeader" src={logo} alt="logo"></img>
            </Link>
          </p>
        </section>
        <section className="sectionNav">
          <nav className="navHeaderGlobal">
            <Auth />
          </nav>
        </section>
      </section>
    </header>
  );
};

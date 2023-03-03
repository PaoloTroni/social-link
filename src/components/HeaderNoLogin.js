import "../css/header.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export const HeaderNoLogin = () => {
  return (
    <header className="headerGlobal">
      <section className="sectionLogo">
        <p>
          <Link to="/">
            <img className="logoHeader" src={logo}></img>
          </Link>
        </p>
      </section>
    </header>
  );
};

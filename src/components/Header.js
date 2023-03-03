import "../css/header.css";
import logo from "../images/logo.png";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Auth } from "./Auth";

// REVISAR SI ES NECESARIO CONTEXTO AQUI

export const Header = () => {
  useContext(AuthContext);
  const { user } = useContext(AuthContext);
  return (
    <header className="headerGlobal">
      <section className="sectionLogo">
        <p>
          <Link to="/">
            <img className="logoHeader" src={logo}></img>
          </Link>
        </p>
      </section>
      <section className="sectionNav">
        <nav className="navHeaderGlobal">
          <Auth />
        </nav>
      </section>
    </header>
  );
};

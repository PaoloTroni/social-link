import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <ul className="estructuraFooter">
        <li className="linkFooter">
          <Link className="linkFooter" to="/about-us">
            Sobre Nosotros
          </Link>
        </li>
        <li className="linkFooter">
          <Link className="linkFooter" to="/legal-notice">
            Aviso Legal
          </Link>
        </li>
      </ul>
      <p>
        © Social Link 2023 -{" "}
        <a href="https://www.hackaboss.com/" className="EnlHack">
          @Hack a Boss
        </a>
      </p>
    </footer>
  );
};

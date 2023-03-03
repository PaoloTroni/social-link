import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <ul className="estructuraFooter">
        <li>
          <Link className="linkFooter" to="/about-us">
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link className="linkFooter" to="/legal-notice">
            Aviso legal
          </Link>
        </li>
      </ul>
      <p>© Social Link 2023</p>
    </footer>
  );
};

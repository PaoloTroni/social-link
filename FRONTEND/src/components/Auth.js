import "../css/authPage.css";
import iconSalir from "../images/iconSalir.png";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const Auth = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    user && (
      <>
        <Link className="enlaceMiPerfil" to={`/user`}>
          Mi Perfil
        </Link>

        <button
          className="botonSalir"
          onClick={() => logOut() && navigate("/login")}
        >
          Salir
          <img className="iconoSalir" src={iconSalir}></img>
        </button>
      </>
    )
  );
};

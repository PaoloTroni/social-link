import "../css/ErrorLoginRegisterPage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { HeaderNoLogin } from "../components/HeaderNoLogin";

import { AuthContext } from "../context/AuthContext";

export const ErrorLoginRegisterPage = () => {
  const { user, logOut, token } = useContext(AuthContext);
  return (
    <>
      {!token && <HeaderNoLogin />}
      <section className="ErrorLoginRegisterGlobal">
        <section className="ErrorLoginRegister">
          <p className="Atencion">¡Atención!</p>
          <p className="pError">Has iniciado sesión como {user.nombre}.</p>
          <p className="pError2">
            Para hacer iniciar sesión o registrarse primero tienes que cerrar la
            sesión activa.
          </p>

          <Link className="LinkLogin" to={"/"}>
            Volver a la página inicial
          </Link>

          <button className="botonError" onClick={() => logOut()}>
            Salir
          </button>
        </section>
      </section>
    </>
  );
};

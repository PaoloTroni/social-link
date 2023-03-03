import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export const ErrorLoginRegisterPage = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <section>
      <h2>¡Atención!</h2>
      <p>Has iniciado seción como {user.nombre}.</p>
      <p>
        Para hacer login como otro usuario o registrar un usuario nuevo primero
        tienes que cerrar la cesión activa.
      </p>

      <Link to={"/"}>Volver a la página inicial</Link>

      <button onClick={() => logOut()}>Salir</button>
    </section>
  );
};

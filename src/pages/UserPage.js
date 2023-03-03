import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const UserPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section>
        <h2>Página de perfil de: {user.nombre}</h2>
        <p>Id de usuario: {user.id}</p>
        <p>Email: {user.email}</p>
        <p>Biografia: {user.biography}</p>
        {console.log(user.biography)}
        {console.log(user)}
      </section>
      <section>
        <button>
          <Link to="/edit-user">Actualizar Datos</Link>
        </button>
        <button>
          <Link to="/edit-pass">Cambiar Contraseña</Link>
        </button>
        <button
          onClick={() => {
            toast(
              "Atención: si borras tu cuenta perderás todos tus datos y tus mensajes desaparecerán",
              {
                type: "warning",
              }
            );
          }}
        >
          <Link to="/delete-user">Borrar cuenta</Link>
        </button>
      </section>
    </>
  );
};

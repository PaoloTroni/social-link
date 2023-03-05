import "../css/UsersPage.css"
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUser from "../hooks/useUser";

import { LinksUser } from "../components/LinksUser";

export const UsersPage = () => {
  const { id } = useParams();
  const { user, loading, error } = useUser(id);

  if (loading) return <p>loading user data...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
    <section className="GlobalUsersPage">
        <article className="DatosUsers">
          <p  className="ENombreUsuario" id="Negrita">Nombre de Usuario: <p className="nombreUsuario" id="Regular">{user.info.nombre}</p></p>
          <p className="ECorreoUsuario" id="Negrita">Correo Electronico: <p  className="CorreoUsuario" id="Regular">{user.info.email}</p></p>
          <p className="EBioUsuario" id="Negrita">Biografia: <p className="BioUsuario" id="Regular">{user.info.biography}</p> </p>
        </article>
        <section className="EstructuraFormularioUsersPage">
          <LinksUser id={id} />
        </section>
      </section>
    </>
  );
};

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
      <section>
        <h2>Página de perfil de: {user.info.nombre}</h2>
        <p>Id de usuario: {user.info.id}</p>
        <p>Email: {user.info.email}</p>
        <p>Biografia: {user.info.biography}</p>
        <LinksUser id={id} />
      </section>
    </>
  );
};

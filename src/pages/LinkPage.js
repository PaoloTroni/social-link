import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { SingleLink } from "../components/SingleLink";
import { useLink } from "../hooks/useLink";

export const LinkPage = () => {
  const { id } = useParams();

  const { link, loading, error } = useLink(id);

  if (loading) return <p>cargando link..</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h2>link</h2>
      <SingleLink link={link} />
    </section>
  );
};

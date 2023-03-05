import "../css/LinkUnicoUser.css";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { SingleLink } from "../components/SingleLink";
import { useLink } from "../hooks/useLink";

export const LinkPage = ({ removeLink, addVoteToLink }) => {
  const { id } = useParams();

  const { link, loading, error } = useLink(id);

  if (loading) return <p>cargando link..</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="globalLinkUnicoUser" id="globalLinkUnicoUser">
      <section className="LinkUnicoUser">
        <SingleLink
          link={link}
          removeLink={removeLink}
          addVoteToLink={addVoteToLink}
        ></SingleLink>
      </section>
    </section>
  );
};

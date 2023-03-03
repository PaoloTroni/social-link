import "../css/homePage.css";
import { useContext } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { LinksList } from "../components/LinksList";
import { NewLink } from "../components/NewLink";
import { AuthContext } from "../context/AuthContext";
import { useLinks } from "../hooks/useLinks";

export const HomePage = () => {
  const { links, loading, addLink, removeLink, addVoteToLink, error } =
    useLinks();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando links...</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(links);
  return (
    <section className="homePageGlobal">
      <h2>Aquí están los links publicados</h2>
      {user && <NewLink addLink={addLink} />}
      <LinksList
        links={links}
        removeLink={removeLink}
        addVoteToLink={addVoteToLink}
      />
    </section>
  );
};

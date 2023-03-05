import "../css/singleLink.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { deleteLinkService } from "../services/linksServices";
import { VotarLink } from "./VotarLink";
import { toast } from "react-toastify";

export const SingleLink = ({ link, removeLink, addVoteToLink }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteLink = async (id) => {
    try {
      await deleteLinkService({ id, token });

      if (removeLink) {
        removeLink(id);
      } else {
        navigate("/");

        toast("Link borrado satisfactoriamente");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <section className="SingleLinkGlobal">
        <Link className="TituloSingleLink" to={`/link/${link.id}`}>
          <p id="tituloSingleLink">{link.title}</p>
        </Link>
        <a
          className="linkSingleLink"
          href={`${link.url}`}
          target="_blank"
          rel="noreferrer"
        >
          {link.url}
        </a>

        <article className="datos1">
          <p className="pSingleLink">Creado por:</p>
          <Link className="UserSingleLink" to={`/user/${link.id_user}`}>
            {link.userName}
          </Link>
        </article>

        <article className="datos2">
          <p className="pSingleLink">Fecha:</p>
          <p className="pSingleLink">
            {`${new Date(link.createdLink).toLocaleString()}`}
          </p>
        </article>

        <p className="DescripcionLink">{link.description}</p>

        {link.avgVotos ? (
          <p className="VotosPublicacion">
            Esta publicación tiene una media de votos de{" "}
            {parseInt(link.avgVotos)} estrellas.
          </p>
        ) : (
          <p className="PublicacionNoVoto">
            Esta publicación aún no fue votada.
          </p>
        )}

        {/* Componente de votos representado con estrellas */}

        {user?.id !== link.id_user && (
          <>
            <VotarLink
              idLink={link.id}
              loggedUserVote={link.loggedUserVote}
              addVoteToLink={addVoteToLink}
            />
          </>
        )}

        {/* Botón de borrar link*/}

        {user && user.id === link.id_user && (
          <>
            <button
              className="BorrarLink"
              onClick={() => {
                if (window.confirm("Vas a borrar ese link. Estas seguro?")) {
                  deleteLink(link.id);
                }
              }}
            >
              Borrar link
            </button>
            {error && <p>{error}</p>}
          </>
        )}
      </section>
    </>
  );
};

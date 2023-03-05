import "../css/newLinkPage.css";

import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";
import { sendLinkService } from "../services/linksServices";

export const NewLink = ({ addLink }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setSending(true);
      const data = Object.fromEntries(new FormData(e.target));
      const createdLink = await sendLinkService({ data, token });
      addLink(createdLink);
      setError("");
      e.target.reset();
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="newLinkGlobal">
        <p className="tituloNuevoLink">Nueva Publicación</p>
        <article className="estructuraFormularioNewLink">
          <form className="estructuraFormularioNewLink" onSubmit={handleForm}>
            <fieldset className="estructuraFieldset1">
              <label htmlFor="text"></label>
              <input
                className="inputFormularioNuevoLink"
                type="text"
                id="title"
                name="title"
                required
                placeholder="Título de la Publicación">
              </input>
            </fieldset>

            <fieldset className="estructuraFieldset2">
              <label htmlFor="url"></label>
              <input
                className="inputFormularioNuevoLink"
                type="url"
                id="url"
                name="url"
                required
                placeholder="Pegar Link Aquí">
              </input>
            </fieldset>

            <fieldset className="estructuraFieldset3">
              <label htmlFor="text"></label>
              <input
                className="inputFormularioNuevoLink"
                type="text"
                id="descripcion"
                name="description"
                placeholder="Descripción de la Publicación">
              </input>
            </fieldset>
            <button className="BotonEnviarNuevoLink">Enviar Link</button>
            {sending ? <p>Enviando link</p> : null}
            {error ? <p>{error}</p> : null}
          </form>
        </article>
      </section>
    </>
  );
};

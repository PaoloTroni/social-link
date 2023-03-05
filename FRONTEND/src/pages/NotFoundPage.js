import "../css/NotFound.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { HeaderNoLogin } from "../components/HeaderNoLogin";

export const NotFoundPage = () => {
  const { token } = useContext(AuthContext);
  return (
    <>
      {!token && <HeaderNoLogin />}
      <section className="NotFoundGlobal">
        <section className="NotFound">
          <p className="ErrorNotFound">Error 404: Not Found</p>
          <p>Ooops... esa página no existe</p>
          <Link className="linkNotFound" to={"/"}>
            Volver a la página inicial
          </Link>
        </section>
      </section>
    </>
  );
};

import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section>
      <h2>Error 404: Not Found</h2>
      <p>Ooops...esa página no existe</p>
      <Link to={"/"}>Volver a la página inicial</Link>
    </section>
  );
};

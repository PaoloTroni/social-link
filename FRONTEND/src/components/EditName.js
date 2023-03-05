import "../css/EditName.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editUserService } from "../services/userServices";

export const EditName = () => {
  const { token, user, setUser } = useContext(AuthContext);
  const [newName, setNewName] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {}, [user]);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editUserService({ newName, token });
      setUser({ ...user, nombre: newName });
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="EditNameGlobal">
      <p className="EditNameActual">Nombre actual: {user?.nombre}</p>
      <form className="EEditNameForm" onSubmit={handleForm}>
        <section className="EditNameForm">
          <fieldset>
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nuevo Nombre de Usuario"
              onChange={(e) => setNewName(e.target.value)}
            />
          </fieldset>
        </section>

        <button className="EditNameBoton">Actualizar</button>
        {error && <p>{error}</p>}
        {success && <p>¡Datos actualizados con éxito!</p>}
      </form>
    </section>
  );
};

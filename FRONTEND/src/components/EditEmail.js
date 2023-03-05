import "../css/EditEmail.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editUserService } from "../services/userServices";

export const EditEmail = () => {
  const { token, user, setUser } = useContext(AuthContext);
  const [newEmail, setNewEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {}, [user]);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editUserService({ newEmail, token });
      setUser({ ...user, email: newEmail });
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="EditEmailGlobal">
      <p className="EditEmailActual">
        Correo Electronico actual: {user?.email}
      </p>
      <form className="EEditEmailForm" onSubmit={handleForm}>
        <section className="EditEmailForm">
          <fieldset>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nuevo Correo Electronico"
              required
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </fieldset>
        </section>

        <button className="EditEmailBoton">Actualizar</button>
        {error && <p>{error}</p>}
        {success && <p>¡Datos actualizados con éxito!</p>}
      </form>
    </section>
  );
};

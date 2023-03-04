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
    <section>
      <h2>Actualizar nombre de usuario</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <p>Nombre actual: {user?.nombre}</p>
          <label htmlFor="name"></label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Nuevo nombre"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </fieldset>

        <button>Actualizar</button>
        {error && <p>{error}</p>}
        {success && <p>¡Datos actualizados con éxito!</p>}
      </form>
    </section>
  );
};

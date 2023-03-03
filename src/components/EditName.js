import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editUserService } from "../services/userServices";

export const EditName = () => {
  const { token } = useContext(AuthContext);
  const [newName, setNewName] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editUserService({ newName, token });

      setSuccess(true);
      setNewName("");
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
          <label htmlFor="name">Nuevo nombre de usuario</label>
          <input
            type="name"
            id="name"
            name="name"
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

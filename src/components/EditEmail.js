import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editUserService } from "../services/userServices";

export const EditEmail = () => {
  const { token, user, setUser } = useContext(AuthContext);
  const [newEmail, setNewEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setNewEmail(user.email);
    }
  }, [user]);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editUserService({ newEmail, token });

      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h2>Actualizar e-mail</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Nuevo Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newEmail}
            required
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </fieldset>

        <button>Actualizar</button>
        {error && <p>{error}</p>}
        {success && <p>¡Datos actualizados con éxito!</p>}
      </form>
    </section>
  );
};

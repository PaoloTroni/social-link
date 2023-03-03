import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { editUserService } from "../services/userServices";

export const EditUserPage = () => {
  const { token } = useContext(AuthContext);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editUserService({ newEmail, newName, token });

      setSuccess(true);
      setNewName("");
      setNewEmail("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section>
      <h2>Actualizar datos</h2>
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

        <fieldset>
          <label htmlFor="name">Nuevo NickName</label>
          <input
            type="name"
            id="name"
            name="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </fieldset>
        {/* <fieldset>
          <label htmlFor="bio">Biografia</label>
          <input
            type="text"
            id=""
            name=""
            value={biography}
            required
            onChange={(e) => biografia(e.target.value)}
          />
        </fieldset> */}
        <button>Actualizar</button>
        {error && <p>{error}</p>}
        {success && (
          <p>
            Datos actualizados con éxito! {""}
            <Link to="/login">Ir a Login</Link>
          </p>
        )}
      </form>
    </section>
  );
};

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteUserService } from "../services/userServices";
import { AuthContext } from "../context/AuthContext";

export const DeleteUserPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logOut } = useContext(AuthContext);
  const { token } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await deleteUserService({ password, token });

      setPassword("");
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h2>Te echaremos de menos 😢...</h2>
      <p>Para borrar tu cuenta, por favor, confirma tu contraseña</p>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="password"></label>
          <input
            className="formulario"
            placeholder="Contraseña"
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button onClick={handleForm}>Borrar cuenta</button>

        {error && <p>{error}</p>}
      </form>
      {success && (logOut(), navigate("/register"))}
    </section>
  );
};

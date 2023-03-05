import "../css/deleteUserPage.css"

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
    <section className="DeleteUserGlobal">
      <section className="EDeleteUser">
        <p className="DeleteUserTitulo">Te echaremos de menos 😢...</p>
        <p className="DeleteUserSubTitulo">Para borrar tu cuenta confirma tu contraseña, por favor.</p>
        <form className="EDeleteUserForm" onSubmit={handleForm}>
          <section className="DeleteUserForm">
          <fieldset>
            <label htmlFor="password"></label>
            <input
              className="DeleteUser"
              placeholder="Contraseña"
              type="password"
              id="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>
          </section>
          
          <button className="DeleteUserBoton" onClick={handleForm}>Borrar cuenta</button>

          {error && <p>{error}</p>}
          {success && (logOut(), navigate("/register"))}
        </form>
      </section>   
      
    </section>
  );
};

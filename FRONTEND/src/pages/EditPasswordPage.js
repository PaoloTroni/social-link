import "../css/EditPassPage.css"
import { useContext, useState } from "react";
import { editPassService } from "../services/userServices";
import { AuthContext } from "../context/AuthContext";

export const EditPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editPassService({ password, newPass, confirmNewPass, token });

      setPassword("");
      setSuccess(true);
      setNewPass("");
      setConfirmNewPass("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="EditPassGlobal">
      <section className="EEditPass">
        <p className="EditPassTitulo">Editar contraseña</p>
        <form className="EEditPassForm" onSubmit={handleForm}>
            <section className="EditPassForm">
            <fieldset>
              <label htmlFor="password"></label>
              <input
                className="InputPass"
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Contraseña actual"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="newPass"></label>
              <input
                className="InputPass" 
                type="password"
                id="newPass"
                name="newPass"
                value={newPass}
                placeholder="Contraseña nueva"
                required
                onChange={(e) => setNewPass(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="confirmNewPass"></label>
              <input
                className="InputPass"
                type="password"
                id="confirmNewPass"
                name="confirmNewPass"
                value={confirmNewPass}
                placeholder="Confirmar la nueva contraseña"
                required
                onChange={(e) => setConfirmNewPass(e.target.value)}
              />
            </fieldset>

          </section>
          

          <button className="EditPassBoton">Actualizar</button>
          {error && <p>{error}</p>}
          {success && <p>Contraseña actualizada con éxito.</p>}
        </form>

      </section>
      
    </section>
  );
};

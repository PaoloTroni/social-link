import "../css/EditUserBio.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { editBioService } from "../services/userServices";

export const EditUserBio = () => {
  const { token, user, setUser } = useContext(AuthContext);
  const [bio, setBio] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {}, [user]);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      await editBioService({ biography: bio, token });
      setUser({ ...user, biography: bio });
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="EditBioGlobal">
      <p className="EditBioActual">Biografia actual: {user?.bio}</p>
      <form className="EEditBioForm" onSubmit={handleForm}>
        <section className="EditBioForm">
          <fieldset>
            <label htmlFor="bio"></label>
            <input
              type="text"
              id="bio"
              name="bio"
              placeholder="Nueva Biografia"
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>
        </section>

        <button className="EditBioBoton">Actualizar</button>
        {error && <p>{error}</p>}
        {success && <p>¡Datos actualizados con éxito!</p>}
      </form>
    </section>
  );
};

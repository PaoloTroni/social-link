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
    <section>
      <h2>Actualizar biografía (opcional)</h2>
      <form onSubmit={handleForm}>
        <fieldset>
          <p>Biografia actual: {user?.biography}</p>
          <label htmlFor="bio"></label>
          <input
            type="textarea"
            id="bio"
            name="bio"
            placeholder="Nueva biografía"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </fieldset>

        <button>Actualizar</button>
        {error && <p>{error}</p>}
        {success && <p>¡Datos actualizados con éxito!</p>}
      </form>
    </section>
  );
};

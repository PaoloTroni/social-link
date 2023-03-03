import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { votarLinkService } from "../services/linksServices";

export const VotarLink = ({ idLink, loggedUserVote, addVoteToLink }) => {
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const { token } = useContext(AuthContext);
  console.log(loggedUserVote);
  const handleChange = async (e) => {
    console.log(e.target.value);
    try {
      if (loggedUserVote) {
        return;
      }
      const { avgVotos } = await votarLinkService({
        voto: +e.target.value,
        token,
        idLink,
      });

      addVoteToLink({
        id: idLink,
        newAvgVotos: avgVotos,
        vote: +e.target.value,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setSending(false);
    }
  };

  // const { data, setData } = useState(0);

  // const handleForm = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setSending(true);

  //     const Votar = await votarLinkService({ data, token });

  //     setError("");
  //     e.target.reset();
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setSending(false);
  //   }
  // };

  return (
    <form className="clasificacion">
      {/* <label htmlFor="voto"></label>
      <input
        id="voto"
        type="text"
        name="voto"
        onChange={handleChange}
        required
      /> */}
      <input
        id={`link-${idLink}voto5`}
        type="radio"
        name="voto"
        value="5"
        checked={loggedUserVote === 5}
        onChange={handleChange}
      />
      <label htmlFor={`link-${idLink}voto5`}>★</label>

      <input
        id={`link-${idLink}voto4`}
        type="radio"
        name="voto"
        value="4"
        checked={loggedUserVote === 4}
        onChange={handleChange}
      />
      <label htmlFor={`link-${idLink}voto4`}>★</label>

      <input
        id={`link-${idLink}voto3`}
        type="radio"
        name="voto"
        value="3"
        checked={loggedUserVote === 3}
        onChange={handleChange}
      />
      <label htmlFor={`link-${idLink}voto3`}>★</label>

      <input
        id={`link-${idLink}voto2`}
        type="radio"
        name="voto"
        value="2"
        checked={loggedUserVote === 2}
        onChange={handleChange}
      />
      <label htmlFor={`link-${idLink}voto2`}>★</label>

      <input
        id={`link-${idLink}voto1`}
        type="radio"
        name="voto"
        value="1"
        checked={loggedUserVote === 1}
        onChange={handleChange}
      />
      <label htmlFor={`link-${idLink}voto1`}>★</label>

      {sending && <p>Votando link</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

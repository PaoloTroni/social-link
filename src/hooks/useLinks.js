import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllLinksServices } from "../services/linksServices";

export const useLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);

        const data = await getAllLinksServices(token);
        console.log(data);
        setLinks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLinks();
  }, [token]);

  const addLink = (newLink) => {
    setLinks([newLink, ...links]);
  };

  const removeLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const verLinkUser = (id) => {
    setLinks(links.filter((link) => link.user_id === id.user));
  };

  const addVoteToLink = ({ id, vote, newAvgVotos }) => {
    const index = links.findIndex((link) => link.id === id);
    links[index].avgVotos = newAvgVotos;
    links[index].loggedUserVote = vote;
    setLinks([...links]);
  };

  return {
    links,
    loading,
    addLink,
    removeLink,
    addVoteToLink,
    verLinkUser,
    error,
  };
};

import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getAllLinksServices } from "../services/linksServices";

export const useLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const loadLinks = async () => {
      try {
        setLoading(true);

        const data = await getAllLinksServices(token, searchParams.toString());
        setLinks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLinks();
  }, [token, searchParams]);

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
    setSearchParams,
    searchParams,
    links,
    loading,
    addLink,
    removeLink,
    addVoteToLink,
    verLinkUser,
    error,
  };
};

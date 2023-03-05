import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getSingleLinkService } from "../services/linksServices";

export const useLink = (id) => {
  const [link, setLink] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadLink = async () => {
      try {
        setLoading(true);

        const data = await getSingleLinkService(id, token);

        setLink(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadLink();
  }, [id, token]);

  return { link, loading, error };
};

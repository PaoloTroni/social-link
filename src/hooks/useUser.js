import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getUserDataService } from "../services/userServices";

const useUser = (id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getUserDataService(id, token);
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [id, token]);

  return { user, loading, error };
};
export default useUser;

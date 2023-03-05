import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyUserDataService } from "../services/userServices";

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyUserDataService({ token });
        setUser(data);
      } catch (error) {
        logOut();
      }
    };
    if (token) getUserData();
  }, [token]);

  const logIn = (token) => {
    setToken(token);
  };

  const logOut = () => {
    setToken("");
    setUser(null);
    return navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ token, user, setUser, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

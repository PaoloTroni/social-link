import "../css/loginPage.css";
import logo from "../images/Social-Link.png";
import homePage from "../images/homePage.png";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUserService } from "../services/userServices";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserService({ email, password });

      logIn(data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <section className="global">
        <img
          className="homePage"
          to={"/"}
          src={homePage}
          alt="chicos en el móvil"
        ></img>
        <section className="estructuraFormulario">
          <img className="logo" src={logo} alt="logo"></img>
          <form onSubmit={handleForm}>
            <fieldset>
              <label htmlFor="email"></label>
              <input
                className="formulario"
                placeholder="Correo Electronico"
                type="email"
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="password"></label>
              <input
                className="formulario"
                placeholder="Contraseña"
                type="password"
                id="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>

            <button className="inicioSesion">Iniciar Sesión</button>
            {error ? <p>{error}</p> : null}

            <p className="noTengoCuenta">
              ¿No tienes una cuenta?
              <Link className="registro" to={"/register"}>
                {" "}
                Regístrate{" "}
              </Link>
            </p>
          </form>
        </section>
      </section>
    </>
  );
};

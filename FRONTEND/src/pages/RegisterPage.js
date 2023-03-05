import "../css/registerPage.css";
import { useState } from "react";
import logo from "../images/Social-Link.png";
import register from "../images/registerPage.png";
import { Link, useNavigate } from "react-router-dom";
import { registerUserService } from "../services/userServices";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();

    if (pass1 !== pass2) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      await registerUserService({ email, password: pass1, nombre });

      setSuccess(true);
      setNombre("");
      setEmail("");
      setPass1("");
      setPass2("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="registroGlobal">
      <article className="registroFormulario">
        <img className="logoRegistro" src={logo} alt="logo"></img>
        <p className="mensajeBienvenidaRegistro">
          Regístrate para conseguir los mejores Links
        </p>
        <form className="formularioRegistro" onSubmit={handleForm}>
          <fieldset>
            <label htmlFor="email"></label>
            <input
              className="formulario"
              placeholder="Correo Electronico"
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="name"></label>
            <input
              className="formulario"
              placeholder="Nombre de Usuario"
              type="text"
              id="name"
              name="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="pass1"></label>
            <input
              className="formulario"
              placeholder="Contraseña"
              type="password"
              id="pass1"
              name="pass1"
              value={pass1}
              required
              onChange={(e) => setPass1(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="pass2"></label>
            <input
              className="formulario"
              placeholder="Confirmar Contraseña"
              type="password"
              id="pass2"
              name="pass2"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
            />
          </fieldset>
          <p className="condicionesDePrivacidad">
            Al registrarte, aceptas{" "}
            <Link to={"/legal-notice"}>nuestras Condiciones.</Link> Obtén más
            información sobre cómo recopilamos, usamos y compartimos tu
            información en la política de privacidad.
          </p>
          <button className="registrarse">Regístrate</button>
          {error && <p>{error}</p>}
          {success && navigate("/")}

          <p className="siTengoCuenta">
            ¿Ya estás registrado?{" "}
            <Link className="login" to={"/login"}>
              Inicia sesión aquí
            </Link>
          </p>
        </form>
      </article>
      <article className="registerPage">
        <img src={register} alt="Imagen de registro"></img>
      </article>
    </section>
  );
};

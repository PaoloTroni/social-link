import "../css/aboutUs.css";
import aboutUsLiu from "../images/aboutUsLiu.png";
import aboutUsPaolo from "../images/aboutUsPaolo.png";
import aboutUsFernando from "../images/aboutUsFernando.png";
import React, { useContext } from "react";
import { HeaderNoLogin } from "../components/HeaderNoLogin";
import { AuthContext } from "../context/AuthContext";

export function AboutUs() {
  const { token } = useContext(AuthContext);
  return (
    <>
      {!token && <HeaderNoLogin />}
      <section className="aboutUsGlobal">
        <ul className="estructuraUl">
          <li className="estructuraLi">
            <a
              className="enlaceLinkedin"
              href="https:\\www.linkedin.com/in/fernando-morata-sanchez"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="desarrolladores"
                src={aboutUsFernando}
                alt="Fernando"
              />
              <p className="estructuraP">Fernando Morata</p>
            </a>
          </li>

          <li className="estructuraLi">
            <a
              className="enlaceLinkedin"
              href="https://www.linkedin.com/in/liuemith-sánchez"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="desarrolladores"
                src={aboutUsLiu}
                alt="Liuemith"
              />
              <p className="estructuraP">Liuemith Sanchez</p>
            </a>
          </li>

          <li className="estructuraLi">
            <a
              className="enlaceLinkedin"
              href="https://www.linkedin.com/in/paolo-troni-developer/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="desarrolladores" src={aboutUsPaolo} alt="Paolo" />
              <p className="estructuraP">Paolo Troni</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

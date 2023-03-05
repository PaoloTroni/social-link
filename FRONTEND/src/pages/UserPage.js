import "../css/userPage.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const UserPage = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <section className="DatosUserGlobal">
        {user && (
          <section className="DatosUser">
            <div className="ENameUser" id="black">
              Nombre de Usuario:{" "}
              <p className="NameUser" id="regular">
                {user?.nombre}
              </p>
            </div>
            <div className="EEmailUser" id="black">
              Correo Electronico:{" "}
              <p className="EmailUser" id="regular">
                {user?.email}
              </p>
            </div>
            <div className="EBioUser" id="black">
              Biografia:{" "}
              <p className="BioUser" id="regular">
                {user?.biography}
              </p>
            </div>
          </section>
        )}
        <section className="Botones">
          <button className="Actualizar" id="Formato">
            <Link className="boton" to="/edit-user">
              Actualizar Datos
            </Link>
          </button>
          <button className="ChangePass" id="Formato">
            <Link className="boton" to="/edit-pass">
              Cambiar Contraseña
            </Link>
          </button>
          <button
            className="DeleteCount"
            id="Formato"
            onClick={() => {
              toast(
                "Atención: si borras tu cuenta perderás todos tus datos y tus mensajes desaparecerán",
                {
                  type: "warning",
                }
              );
            }}
          >
            <Link className="boton" to="/delete-user">
              Borrar cuenta
            </Link>
          </button>
        </section>
      </section>
    </>
  );
};

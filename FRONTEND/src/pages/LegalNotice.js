import "../css/legalNotice.css";
import legalNotice from "../images/legalNotice.png";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { HeaderNoLogin } from "../components/HeaderNoLogin";

export function LegalNotice() {
  const { token } = useContext(AuthContext);
  return (
    <>
      {!token && <HeaderNoLogin />}
      <section className="legalNoticeGlobal">
        <section className="ElegalNotice">

        <p className="legalNoticeTitulo">
          Información relativa al cumplimiento del artículo 10 de la LSSICE
        </p>
        <p className="legalNoticeP">
          En nombre del responsable tratamos la información que nos facilita con
          el fin de enviarle publicidad relacionada con nuestros productos y
          servicios por cualquier medio (postal, email o teléfono). Los datos
          proporcionados se conservarán mientras no solicite el cese de la
          actividad. Los datos no se cederán a terceros salvo en los casos en
          que exista una obligación legal. Usted tiene derecho a obtener
          confirmación sobre si en SOCIAL LINKS estamos tratando sus datos
          personales por tanto tiene derecho a acceder a sus datos personales,
          rectificar los datos inexacto o solicitar su supresión cuando los
          datos ya no sean necesarios para los fines que fueron recogidos.
        </p>
        <img className="legalNoticePng" src={legalNotice}></img>

        </section>
        
      </section>
    </>
  );
}

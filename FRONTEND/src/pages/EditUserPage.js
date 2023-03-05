import "../css/EditUserPage.css"
import React from "react";

import { EditName } from "../components/EditName";
import { EditEmail } from "../components/EditEmail";
import { EditUserBio } from "../components/EditUserBio";

export const EditUserPage = () => {
  return (
    <section className="EditUserGlobal">
      <section className="EEditUser">
        <EditName className="EditName" />
        <EditEmail className="EditEmail"/>
        <EditUserBio className="EditBio" />
      </section>
    </section>
  );
};

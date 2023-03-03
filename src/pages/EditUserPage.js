import React from "react";

import { EditName } from "../components/EditName";
import { EditEmail } from "../components/EditEmail";
import { EditUserBio } from "../components/EditUserBio";

export const EditUserPage = () => {
  return (
    <section>
      <EditName />
      <EditEmail />
      <EditUserBio />
    </section>
  );
};

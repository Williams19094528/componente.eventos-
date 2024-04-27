import React from "react";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

function Registro({ onRegistroSubmit }) {
  return (
    <div>
      <h1>Crea una Cuenta </h1>
      <h2>o usa tu Email para registrate </h2>

      <SocialButton />
      <Formulario onSubmit={onRegistroSubmit} />
    </div>
  );
}

export default Registro;

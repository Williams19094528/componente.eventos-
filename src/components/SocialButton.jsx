// SocialButton.jsx

import Registro from "./Registro";

function SocialButton({ icono }) {
  let iconClass = "fab " + icono;

  <Registro></Registro>;
  return (
    <button className="social-button">
      <i className={iconClass}></i>
    </button>
  );
}

export default SocialButton;

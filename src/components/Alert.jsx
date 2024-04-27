// Alert.jsx
import { Alert as BootstrapAlert } from "react-bootstrap";

function Alert({ mensaje, tipo }) {
  return <BootstrapAlert variant={tipo}>{mensaje}</BootstrapAlert>;
}

export default Alert;

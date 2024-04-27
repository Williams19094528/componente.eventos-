// App.jsx
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/Registro";
import Alert from "./components/Alert";

function App() {
  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });

  const handleRegistroSubmit = (registroExitoso) => {
    if (registroExitoso) {
      setAlerta({ mensaje: "¡Registro exitoso!", tipo: "success" });
    } else {
      setAlerta({
        mensaje: "¡Password no coincide,intenta nuevamente!",
        tipo: "danger",
      });
    }
  };

  return (
    <div className="App">
      <Registro onRegistroSubmit={handleRegistroSubmit} />
      <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />
    </div>
  );
}

export default App;

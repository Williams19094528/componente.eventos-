// Formulario.jsx
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SocialButton from "./SocialButton";
import Registro from "./Registro";

function Formulario({ onSubmit }) {
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  // Funciones para actualizar los estados cuando cambian los campos
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContrasenaChange = (event) => {
    setContrasena(event.target.value);
  };

  const handleConfirmacionChange = (event) => {
    setConfirmacion(event.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // Por ejemplo, validar los campos y mostrar un mensaje de éxito o error
    if (emailIsValid(email) && contrasena === confirmacion) {
      onSubmit(true); // Envía true si el formulario es válido
    } else {
      onSubmit(false); // Envía false si el formulario es inválido
    }
  };

  // Función para validar el formato del email
  const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <div
          style={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <SocialButton icono="fa-facebook"></SocialButton>
          <SocialButton icono="fa-instagram"></SocialButton>
          <SocialButton icono="fa-linkedin"></SocialButton>
        </div>
        {/* Campos del formulario */}
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={contrasena}
            onChange={handleContrasenaChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmacion}
            onChange={handleConfirmacionChange}
          />
        </Form.Group>
        <div className="botom">
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Formulario;

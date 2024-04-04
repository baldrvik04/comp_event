import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario({ addAlert }) {
  const [inputs, setInputs] = useState({
    nombre: '',
    email: '',
    password: '',
    password1: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidNombre = /^[a-zA-Z0-9]{4,}$/;
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    if (
      inputs.nombre.trim() === '' ||
      inputs.email === '' ||
      inputs.password === '' ||
      inputs.password1 === ''
    ) {
      addAlert({
        texto: '¡Debes completar todos los campos!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidNombre.test(inputs.nombre)) {
      addAlert({
        texto:
          '¡El nombre debe tener al menos 4 caracteres y no se permiten caracteres especiales!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidEmail.test(inputs.email)) {
      addAlert({
        texto: '¡Formato de email incorrecto!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidPassword.test(inputs.password)) {
      addAlert({
        texto:
          '¡La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (inputs.password !== inputs.password1) {
      addAlert({
        texto: '¡Ambas contraseñas deben ser iguales!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else {
      addAlert({
        texto: '¡Registro creado exitosamente!',
        tipo: 'alert-success',
        estado: true,
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleChange}
            id="nombre"
            type="text"
            placeholder="Nombre"
            value={inputs.nombre}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Tu email"
            value={inputs.email}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="Contraseña"
            value={inputs.password}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={handleChange}
            id="password1"
            type="password"
            placeholder="Confirma tu contraseña"
            value={inputs.password1}
          />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

export default Formulario;

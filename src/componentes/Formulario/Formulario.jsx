import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Formulario({ addAlert }) {
  const [inputs, setInputs] = useState({
    nombre: '',
    email: '',
    password: '',
    password1: '',
  });

  function inputsHandler(e) {
    if (e.target.id === 'nombre') {
      setInputs({ ...inputs, nombre: e.target.value });
    }

    if (e.target.id === 'email') {
      setInputs({ ...inputs, email: e.target.value });
    }

    if (e.target.id === 'password') {
      setInputs({ ...inputs, password: e.target.value });
    }
    if (e.target.id === 'password1') {
      setInputs({ ...inputs, password1: e.target.value });
    }
  }

  function validacionInputs(e) {
    e.preventDefault();

    const isValidNombre = /^[a-zA-Z0-9]{4,}$/;
    const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;


    if (inputs.nombre.trim() === '' || inputs.email === '' || inputs.password === '' || inputs.password1 === '') {
      addAlert({
        texto: 'Debes completar todos los campos!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidNombre.test(inputs.nombre)) {
        addAlert({
          texto: 'El Nombre debe tener minimo 4 caracteres y no se permiten caracteres especiales!',
          tipo: 'alert-danger',
          estado: true,
        });
    } else if (!isValidEmail.test(inputs.email)) {
      addAlert({
        texto: 'Formato de email incorrecto!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (!isValidPassword.test(inputs.password)) {
      addAlert({
        texto: 'La contraseña debe tener minimo 8 caracteres, una letra mayúscula, una letra minúscula y un número!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else if (inputs.password != inputs.password1) {
      addAlert({
        texto: 'Ambas contraseñas deben ser iguales!',
        tipo: 'alert-danger',
        estado: true,
      });
    } else {
      addAlert({
        texto: 'Registro creado exitosamente!',
        tipo: 'alert-success',
        estado: true,
      });
    }
  }

  return (
    <>
      <Form onSubmit={(e) => validacionInputs(e)}>
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="nombre"
            name="Nombre"
            type="text"
            placeholder="Nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="email"
            name="Email"
            type="email"
            placeholder="tuemail@ejemplo.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => inputsHandler(e)}
            id="password1"
            name="password1"
            type="password"
            placeholder="Confirma tu contraseña"
          />
        </Form.Group>

        <Button variant="success w-100" type="submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

export default Formulario;

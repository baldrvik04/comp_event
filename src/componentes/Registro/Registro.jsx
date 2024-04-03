import React from 'react';
import SocialButton from '../SocialButton/SocialButton';
import Formulario from '../Formulario/Formulario.jsx';

export default function Registro({ onAlert }) {
  
  return (
    <>
      <h1>Crea una cuenta</h1>
      <SocialButton button={'fa-facebook'} />
      <SocialButton button={'fa-github'} />
      <SocialButton button={'fa-linkedin'} />
      <p>O usa tu email para registrarte.</p>
      <Formulario addAlert={onAlert} />
    </>
  );
}

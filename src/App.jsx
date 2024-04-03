import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Registro from './componentes/Registro/Registro.jsx';
import Alert from './componentes/Alert/Alert.jsx';
import './App.css';

function App() {
  const [alert, setAlert] = useState({
    texto: '',
    tipo: '',
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);
  };

  return (
    <>
      <Registro onAlert={addAlert} />
      <Alert alerta={alert} />
    </>
  );
}

export default App;

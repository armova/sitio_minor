import logo from './assets/logo.svg';
import mainor from './assets/mainor.jpg';
import { useState } from 'react';
import './App.css';
import ContadorIncremental from './ContadorIncremental';
import Tecnologias from './Tecnologias';

function App() {
  const [contador, setContador] = useState(0);
  setTimeout(() => {
    setContador(contador+4);
  }, 1000);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Imagenes-perfil">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={mainor} className="Foto-perfil" alt="foto" />
       </div>
        <div>

          <ContadorIncremental incremento={1} valorInicial={0} velocidad={1000} />
        </div>
    </header>
    <Tecnologias />
    </div>
  );
}

export default App;

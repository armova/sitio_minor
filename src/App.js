import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [contador, setContador] = useState(0);
  setTimeout(() => {
    setContador(contador+4);
  }, 1000);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>
            Este va a ser el sitio web de Minor Vargas Selles!
          </p>
          <p>
            mi contador javascript {contador}
          </p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  function randomNumber() {
    return setNumber(Math.floor(Math.random() * (100 - 1 + 1) + 1));
  }

  return (
    <div className="App">
      <p>{number}</p>
      <button onClick={randomNumber}>Criar novo número</button>
    </div>
  );
}

export default App;

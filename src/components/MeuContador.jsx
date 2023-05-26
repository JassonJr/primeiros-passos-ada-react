import { useState } from "react";

function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div>
      <h1>Meu Contador</h1>
      <h3>{contador}</h3>
      <button onClick={aumentar}>aumentar</button>
    </div>
  );
}

export default MeuContador;

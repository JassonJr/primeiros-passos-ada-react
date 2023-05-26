import { useState } from "react";

function RenderizacaoCondicional() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }

  if (contador > 5) {
    return (
      <div>
        <h1>Meu Contador Condicional: {contador} </h1>
        <h3>Contador maior que 5</h3>
        <button onClick={aumentar}>aumentar</button>
        <button onClick={diminuir}>diminuir</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Meu Contador Condicional: {contador} </h1>
      {contador > 9 ? <h3>Valor muito grande</h3> : null}
      <button onClick={aumentar}>aumentar</button>
      <button onClick={diminuir}>diminuir</button>
    </div>
  );
}

export default RenderizacaoCondicional;

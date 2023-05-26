import { useState } from "react";
import styles from "./button.module.css";

function MeuContador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      <h3>{contador}</h3>
      <button className={styles.myButton} onClick={aumentar}>
        aumentar
      </button>
    </div>
  );
}

export default MeuContador;

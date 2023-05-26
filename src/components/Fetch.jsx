import { useEffect, useState } from "react";

function Fetch() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const resultadoFinal = resultado.json();
      return resultadoFinal;
    }

    buscarDados().then((res) => setTarefas(res));
  }, []);

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.slice(0, 10).map((tarefa) => {
          return (
            <div key={tarefa.id}>
              <li>
                {tarefa.title} -
                {tarefa.completed ? (
                  <strong> Tarefa concluída</strong>
                ) : (
                  " Incompleta"
                )}
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
}

export default Fetch;

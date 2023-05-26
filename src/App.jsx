import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
import MeuContador from "./components/MeuContador";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional";

function App() {
  return (
    <div>
      <h1>Meu projeto</h1>
      <MeuComponente />
      <MeuBotao conteudo="me clique" />
      <MeuBotao conteudo="depois aqui" />
      <MeuBotao conteudo="e por fim aqui" />
      <MeuContador />
      <RenderizacaoCondicional />
    </div>
  );
}

export default App;

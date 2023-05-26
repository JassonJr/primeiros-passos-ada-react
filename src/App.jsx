import MeuComponente from "./components/MeuComponente";
import MeuBotao from "./components/MeuBotao";
import MeuContador from "./components/MeuContador";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional";
import ListasChaves from "./components/ListasChaves";
import Fetch from "./components/Fetch";

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
      <ListasChaves />
      <Fetch />
    </div>
  );
}

export default App;

import FerramentaDetalhe from "../../shared/components/ferramenta-detalhes/FerramentaDetalhe";
import FerramentaListagem from "../../shared/components/ferramenta-listagem/FerramentasListagem";
import LayoutBasePagina from "../../shared/layouts/LayoutBasePagina";

function Dashboard() {
  return (
    <LayoutBasePagina
      titulo="Página Inicial"
      barraFerramenta={<FerramentaDetalhe mostrarBotaoSalvarFechar />}
    >
      <h1>Em produção...</h1>
    </LayoutBasePagina>
  );
}

export default Dashboard;

import FerramentaListagem from "../../shared/components/ferramenta-listagem/FerramentasListagem";
import LayoutBasePagina from "../../shared/layouts/LayoutBasePagina";

function Dashboard() {
  return (
    <LayoutBasePagina
      titulo="Página Inicial"
      FerramentaListagem={<FerramentaListagem mostrarInputBusca />}
    >
      Testando
    </LayoutBasePagina>
  );
}

export default Dashboard;

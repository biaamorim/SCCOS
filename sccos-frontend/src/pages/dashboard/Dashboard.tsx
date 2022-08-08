import BarraFerramenta from "../../shared/components/barra-ferramenta/BarraFerramenta";
import LayoutBasePagina from "../../shared/layouts/LayoutBasePagina";

function Dashboard() {
  return (
    <LayoutBasePagina
      titulo="Página Inicial"
      barraFerramenta={<>Barra de Feramenta</>}
    >
      Testando
    </LayoutBasePagina>
  );
}

export default Dashboard;

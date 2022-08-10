import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import FerramentasListagem from "../../shared/components/ferramenta-listagem/FerramentasListagem";
import LayoutBasePagina from "../../shared/layouts/LayoutBasePagina";

function ListagemFormulario() {
  const [searchParams, setSearchParams] = useSearchParams();
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  return (
    <LayoutBasePagina
      titulo="Listagem de Ordem de Serviço"
      barraFerramenta={
        <FerramentasListagem
          mostrarInputBusca
          textoBusca={busca}
          aoMudarTextoBusca={(texto) =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
    >
      pppp
    </LayoutBasePagina>
  );
}

export default ListagemFormulario;

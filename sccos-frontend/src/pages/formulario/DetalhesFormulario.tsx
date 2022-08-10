import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FerramentaDetalhe from "../../shared/components/ferramenta-detalhes/FerramentaDetalhe";
import LayoutBasePagina from "../../shared/layouts/LayoutBasePagina";
import {
  FormularioService,
  IFormulario,
} from "../../shared/services/api/api/FormularioService";

function DetalhesFormulario() {
  const { id = "novo" } = useParams<"id">();
  const [rows, setRows] = useState<IFormulario[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [totalCount, setTotalCount] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    setIsLoading(true);

    if (id !== "nova") {
      FormularioService.getAll().then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          navigate("/formulario");
        } else {
          setTotalCount(result.totalCount);
        }
      });
    }
  }, [id]);

  const handleSave = () => {
    console.log("save");
  };
  const handleDelete = () => {
    console.log("Delete");
  };
  return (
    <LayoutBasePagina
      titulo="Detalhes"
      barraFerramenta={
        <FerramentaDetalhe
          mostrarBotaoSalvarFechar
          mostrarBotaoNovo={id !== "novo"}
          mostrarBotaoApagar={id !== "novo"}
          aoClicarEmNovo={() => navigate("/api/cadastro/formulario")}
          aoClicarEmSalvar={handleSave}
          aoClicarEmApagar={handleDelete}
          aoClicarEmVoltar={() => navigate("/formulario")}
        />
      }
    >
      <p>hhhhh {id}</p>
    </LayoutBasePagina>
  );
}

export default DetalhesFormulario;

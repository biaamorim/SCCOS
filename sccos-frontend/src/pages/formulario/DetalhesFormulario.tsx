import { LinearProgress, TextField } from "@mui/material";
import { Form } from "@unform/web";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FerramentaDetalhe from "../../shared/components/ferramenta-detalhes/FerramentaDetalhe";
import VTextField from "../../shared/forms/VTextField";
import LayoutBasePagina from "../../shared/layouts/LayoutBasePagina";
import {
  FormularioService,
  IFormulario,
} from "../../shared/services/api/api/FormularioService";

function DetalhesFormulario() {
  const { id = "novo" } = useParams<"id">();
  const [rows, setRows] = useState<IFormulario[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [totalCount, setTotalCount] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    setIsLoading(true);

    if (id !== "novo") {
      FormularioService.getById(Number(id)).then((result) => {
        setIsLoading(true);
        if (result instanceof Error) {
          alert(result.message);
          navigate("/formulario");
        } else {
          setTotalCount(result.totalCount);
        }
      });
    }
  }, [id]);

  const handleDelete = (id: number) => {
    if (confirm("Reamente quer apagar a Ordem de serviço")) {
      FormularioService.detele(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          setRows((oldRows) => {
            return [...oldRows.filter((oldRow) => oldRow.id !== id)];
          });
          alert("Ordem de serviço apagado com sucesso");
          navigate("/formulario");
        }
      });
    }
  };
  const handleSave = () => {
    console.log("Delete");
  };
  return (
    <LayoutBasePagina
      titulo="Detalhes"
      barraFerramenta={
        <FerramentaDetalhe
          mostrarBotaoSalvarFechar
          mostrarBotaoNovo
          mostrarBotaoApagar
          aoClicarEmNovo={() => navigate("/api/cadastro/formulario")}
          aoClicarEmSalvar={handleSave}
          aoClicarEmApagar={() => handleDelete(Number(3))}
          aoClicarEmVoltar={() => navigate("/formulario")}
        />
      }
    >
      <Form onSubmit={console.log}>
        <VTextField name="nomeOS" />
        <button>Submit</button>
      </Form>
    </LayoutBasePagina>
  );
}

export default DetalhesFormulario;

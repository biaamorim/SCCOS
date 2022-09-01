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
  IServico,
} from "../../shared/services/api/api/FormularioService";

interface FormProps {
  nomeOs: string;
  descricao: string;
  local: string;
  nivel: number;
}

function DetalhesFormulario() {
  const { id } = useParams<"id">();
  const [rows, setRows] = useState<IFormulario[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [totalCount, setTotalCount] = useState(0);
  const [nome, setNome] = useState("");

  useEffect(() => {
    setIsLoading(true);
    FormularioService.getById(Number(id)).then((result) => {
      setIsLoading(true);
      if (result instanceof Error) {
        alert(result.message);
        navigate("/formulario");
      } else {
        setNome(result.nome);
      }
    });
  }, [id]);

  /*const handleSave = (dados: FormProps) => {
    FormularioService.update(Number(id), { id: Number(id), ... dados})
    .then((result) => {
      setIsLoading(false);
      if (result instanceof Error) {
        alert(result.message);
      } else navigate("/api/buscar/formulario/naoresolvida");
    });
  };
  };*/

  return (
    <LayoutBasePagina
      titulo={"Edição de Ordem de serviço"}
      barraFerramenta={
        <FerramentaDetalhe
          mostrarBotaoSalvarFechar
          mostrarBotaoNovo
          mostrarBotaoApagar={false}
          aoClicarEmNovo={() => navigate("/api/cadastro/formulario")}
          aoClicarEmVoltar={() =>
            navigate("/api/buscar/formulario/naoresolvida")
          }
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

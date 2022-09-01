import { LinearProgress, TextField } from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { useEffect, useRef, useState } from "react";
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
  id: number;
  idServico: IServico;
  nomeOS: string;
  nivel: number;
  datahorasolicitacao?: string;
  descricao: string;
  local: string;
  created_at?: string;
  updated_at?: string;
}

function DetalhesFormulario() {
  const [rows, setRows] = useState<IFormulario[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [totalCount, setTotalCount] = useState(0);
  const [nome, setNome] = useState("");

  const formRef = useRef<FormHandles>(null);

  const handleSave = (dados: FormProps) => {
    setIsLoading(true);
    FormularioService.create(dados).then((result) => {
      setIsLoading(false);
      if (result instanceof Error) {
        alert(result.message);
      } else {
        navigate(`/api/buscar/formulario/${result}`);
      }
    });
  };

  return (
    <LayoutBasePagina
      titulo="Cadastro de Ordem de Serviço"
      barraFerramenta={
        <FerramentaDetalhe
          mostrarBotaoSalvarFechar
          mostrarBotaoNovo={false}
          mostrarBotaoApagar={false}
          aoClicarEmSalvar={() => formRef.current?.submitForm()}
          aoClicarEmSalvarFechar={() => formRef.current?.submitForm()}
          aoClicarEmVoltar={() =>
            navigate("/api/buscar/formulario/naoresolvida")
          }
        />
      }
    >
      <Form ref={formRef} onSubmit={handleSave}>
        <VTextField placeholder="Nome da Ordem de Serviço" name="nomeOS" />
        <VTextField placeholder="Descrição" name="descricao" />
        <VTextField placeholder="Local" name="local" />
        <VTextField placeholder="Nível de Urgência" name="nivel" />
        <VTextField placeholder="Id servidor" name="idServidor" />
      </Form>
    </LayoutBasePagina>
  );
}

export default DetalhesFormulario;
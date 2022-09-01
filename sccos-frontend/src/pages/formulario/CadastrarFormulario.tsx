import {
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";
import { Box } from "@mui/system";
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
        <Box
          margin={2}
          display="flex"
          flexDirection="column"
          component={Paper}
          variant="outlined"
        >
          <Grid container direction="column" padding={2} spacing={2}>
            <Grid item>
              <Typography variant="h6">Geral</Typography>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={10} sm={8} md={6} lg={4} xl={10} display="flex">
                <VTextField
                  fullWidth
                  label="Nome da Ordem de Serviço"
                  name="nomeOS"
                />
                <Grid item xs={5} padding={2} paddingTop={0}>
                  <VTextField fullWidth label="Local" name="local" />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={6} sm={8} md={6} lg={4} xl={7} display="flex">
                <VTextField fullWidth label="Descrição" name="descricao" />
              </Grid>
              <Grid
                item
                xs={5}
                padding={2}
                paddingTop={0}
                flexDirection="column"
              >
                <VTextField fullWidth label="Nível de Urgência" name="nivel" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </LayoutBasePagina>
  );
}

export default DetalhesFormulario;

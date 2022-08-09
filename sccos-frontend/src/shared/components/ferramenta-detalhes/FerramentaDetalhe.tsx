import { Box, Button, Paper, Icon, Divider } from "@mui/material";
import styles from "../../../ui/styles/ferramenta-detalhe/FerramentaDetalhe.module.scss";

interface IFerramentaDetalheProps {
  mostrarBotaoNovo?: boolean;
  mostrarBotaoVoltar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarVoltar?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmVoltar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEVoltar?: () => void;
}

function FerramentaDetalhe({
  mostrarBotaoNovo = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoSalvarVoltar = false,
  aoClicarEmNovo,
  aoClicarEmVoltar,
  aoClicarEmApagar,
  aoClicarEmSalvar,
  aoClicarEmSalvarEVoltar,
}: IFerramentaDetalheProps) {
  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      component={Paper}
      className={styles.container}
    >
      {mostrarBotaoSalvar && (
        <Button
          className={styles.button}
          variant="contained"
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvar}
        >
          <p>Salvar</p>
        </Button>
      )}

      {mostrarBotaoSalvarVoltar && (
        <Button
          className={styles.button}
          variant="contained"
          startIcon={<Icon>save</Icon>}
          onClick={aoClicarEmSalvarEVoltar}
        >
          <p>Salvar e Voltar</p>
        </Button>
      )}

      {mostrarBotaoApagar && (
        <Button
          className={styles.button}
          variant="contained"
          startIcon={<Icon>delete</Icon>}
          onClick={aoClicarEmApagar}
        >
          <p>Apagar</p>
        </Button>
      )}

      {mostrarBotaoNovo && (
        <Button
          className={styles.button}
          variant="contained"
          startIcon={<Icon>add</Icon>}
          onClick={aoClicarEmNovo}
        >
          <p>Novo</p>
        </Button>
      )}

      {mostrarBotaoVoltar && (
        <Button
          className={styles.button}
          variant="contained"
          startIcon={<Icon>arrow_back</Icon>}
          onClick={aoClicarEmVoltar}
        >
          <p>Voltar</p>
        </Button>
      )}
    </Box>
  );
}

export default FerramentaDetalhe;

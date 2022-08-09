import { Button, TextField, Box, Paper, Icon } from "@mui/material";
import styles from "../../../ui/styles/ferramenta-listagem/FerramentaListagem.module.scss";

interface IFerramentasListagemProps {
  textoBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

function FerramentasListagem({
  textoBusca = "",
  mostrarInputBusca = false,
  aoMudarTextoBusca,
  textoBotaoNovo = "Novo",
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
}: IFerramentasListagemProps) {
  return (
    <Box component={Paper} className={styles.container}>
      {mostrarInputBusca && (
        <TextField
          size="medium"
          placeholder="Pesquise uma Ordem de Serviço"
          className={styles.textField}
          value={textoBusca}
          onChange={(e) => aoMudarTextoBusca?.(e.target.value)}
        />
      )}
      <Box flex={1} display="flex" justifyContent="end">
        {mostrarBotaoNovo && (
          <Button
            className={styles.button}
            variant="contained"
            startIcon={<Icon>add</Icon>}
            onClick={aoClicarEmNovo}
          >
            <p>{textoBotaoNovo}</p>
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default FerramentasListagem;

import {
  Icon,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import FerramentasListagem from "../../shared/components/ferramenta-listagem/FerramentasListagem";
import useDebounce from "../../shared/hooks/useDebounce";
import LayoutBasePagina from "../../shared/layouts/LayoutBasePagina";
import {
  FormularioService,
  IFormulario,
} from "../../shared/services/api/api/FormularioService";

function ListagemFormulario() {
  const [searchParams, setSearchParams] = useSearchParams();
  const debounce = useDebounce();
  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);

  const [rows, setRows] = useState<IFormulario[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      FormularioService.getAll().then((result) => {
        if (result instanceof Error) {
          alert(result.message);
        } else {
          console.log(result.data[0].nomeOS);
          setRows(result.data);
          setTotalCount(result.totalCount);
        }
      });
    });
  }, [busca]);
  useEffect(() => {
    FormularioService.getFormularioNResolvido().then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        console.log(result.data[0].nomeOS);
      }
    });
  }, [busca]);
  useEffect(() => {
    FormularioService.getFormularioResolvido().then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        console.log(result.data[0].nomeOS);
      }
    });
  }, [busca]);
  useEffect(() => {
    FormularioService.getFormularioPorServidor().then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        console.log(result.data[0].idServico);
      }
    });
  }, [busca]);

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
        }
      });
    }
  };

  return (
    <LayoutBasePagina
      titulo="Listagem de Ordem de Serviço"
      barraFerramenta={
        <FerramentasListagem
          mostrarInputBusca
          aoClicarEmNovo={() => navigate("/api/cadastro/formulario")}
          textoBusca={busca}
          aoMudarTextoBusca={(texto) =>
            setSearchParams({ busca: texto }, { replace: true })
          }
        />
      }
    >
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome da Os</TableCell>
              <TableCell>Nivel da Os</TableCell>
              <TableCell>Local</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.nomeOS}</TableCell>
                <TableCell>{row.nivel}</TableCell>
                <TableCell>{row.local}</TableCell>
                <TableCell>{row.datahorasolicitacao}</TableCell>
                <TableCell>
                  <IconButton size="small" onClick={() => handleDelete(row.id)}>
                    <Icon>delete</Icon>
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() =>
                      navigate(`/api/atualizar/formulario/${row.id}`)
                    }
                  >
                    <Icon>edit</Icon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutBasePagina>
  );
}

export default ListagemFormulario;

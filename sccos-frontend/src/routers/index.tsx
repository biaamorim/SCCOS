import { Button } from "@mui/material";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDrawerContext } from "../shared/contexts/DrawerContext";

function AppRouter() {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();
  useEffect(() => {
    setDrawerOptions([
      {
        label: "Página Inicial",
        icon: "home",
        path: "/pagina-inicial",
      },
      {
        label: "Cadastro",
        icon: "add",
        path: "/pagina-cadastro",
      },
      {
        label: "Listagem de Ordem de Serviço",
        icon: "list",
        path: "/pagina-de-listagem",
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleDrawerOpen}
          >
            Teste
          </Button>
        }
      />

      {/*<Route path="*" element={<Navigate to="/pagina-inicial" />} />*/}
    </Routes>
  );
}

export default AppRouter;

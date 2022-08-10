import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import DetalhesFormulario from "../pages/formulario/DetalhesFormulario";
import ListagemFormulario from "../pages/formulario/ListagemFormulario";
import { useDrawerContext } from "../shared/contexts/DrawerContext";

function AppRouter() {
  const { setDrawerOptions } = useDrawerContext();
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
        path: "/api/cadastro/formulario",
      },
      {
        label: "Listagem de Ordem de Serviço",
        icon: "list",
        path: "/formulario",
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/formulario" element={<ListagemFormulario />} />
      <Route path="/api/atualizar/formulario/:id" element={<p>Detalhe</p>} />
      <Route path="/api/cadastro/formulario" element={<DetalhesFormulario />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}

export default AppRouter;

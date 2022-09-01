import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import CadastrarFormulario from "../pages/formulario/CadastrarFormulario";
import DetalhesFormulario from "../pages/formulario/DetalhesFormulario";
import ListagemFormulario from "../pages/formulario/ListagemFormulario";
import ListagemFormularioNResolvida from "../pages/formulario/ListagemFormularioNResolvida";
import ListagemFormularioResolvido from "../pages/formulario/ListagemFormularioResolvido";
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
      {
        label: "Listagem de Ordem de Serviço não resolvida",
        icon: "list",
        path: "/api/buscar/formulario/naoresolvida",
      },
      {
        label: "Listagem de Ordem de Serviço resolvida",
        icon: "list",
        path: "/api/buscar/formulario/resolvido",
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="/formulario" element={<ListagemFormulario />} />

      <Route
        path="/api/atualizar/formulario/:id"
        element={<DetalhesFormulario />}
      />
      <Route
        path="/api/cadastro/formulario"
        element={<CadastrarFormulario />}
      />

      <Route
        path="/api/buscar/formulario/naoresolvida"
        element={<ListagemFormularioNResolvida />}
      />

      <Route
        path="/api/buscar/formulario/resolvido"
        element={<ListagemFormularioResolvido />}
      />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}

export default AppRouter;

import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="secondary">
            Teste
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
}

export default AppRouter;

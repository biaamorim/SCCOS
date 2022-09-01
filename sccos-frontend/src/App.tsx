import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers";
import Header from "./shared/components/header/Header";
import MenuLateral from "./shared/components/menu/MenuLateral";
import DrawerProvider from "./shared/contexts/DrawerContext";
import AuthProvider from "./shared/contexts/AuthContext";
import Login from "./shared/components/Login/Login";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <BrowserRouter>
          <DrawerProvider>
            <MenuLateral>
              <AppRouter />
            </MenuLateral>
          </DrawerProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;

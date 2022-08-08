import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers";
import Header from "./shared/components/header/Header";
import MenuLateral from "./shared/components/menu/MenuLateral";
import DrawerProvider from "./shared/contexts/DrawerContext";
import { LightTheme } from "./shared/themes";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <DrawerProvider>
          <MenuLateral>
            <AppRouter />
          </MenuLateral>
        </DrawerProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

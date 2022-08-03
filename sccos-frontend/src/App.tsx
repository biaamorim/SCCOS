import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers";
import MenuLateral from "./shared/components/menu/MenuLateral";
import DrawerProvider from "./shared/contexts/DrawerContext";
import { LightTheme } from "./shared/themes";

function App() {
  return (
    <DrawerProvider>
      <BrowserRouter>
        <MenuLateral>
          <AppRouter />
        </MenuLateral>
      </BrowserRouter>
    </DrawerProvider>
  );
}

export default App;

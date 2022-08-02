import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers";
import { LightTheme } from "./shared/themes";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

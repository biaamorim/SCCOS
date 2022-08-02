import { createTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: green[200],
      dark: green[300],
      light: green[200],
      contrastText: "#000000",
    },
    secondary: {
      main: grey[300],
      dark: grey[400],
      light: grey[300],
      contrastText: "#000000",
    },

    background: {
      paper: "FFFFFF",
      default: "E8E5E5",
    },
  },
});

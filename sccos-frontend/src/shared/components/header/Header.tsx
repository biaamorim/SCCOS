import {
  AppBar,
  Box,
  FormGroup,
  Icon,
  IconButton,
  Switch,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { ReactNode } from "react";
import styles from "../../../ui/styles/AppBar.module.scss";

interface Props {
  children?: ReactNode;
}

function Header({ children }: Props) {
  const theme = useTheme();
  return (
    <Box>
      <AppBar position="absolute" color="default" className={styles.appBar}>
        <Toolbar>
          <Box>
            <Typography variant="h6" paddingLeft={27}>
              Controle de Manutenção
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";
import styles from "../../ui/styles/LayoutBasePags.module.scss";
import { useDrawerContext } from "../contexts/DrawerContext";

interface LayoutBasePaginaProps {
  children: ReactNode;
  titulo: string;
  FerramentaListagem: ReactNode;
}

function LayoutBasePagina({
  children,
  titulo,
  FerramentaListagem,
}: LayoutBasePaginaProps) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        className={styles.container}
      >
        <Box
          padding={1}
          height={theme.spacing(12)}
          display="flex"
          alignItems="center"
          gap={1}
        >
          {smDown && (
            <IconButton onClick={toggleDrawerOpen}>
              <Icon>menu</Icon>
            </IconButton>
          )}
          <Typography variant="h5">{titulo}</Typography>
        </Box>
        <Box>{FerramentaListagem}</Box>
        <Box>{children}</Box>
      </Box>
    </>
  );
}

export default LayoutBasePagina;

import {
  useTheme,
  Drawer,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Icon,
  useMediaQuery,
} from "@mui/material";
import { yellow } from "@mui/material/colors";
import React, { ReactNode } from "react";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useDrawerContext } from "../../contexts/DrawerContext";
import styles from "../../../ui/styles/MenuLateral.module.scss";

interface Props {
  children: ReactNode;
}
interface ListProps {
  label: string;
  icon: string;
  route: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<ListProps> = ({ label, icon, route, onClick }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(route);
  const macth = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(route);
    onClick?.();
  };
  return (
    <ListItemButton onClick={handleClick} selected={!!macth}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

function MenuLateral({ children }: Props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { isDrawerOpen, toggleDrawerOpen, drawerOption } = useDrawerContext();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(10)}
            display="flex"
            alignItems="left"
            justifyContent="left"
            padding={theme.spacing(4)}
          >
            <Avatar
              src="/assets/react.svg"
              sx={{ height: theme.spacing(8), width: theme.spacing(8) }}
            />
            <Box padding={theme.spacing(4)}>Nome</Box>
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {drawerOption.map((drawerOption) => (
                <ListItemLink
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  route={drawerOption.path}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
}

export default MenuLateral;

import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { useAuthContext } from "../../contexts";

interface LoginProps {
  children: ReactNode;
}

function Login({ children }: LoginProps) {
  const { isAuthenticade, login } = useAuthContext();

  if (isAuthenticade) return <>{children}</>;
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box justifyContent="center">
        <Button
          variant="contained"
          onClick={() => login("ssabaasf@gmail.com", "28051972")}
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
}

export default Login;

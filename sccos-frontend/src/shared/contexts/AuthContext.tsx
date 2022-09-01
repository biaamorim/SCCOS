import { Password } from "@mui/icons-material";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AuthService } from "../services/api/api/auth/AuthService";

interface AuthContextProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  isAuthenticade: boolean;
  lougout: () => void;
  login: (email: string, password: string) => Promise<string | void>;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthContextProviderProps) {
  const [accessToken, setAccessToken] = useState<string>();

  useEffect(() => {
    const accessToken = localStorage.getItem("APP_ACCESS_TOKEN");
    if (accessToken) {
      setAccessToken(JSON.parse(accessToken));
    } else {
      setAccessToken(undefined);
    }
  }, []);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await AuthService.auth(email, password);
    if (result instanceof Error) {
      return result.message;
    } else {
      localStorage.setItem(
        "APP_ACCESS_TOKEN",
        JSON.stringify(result.accessToken)
      );
      setAccessToken(result.accessToken);
    }
  }, []);

  const handleLougout = useCallback(() => {
    localStorage.removeItem("APP_ACCESS_TOKEN");
    setAccessToken(undefined);
  }, []);

  const isAuthenticade = useMemo(() => !!accessToken, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        lougout: handleLougout,
        login: handleLogin,
        isAuthenticade,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

interface IDrawerContext {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOption: IDrawerOption[];
  setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

interface DrawerContextProviderProps {
  children: ReactNode;
}

interface IDrawerOption {
  icon: string;
  path: string;
  label: string;
}

const DrawerContext = createContext({} as IDrawerContext);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

function DrawerProvider({ children }: DrawerContextProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOption, setDrawerOptions] = useState<IDrawerOption[]>([]);
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);
  const handleDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOption[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );
  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawerOpen,
        drawerOption,
        setDrawerOptions: handleDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export default DrawerProvider;

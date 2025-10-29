import { getMenu } from "@/services/api";
import type { MenuContextType, MenuItems } from "@/types/menu";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const MenuContext = createContext<MenuContextType | null>(null);

export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenuContext must be within a MenuProvider");
  return context;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<MenuItems>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenu();
        setMenu(data);
      } catch (err) {
        console.error("Failed to load menu", err);
        setError("Failed to load menu");
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const value: MenuContextType = useMemo(
    () => ({ menu, loading, error }),
    [menu, loading, error]
  );

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

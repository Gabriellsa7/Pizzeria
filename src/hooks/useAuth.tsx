import { supabase } from "@/services/supabase";
import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  user: any; // Defina o tipo do usuário conforme sua aplicação
  setUser: (user: any) => void;
}

const initialAuthContext: AuthContextType = {
  user: null,
  setUser: () => {},
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

interface Props {
  children: ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<any>(null); // Defina o tipo do usuário conforme sua aplicação

  useEffect(() => {
    const fetchUser = async () => {
      const user = supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

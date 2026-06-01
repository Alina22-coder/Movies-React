import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import { getAccount } from "../services/api.service";

interface AuthContextType {
  user: IUser | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getAccount().then((data) => {
      if (data.id) setUser(data);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

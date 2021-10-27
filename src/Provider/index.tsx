import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ProviderProps {
  children: ReactNode;
}

export const Provider = ({ children }: ProviderProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

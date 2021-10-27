import { createContext, ReactNode, useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

export const Authcontext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

interface AuthProps {
  children: ReactNode;
}

interface AuthProviderData {
  singIn: (userData: userData) => void;
  logout: () => void;
}

interface userData {
  email: string;
  password: string;
}

export const AuthProvider = ({ children }: AuthProps) => {
  const history = useHistory();

  const [authToken, setAuthToken] = useState(
    localStorage.getItem("token") || ""
  );

  const singIn = (userData: userData) => {
    axios
      .post("https://kenziehub.herokuapp.com/sessions", userData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        setAuthToken(response.data.token);
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.clear();
    setAuthToken("");
    history.push("/");
  };
  return (
    <Authcontext.Provider value={{ singIn, logout }}>
      {children}
    </Authcontext.Provider>
  );
};

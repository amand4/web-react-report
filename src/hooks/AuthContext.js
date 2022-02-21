import React, { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const dataKey = "@AppReportVehicle:token";
  const userStorageKey = "@AppReportVehicle:user";
  const [data, setData] = useState(() => {
    const token = localStorage.getItem(dataKey);
    const userStorage = localStorage.getItem(userStorageKey);
    if (token) {
      return { token: token, user: JSON.parse(userStorage) };
    }

    return {};
  });

  const signIn = useCallback(async ({ name, password }) => {
    const response = await api.post("/login", {
      name,
      password,
    });

    const { token, user } = response.data;

    const userLogado = {
      name: user.name,
      id: user.id,
    };

    localStorage.setItem(dataKey, token);
    localStorage.setItem(userStorageKey, JSON.stringify(userLogado));

    setData({ token: token, user: userLogado });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(dataKey);
    localStorage.removeItem(userStorageKey);

    setData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        token: data.token,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };

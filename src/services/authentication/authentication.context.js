import React, { createContext, useState } from "react";
import { loginRequest } from "./authentication.services";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isLoading,
        error,
        user,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

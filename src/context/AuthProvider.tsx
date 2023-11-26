import React, { useState, createContext, ReactNode } from "react";
import { authUser, AuthData } from "../interfaces";
import axios from "axios";

export type UserContextData = {
  auth: authUser;
  loading: boolean;
  login: (user: AuthData) => void;
  logout: () => void;
  errors: string;
};

const initialAuthValues = {
  username: "",
  name: "",
  lastname: "",
  roles: [],
  token_type: "",
  access_token: "",
  expires_in: 0,
  refresh_token: "",
};

const url = "https://www.mockachino.com/06c67c77-18c4-45/login";

const token = localStorage.getItem("token");

const AuthContext = createContext<UserContextData | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState(initialAuthValues);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const login = async (userData: AuthData) => {
    setErrors("");
    setLoading(true);
    if (token) {
      setLoading(false);
      return;
    }

    const { email, password } = userData;

    if ([email, password].includes("")) {
      setErrors("All fields are required");
      setLoading(false);
      return;
    }

    // As this is a simulated sign in, these user data is not gonna be sent to the endpoint,
    // a GET Method is being used instead.
    const user = {
      email,
      password,
    };

    try {
      const { data } = await axios(url);
      localStorage.setItem("token", data.access_token);
      const userName = `${data.name} ${data.lastname}`;
      localStorage.setItem("userAuthenticated", userName);
      setAuth(data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data.message;
        setErrors(errorMessage);
      } else if (typeof error === "string") {
        setErrors(error);
      } else if (error instanceof Error) {
        setErrors(error.message);
      } else {
        console.log(error);
      }
    }
    setLoading(false);
  };

  const logout = () => {
    setAuth(initialAuthValues);
    localStorage.removeItem("token");
    localStorage.removeItem("userAuthenticated");
  };

  const contextValue: UserContextData = {
    auth,
    loading,
    login,
    logout,
    errors,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;

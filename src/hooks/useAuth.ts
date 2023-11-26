import { useContext } from "react";
import AuthContext, { UserContextData } from "../context/AuthProvider";

const useAuth = () => {
  const context = useContext(AuthContext) as UserContextData;

  return context;
};

export default useAuth;

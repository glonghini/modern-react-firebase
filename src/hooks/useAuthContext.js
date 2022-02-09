import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// Creating a custom hook just to handle errors

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  // In case we try to access this hook outside the provider
  if (!context) {
    throw Error('useAuthContext must be inside an AuthContextProvider')
  }

  return context
}
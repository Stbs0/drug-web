import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";

const useAuth = () => {
  const { user, loading } = useContext(AuthContext);
  return { user, loading };
};
export default useAuth;

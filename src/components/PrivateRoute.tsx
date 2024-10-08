import { Navigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import SpinnerIcon from "@/assets/icons/SpinnerIcon";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { loading, user } = useAuth();
  const { toast } = useToast();
  useEffect(() => {
    if (!user && !loading) {
      console.log("first");
      toast({
        title: "Please Log In",
        description: "You need to be logged in to view this page.",
        variant: "destructive",
      });
    }
  }, [user, loading]);

  if (loading) {
    return <SpinnerIcon />;
  }

  if (user) {
    return children;
  }

  return (
    <Navigate
      replace
      to='/log-in'
    />
  );
};

export default PrivateRoute;

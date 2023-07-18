import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedAdminProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedAdminProps) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")!);

  useEffect(() => {
    if (!user) {
      navigate("/adminlogin");
    } else {
      navigate("/admin");
    }
  }, [user]);

  return <>{children}</>;
};

export const ProtectedAdmin = ({ children }: ProtectedAdminProps) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")!);
  useEffect(() => {
    if (!user) {
      navigate("/adminlogin");
    } else {
      navigate("/admin");
    }
  }, [user]);

  return <>{children}</>;
};

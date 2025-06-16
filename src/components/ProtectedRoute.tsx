import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/store/authStore";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token || !user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return <Outlet />;
}

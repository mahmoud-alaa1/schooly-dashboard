import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/store/authStore";
import { toast } from "sonner";
import { loginsService } from "@/services/authServices";
import { useNavigate } from "react-router-dom";
export default function useLogin() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: loginsService,
    onSuccess: (data) => {
      navigate("/");
      localStorage.setItem("token", data.token);
      login(data.data);
      toast.success("تم تسجيل الدخول بنجاح");
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
  });
  return mutation;
}

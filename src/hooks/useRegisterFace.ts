import { registerFaceService } from "@/services/registerFace";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRegisterFace() {
  return useMutation({
    mutationFn: async (data: FormData) => registerFaceService(data),
    onSuccess: (data) => {
      toast.success("تم تسجيل الوجه بنجاح");
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

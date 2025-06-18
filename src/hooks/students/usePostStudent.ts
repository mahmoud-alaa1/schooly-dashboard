import { postStudent } from "@/services/studentsServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostStudent() {
  return useMutation({
    mutationFn: postStudent,
    onSuccess: (data) => {
      console.log(data);
      toast.success("تم تسجيل الطالب بنجاح");
    },
    onError: (error) => {
      toast.error(`${error.message}`);
      console.error(error);
    },
  });
}

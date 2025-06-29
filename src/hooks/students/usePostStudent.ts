import { postStudent } from "@/services/studentsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useTableQueries from "../useTableQueries";

export default function usePostStudent() {
  const result = useTableQueries("students");

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postStudent,
    onSuccess: (data) => {
      toast.success("تم تسجيل الطالب بنجاح");
      queryClient.invalidateQueries({
        queryKey: ["students", JSON.stringify(result)],
      });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

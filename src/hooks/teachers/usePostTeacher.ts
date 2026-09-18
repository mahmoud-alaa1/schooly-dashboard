import { postTeacher } from "@/services/teachersServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useTableQueries from "../useTableQueries";

export default function usePostTeacher() {
  const queryClient = useQueryClient();
  const result = useTableQueries("teachers");

  return useMutation({
    mutationFn: postTeacher,
    onSuccess: (data) => {
      toast.success("تم تسجيل المعلم بنجاح");
      queryClient.invalidateQueries({
        queryKey: ["teachers", JSON.stringify(result)],
      });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

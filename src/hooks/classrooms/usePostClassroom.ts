import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import useTableQueries from "../useTableQueries";
import { postClassroom } from "@/services/classroomsServices";

export default function usePostClassroom() {
  const queryClient = useQueryClient();
  const result = useTableQueries("classrooms");

  return useMutation({
    mutationFn: postClassroom,
    onSuccess: (data) => {
      toast.success("تم تسجيل الفصل بنجاح");
      queryClient.invalidateQueries({
        queryKey: ["classrooms", JSON.stringify(result)],
      });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

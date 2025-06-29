import { putClassroom } from "@/services/classroomsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useEditClassroom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: IClassroomPutData) => putClassroom(data),
    onSuccess: (data) => {
      toast.success("تم تحديث بيانات الفصل بنجاح");

      queryClient.refetchQueries({ queryKey: ["classrooms"], exact: false });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

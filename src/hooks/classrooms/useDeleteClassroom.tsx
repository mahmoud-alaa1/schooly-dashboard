import { deleteClassroom } from "@/services/classroomsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteClassroom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => await deleteClassroom(id),
    onSuccess: () => {
      toast.success("تم حذف الفصل بنجاح");

      queryClient.refetchQueries({ queryKey: ["classrooms"], exact: false });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

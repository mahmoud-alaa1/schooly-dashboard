import { deleteTeacher } from "@/services/teachersServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteTeacher() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => await deleteTeacher(id),
    onSuccess: () => {
      toast.success("تم حذف المعلم بنجاح");

      queryClient.refetchQueries({ queryKey: ["teachers"], exact: false });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
      console.error(error);
    },
  });
}

import { deleteStudent } from "@/services/studentsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => await deleteStudent(id),
    onSuccess: () => {
      toast.success("تم حذف الطالب بنجاح");

      queryClient.refetchQueries({ queryKey: ["students"], exact: false });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

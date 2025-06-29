import { editStudent } from "@/services/studentsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useEditStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: IStudentPutData) => editStudent(data),
    onSuccess: (data) => {
      toast.success("تم تحديث بيانات الطالب بنجاح");

      queryClient.refetchQueries({ queryKey: ["students"], exact: false });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

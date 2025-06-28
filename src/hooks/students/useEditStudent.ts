import { editStudent } from "@/services/studentsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useEditStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { data: IStudentPostData; id: string }) =>
      editStudent(data),
    onSuccess: (data) => {
      console.log(data);
      toast.success("تم تعديل بيانات الطالب بنجاح");
      queryClient.invalidateQueries({
        queryKey: ["students"],
      });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
      console.error(error);
    },
  });
}

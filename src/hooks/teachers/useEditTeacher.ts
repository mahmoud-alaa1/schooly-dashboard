import { editTeacher } from "@/services/teachersServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useEditTeacher() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ITeacherPutData) => editTeacher(data),
    onSuccess: (data) => {
      console.log(data);
      toast.success("تم تحديث بيانات المعلم بنجاح");

      queryClient.refetchQueries({ queryKey: ["teachers"], exact: false });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
      console.error(error);
    },
  });
}

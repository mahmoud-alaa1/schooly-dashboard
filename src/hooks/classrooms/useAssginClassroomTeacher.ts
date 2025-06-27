import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { assginClassroomTeacher } from "@/services/classroomsServices";

export default function useAssginClassroomTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { TeacherId: string; ClassRoomId: string }) =>
      assginClassroomTeacher(data),
    onSuccess: (data) => {
      console.log(data.message);
      toast.success("تم تسجيل الفصل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["classrooms"] });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
      console.error(error);
    },
  });
}

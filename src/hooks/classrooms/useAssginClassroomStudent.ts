import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { assginClassroomStudent } from "@/services/classroomsServices";

export default function useAssginClassroomStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { StudentId: string; ClassRoomId: string }) =>
      assginClassroomStudent(data),
    onSuccess: (data) => {
      toast.success("تم تسجيل الفصل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["classrooms"] });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

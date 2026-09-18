import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { unAssginClassroomStudent } from "@/services/classroomsServices";

export default function useUnAssginClassroomStudent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { StudentId: string; ClassRoomId: string }) =>
      unAssginClassroomStudent(data),
    onSuccess: (data) => {
      toast.success("تم حذف الفصل بنجاح");
      queryClient.invalidateQueries({ queryKey: ["classrooms"] });
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    },
  });
}

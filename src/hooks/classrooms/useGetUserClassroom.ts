import { getUserClassrooms } from "@/services/classroomsServices";
import { useAuth } from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserClassroom() {
  const id = useAuth((state) => state.user?.id);
  return useQuery({
    queryKey: id ? ["classroom", id] : ["classroom"],
    queryFn: getUserClassrooms,
  });
}

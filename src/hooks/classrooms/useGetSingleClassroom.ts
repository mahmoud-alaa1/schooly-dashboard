import { getSingleClassroom } from "@/services/classroomsServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetSingleClassroom(passedId?: string) {
  const res = useQuery({
    queryKey: ["classroom"],
    queryFn: async () => await getSingleClassroom(""),
  });
  return res;
}

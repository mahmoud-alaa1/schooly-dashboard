import { getAllClassrooms } from "@/services/classroomsServices";
import { useQuery } from "@tanstack/react-query";
import useTableQueries from "../useTableQueries";

export default function useGetAllClassrooms() {
  const result = useTableQueries("classrooms");

  return useQuery({
    queryKey: ["classrooms", JSON.stringify(result)],
    queryFn: getAllClassrooms,
    staleTime: 1000 * 60 * 5, // Data will be considered fresh for 5 minutes
    gcTime: 1000 * 60 * 30, // Cache will be kept for 30 minutes
  });
}

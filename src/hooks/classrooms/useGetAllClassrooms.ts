import { getAllClassrooms } from "@/services/classroomsServices";
import { useQuery } from "@tanstack/react-query";
import useTableQueries from "../useTableQueries";
import useInfinite from "../useInfinite";

export default function useGetAllClassrooms() {
  const result = useTableQueries("classrooms");
  const currentPage = parseInt(result.Page || "1");
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  console.log("useGetAllClassrooms result:", result);

  const res = useInfinite<IClassroom>({
    queryKey: ["classrooms", JSON.stringify(result)],

    fetchFn: async () => {
      return await getAllClassrooms({
        ...result,
      });
    },
  });

  useInfinite<IClassroom>({
    queryKey: [
      "classrooms",
      JSON.stringify({ ...result, Page: nextPage.toString() }),
    ],
    fetchFn: async () => {
      return await getAllClassrooms({
        ...result,
        page: nextPage.toString(),
      });
    },
  });

  useInfinite<IClassroom>({
    queryKey: [
      "classrooms",
      JSON.stringify({ ...result, page: prevPage.toString() }),
    ],
    fetchFn: async () => {
      return await getAllClassrooms({
        ...result,
        page: prevPage.toString(),
      });
    },
    enabled: currentPage > 1,
  });

  return res;
}

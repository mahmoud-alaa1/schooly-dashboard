import useInfinite from "../useInfinite";
import useTableQueries from "../useTableQueries";
import { getAllTeachers } from "@/services/teachersServices";

export default function useGetAllTeachers() {
  const result = useTableQueries("teachers");
  const currentPage = parseInt(result.Page || "1");
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const res = useInfinite<ITeacher>({
    queryKey: ["teachers", JSON.stringify(result)],

    fetchFn: async () => {
      return await getAllTeachers({
        ...result,
      });
    },
  });

  useInfinite<ITeacher>({
    queryKey: [
      "teachers",
      JSON.stringify({ ...result, Page: nextPage.toString() }),
    ],
    fetchFn: async () => {
      return await getAllTeachers({
        ...result,
        Page: nextPage.toString(),
      });
    },
  });

  useInfinite<ITeacher>({
    queryKey: [
      "teachers",
      JSON.stringify({ ...result, Page: prevPage.toString() }),
    ],
    fetchFn: async () => {
      return await getAllTeachers({
        ...result,
        Page: prevPage.toString(),
      });
    },
    enabled: currentPage > 1,
  });

  return res;
}

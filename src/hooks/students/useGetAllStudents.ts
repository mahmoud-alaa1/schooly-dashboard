import { getAllStudents } from "@/services/studentsServices";
import useInfinite from "../useInfinite";
import useTableQueries from "../useTableQueries";

export default function useGetAllStudents() {
  const result = useTableQueries("students");
  const currentPage = parseInt(result.Page || "1");
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;

  const res = useInfinite<IStudent>({
    queryKey: ["students", JSON.stringify(result)],
    fetchFn: async () => {
      return await getAllStudents({
        ...result,
      });
    },
  });

  useInfinite<IStudent>({
    queryKey: [
      "students",
      JSON.stringify({ ...result, Page: nextPage.toString() }),
    ],
    fetchFn: async () => {
      return await getAllStudents({
        ...result,
        Page: nextPage.toString(),
      });
    },
  });

  useInfinite<IStudent>({
    queryKey: [
      "students",
      JSON.stringify({ ...result, Page: prevPage.toString() }),
    ],
    fetchFn: async () => {
      return await getAllStudents({
        ...result,
        Page: prevPage.toString(),
      });
    },
    enabled: currentPage > 1,
  });

  return res;
}

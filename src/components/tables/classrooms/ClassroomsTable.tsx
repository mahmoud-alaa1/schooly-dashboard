import ReusableTable from "@/components/tables/ReusableTable";
import { School } from "lucide-react";
import { PAGE_SIZE } from "@/lib/constants/pagination";
import useGetAllClassrooms from "@/hooks/classrooms/useGetAllClassrooms";
import ClassroomsTableRow from "./ClassroomsTableRow";
import AddClassroom from "@/components/classrooms/AddClassroom";
import { useMemo } from "react";

const headers: string[] = ["المعلم", "المادة", "الصف", "عدد الطلاب", ""];

export default function ClassroomsTable() {
  const { data, isPending, error } = useGetAllClassrooms();
  const totalPages = data?.pages[0]?.meta?.totalPages ?? 1;
  const totalItems = data?.pages[0]?.meta?.totalItems ?? 1;
  const classrooms = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data]
  );
  const emptyRows = Math.max(0, PAGE_SIZE - classrooms.length);
  if (error) {
    return (
      <div className="bg-white rounded-xl border shadow-sm p-6 text-red-500">
        حدث خطأ أثناء تحميل البيانات
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm">
      <div className="p-6 flex items-center border-b-2 mb-2 gap-2">
        <School />
        <h3>الفصول</h3>
      </div>
      <div className="md:p-6 p-1">
        <div className="flex justify-between gap-4 flex-wrap mb-5">
          <div className="items-center flex gap-2">
            <AddClassroom />
          </div>
        </div>
        <ReusableTable<IClassroom>
          headers={headers}
          data={classrooms ?? []}
          isPending={isPending}
          emptyRows={emptyRows}
          caption="قائمة الفصول الدراسية. يمكنك البحث عن الفصول باستخدام"
          renderRow={(classroom) => (
            <ClassroomsTableRow classroom={classroom} key={classroom.id} />
          )}
          height={36.9}
          paginationProps={{
            totalItems,
            name: "classrooms",
            totalPages,
          }}
        />
      </div>
    </div>
  );
}

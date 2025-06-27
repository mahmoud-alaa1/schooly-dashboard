import ReusableTable from "@/components/tables/ReusableTable";
import { UserRoundPlus } from "lucide-react";
import { PAGE_SIZE } from "@/lib/constants/pagination";
import useGetAllTeachers from "@/hooks/teachers/useGetAllTeachers";
import TeacherTableRow from "./TeacherTableRow";
import AddTeacher from "@/components/teachers/AddTeacher";

const headers: string[] = ["اسم المعلم", "الايميل", "رقم الهاتف", ""];

export default function TeachersTable() {
  const { data, isPending, error } = useGetAllTeachers();
  const teachers = data?.pages.flatMap((page) => page.data) ?? [];
  const totalPages = data?.pages[0]?.meta?.totalPages ?? 1;
  const totalItems = data?.pages[0]?.meta?.totalItems ?? 1;
  const emptyRows = Math.max(0, PAGE_SIZE - teachers.length);

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
        <UserRoundPlus />
        <h3>المعلمين</h3>
      </div>
      <div className="md:p-6 p-1">
        <div className="flex justify-between gap-4 flex-wrap mb-5">
          <div className="items-center flex gap-2">
            <AddTeacher />
          </div>
        </div>
        <ReusableTable<ITeacher>
          headers={headers}
          data={teachers}
          isPending={isPending}
          emptyRows={emptyRows}
          caption="قائمة الطلاب المسجلين في النظام. يمكنك البحث عن الطلاب باستخدام"
          renderRow={(teacher) => (
            <TeacherTableRow key={teacher.id} teacher={teacher} />
          )}
          height={54.72}
          paginationProps={{
            totalItems,
            name: "teachers",
            totalPages,
          }}
        />
      </div>
    </div>
  );
}

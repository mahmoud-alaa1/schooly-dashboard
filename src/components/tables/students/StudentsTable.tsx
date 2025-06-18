import ReusableTable from "@/components/tables/ReusableTable";
import useGetAllStudents from "@/hooks/students/useGetAllStudents";
import StudentsTableRow from "./StudentsTableRow";
import { Search, UserRoundPlus } from "lucide-react";
import AddStudent from "../../students/AddStudent";
import QueryInput from "../../QueryInput";
import { PAGE_SIZE } from "@/lib/constants/pagination";

const headers: string[] = [
  "اسم الطالب",
  "القسم",
  "ولى الامر",
  "تاريخ الالتحاق",
];

export default function StudentsTable() {
  const { data, isPending, error } = useGetAllStudents();
  const students = data?.pages.flatMap((page) => page.data) ?? [];
  const totalPages = data?.pages[0]?.meta?.totalPages ?? 1;
  const totalItems = data?.pages[0]?.meta?.totalItems ?? 1;
  const emptyRows = Math.max(0, PAGE_SIZE - students.length);

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
        <h3>الطلاب</h3>
      </div>
      <div className="md:p-6 p-1">
        <div className="flex justify-between gap-4 flex-wrap mb-5">
          <div className="items-center flex gap-2">
            <AddStudent />
          </div>
          <div>
            <QueryInput
              placeholder="ابحث عن طالب ..."
              Icon={<Search size={16} />}
              name="students"
            />
          </div>
        </div>
        <ReusableTable<IStudent>
          headers={headers}
          data={students}
          isPending={isPending}
          emptyRows={emptyRows}
          caption="قائمة الطلاب المسجلين في النظام. يمكنك البحث عن الطلاب باستخدام"
          renderRow={(student) => (
            <StudentsTableRow key={student.id} student={student} />
          )}
          height={60.89}
          paginationProps={{
            totalItems,
            name: "students",
            totalPages,
          }}
        />
      </div>
    </div>
  );
}

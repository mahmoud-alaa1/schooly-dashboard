import { Search, UserRoundPlus } from "lucide-react";
import AddStudent from "../../students/AddStudent";
import QueryInput from "../../QueryInput";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useGetAllStudents from "@/hooks/students/useGetAllStudents";
import StudentsTableRow from "./StudentsTableRow";
import TableSkeleton from "@/components/ui/table-skeleton";
import AppPagination from "../AppPagination";

const headers: string[] = [
  "اسم الطالب",
  "القسم",
  "ولى الامر",
  "تاريخ الالتحاق",
];

const ITEMS_PER_PAGE = 10;

export default function StudentsTable() {
  const { data, isPending, error } = useGetAllStudents();

  const students = data?.pages.flatMap((page) => page.data) ?? [];
  const totalPages = data?.pages[0]?.meta?.totalPages ?? 1;
  const totalItems = data?.pages[0]?.meta?.totalItems ?? 1;

  const emptyRows = Math.max(0, ITEMS_PER_PAGE - students.length);

  if (error) {
    return (
      <div className="bg-white rounded-xl border shadow-sm p-6 text-red-500">
        حدث خطأ أثناء تحميل البيانات
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm">
      <div className="p-6 flex items-center border-b-2">
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
        <div>
          <Table>
            <TableCaption className="sr-only">
              قائمة الطلاب المسجلين في النظام. يمكنك البحث عن الطلاب باستخدام
            </TableCaption>
            <TableHeader>
              <TableRow dir="rtl">
                {headers.map((header) => (
                  <TableHead key={header} className="text-right">
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {isPending ? (
                <TableSkeleton
                  className="h-[60.89px]"
                  rows={10}
                  cells={headers.length}
                />
              ) : (
                <>
                  {students.map((student) => (
                    <StudentsTableRow student={student} key={student.id} />
                  ))}
                  {Array.from({ length: emptyRows }).map((_, index) => (
                    <TableRow key={`empty-${index}`}>
                      {headers.map((_, cellIndex) => (
                        <TableCell key={cellIndex} className="h-[52px]" />
                      ))}
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={headers.length}>
                  <AppPagination
                    itemsPerPage={10}
                    totalItems={totalItems}
                    name="students"
                    totalPages={totalPages}
                  />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}

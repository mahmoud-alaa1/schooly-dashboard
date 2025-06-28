import ActionsButton from "@/components/tables/students/ActionsButton";
import { TableCell, TableRow } from "@/components/ui/table";
import { EDepartment } from "@/types/enums";
import { format, parseISO } from "date-fns";
import { ar } from "date-fns/locale";
import { memo } from "react";

export default memo(function StudentsTableRow({
  student,
}: {
  student: IStudent;
}) {
  return (
    <TableRow>
      <TableCell>
        <div className="flex flex-col gap-1">
          <span> {student.studentName}</span>
          <span className="text-[10px] text-muted-foreground">
            {student.id}
          </span>
        </div>
      </TableCell>
      <TableCell>{EDepartment[student.department]}</TableCell>
      <TableCell>
        <div className="flex flex-col gap-1">
          <span>{student.parentName || "غير متوفر الاسم"}</span>
          <span className=" text-muted-foreground">
            {student.parentPhone1 || "غير متوفر الرقم"}
          </span>
        </div>
      </TableCell>
      <TableCell>
        {format(parseISO(student.dateOfJoining), "d MMMM yyyy", { locale: ar })}
      </TableCell>
      <TableCell>
        <ActionsButton student={student} />
      </TableCell>
    </TableRow>
  );
});

import { TableCell, TableRow } from "@/components/ui/table";
import { memo } from "react";

export default memo(function ClassroomsTableRow({
  classroom,
}: {
  classroom: IClassroom;
}) {
  return (
    <TableRow>
      <TableCell>
        <div className="flex flex-col gap-1">
          {classroom.teacherName === "Unknown"
            ? "لا يوجد معلم"
            : classroom.teacherName}
          <span className="text-[10px] text-muted-foreground">
            {classroom.teacherId}
          </span>
        </div>
      </TableCell>
      <TableCell>{classroom.grade}</TableCell>
      <TableCell>
        <span>{classroom.subject}</span>
      </TableCell>
      <TableCell>{classroom.numberOfStudents} طلاب</TableCell>
    </TableRow>
  );
});

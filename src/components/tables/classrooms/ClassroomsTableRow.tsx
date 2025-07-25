import { TableCell, TableRow } from "@/components/ui/table";
import { memo } from "react";
import ActionsButton from "./ActionsButton";

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
      <TableCell>{classroom.subject}</TableCell>
      <TableCell>
        <span>{classroom.grade}</span>
      </TableCell>
      <TableCell>{classroom.numberOfStudents} طلاب</TableCell>
      <TableCell>
        <ActionsButton classroom={classroom} />
      </TableCell>
    </TableRow>
  );
});

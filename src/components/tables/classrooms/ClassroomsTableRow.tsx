import { TableCell, TableRow } from "@/components/ui/table";

export default function ClassroomsTableRow({
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
    </TableRow>
  );
}

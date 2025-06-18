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
          <span className="text-[10px] text-muted-foreground">
            {classroom.teacherId}
          </span>
        </div>
      </TableCell>
      <TableCell>{classroom.grade}</TableCell>
      <TableCell>
        <span>{classroom.subject}</span>
      </TableCell>
    </TableRow>
  );
}

import { TableCell, TableRow } from "@/components/ui/table";

export default function TeacherTableRow({ teacher }: { teacher: ITeacher }) {
  return (
    <TableRow>
      <TableCell>
        <div className="flex flex-col gap-1">
          <span> {teacher.name}</span>
          <span className="text-[10px] text-muted-foreground">
            {teacher.id}
          </span>
        </div>
      </TableCell>
      <TableCell>{teacher.email}</TableCell>
      <TableCell>
        <span>{teacher.phoneNumber || "غير متوفر الرقم"}</span>
      </TableCell>
    </TableRow>
  );
}

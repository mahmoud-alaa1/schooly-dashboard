import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function StudentsTableRowSkeleton() {
  return (
    <TableRow>
      <TableCell>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[120px]" />
      </TableCell>
      <TableCell>
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-3 w-[120px]" />
        </div>
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-[140px]" />
      </TableCell>
    </TableRow>
  );
}

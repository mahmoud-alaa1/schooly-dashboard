import { TableCell, TableRow } from "./table";
import { Skeleton } from "./skeleton";
import { cn } from "@/lib/utils";

interface TableSkeletonProps {
  rows?: number;
  cells?: number;
  cellWidths?: string[];
  className?: string;
}

export default function TableSkeleton({
  rows = 5,
  cells = 4,
  className,
}: TableSkeletonProps) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: cells }).map((_, cellIndex) => (
            <TableCell key={cellIndex} className={className}>
              <div className="flex flex-col gap-1">
                <Skeleton className={cn(`h-4 w-full}`)} />
              </div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

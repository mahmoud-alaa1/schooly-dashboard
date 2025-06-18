import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  name: string;
  totalPages: number;
  className?: string;
}

export default function Pagination({
  name,
  totalPages,
  className,
}: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get(`Page-${name}`)) || 1;

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    if (page === 1) {
      searchParams.delete(`Page-${name}`);
    } else {
      searchParams.set(`Page-${name}`, page.toString());
    }
    setSearchParams(searchParams);
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <Button
        variant="outline"
        size="icon"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AppPaginationProps {
  name: string;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export default function AppPagination({
  name,
  totalPages,
  totalItems,
  itemsPerPage,
}: AppPaginationProps) {
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

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const page = parseInt(value);

    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      handlePageChange(page);
    }
  };

  // Calculate the range of items being shown
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex  gap-3 items-center justify-between">
      <div className="flex gap-2 items-center">
        <Pagination>
          <PaginationContent className="gap-2">
            <PaginationItem>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="h-8 w-8"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </PaginationItem>

            <PaginationItem>
              <Input
                type="number"
                min={1}
                max={totalPages}
                value={currentPage}
                onChange={handlePageInput}
                className="w-16 h-8 text-center"
              />
            </PaginationItem>

            <PaginationItem className="text-sm text-muted-foreground"></PaginationItem>

            <PaginationItem>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="h-8 w-8"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <p>اقصى عدد صفحات: {totalPages}</p>
      </div>
      <div className="text-sm   text-muted-foreground">
        عرض {startItem} الى {endItem}
      </div>
    </div>
  );
}

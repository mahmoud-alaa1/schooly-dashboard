import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function useInfinite<T>({
  queryKey,
  fetchFn,
  refetchInterval,
  enabled = true,
}: {
  queryKey: string[];
  fetchFn: (pageNumber: number) => Promise<IPaginatedResponse<T>>;
  refetchInterval?: number;
  enabled?: boolean;
}) {
  const result = useInfiniteQuery({
    queryKey,
    refetchInterval,
    queryFn: ({ pageParam = 1 }) => fetchFn(pageParam),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextPage =
        lastPage && lastPageParam < lastPage.meta.totalPages
          ? lastPageParam + 1
          : undefined;

      return nextPage;
    },
    initialPageParam: 1,
    enabled,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && result.hasNextPage && !result.isFetchingNextPage) {
      result.fetchNextPage();
    }
  }, [
    inView,
    result.hasNextPage,
    result.isFetchingNextPage,
    result.fetchNextPage,
    result,
  ]);

  return {
    ...result,
    ref,
  };
}

export default useInfinite;

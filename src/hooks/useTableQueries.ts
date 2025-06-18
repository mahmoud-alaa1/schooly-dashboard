import { useSearchParams } from "react-router-dom";

export default function useTableQueries(name: string) {
  const [searchParams] = useSearchParams();

  const result: Record<string, string> = {};

  const qValue = searchParams.get(`q-${name}`);
  const pageValue = searchParams.get(`Page-${name}`) || "1";

  if (qValue) result.q = qValue;
  if (pageValue) result.Page = pageValue;

  return result;
}

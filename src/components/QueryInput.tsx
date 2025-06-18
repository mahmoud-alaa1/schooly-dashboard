import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "@/hooks/useDebounce";

export default function QueryInput({
  Icon,
  className,
  name = "search",
  ...props
}: {
  Icon?: React.ReactNode;
  className?: string;
  name?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get(`q-${name}`) || "");
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue) {
      searchParams.set(`q-${name}`, debouncedValue);
    } else {
      searchParams.delete(`q-${name}`);
    }
    setSearchParams(searchParams);
  }, [debouncedValue, name]);


  return (
    <div className="relative h-fit">
      {Icon && (
        <div className="absolute inset-y-0 end-2.5 flex items-center justify-center">
          {Icon}
        </div>
      )}
      <Label htmlFor={name} className="sr-only">
        {name}
      </Label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          "py-3! min-w-[300px]! text-xs md:text-sm",
          Icon && "pl-8",
          className
        )}
        {...props}
      />
    </div>
  );
}

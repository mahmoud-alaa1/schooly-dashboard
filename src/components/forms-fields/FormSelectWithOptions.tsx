import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FormSelectProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  labelClassName?: string;
  placeholder?: string;
  options: { label: string; value: string | number }[];
  className?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
}

export default function FormSelect<TFormValues extends FieldValues>({
  control,
  label,
  name,
  description,
  placeholder,
  options,
  className,
  labelClassName,
  disabled,
  required,
  ...props
}: FormSelectProps<TFormValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel htmlFor={name} className={cn("mb-1", labelClassName)}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Select
              onValueChange={(val) => {
                if (val == "") {
                  console.log("nothing");
                } else {
                  field.onChange(parseInt(val, 10));
                }
              }}
              defaultValue={field.value?.toString()}
              value={field.value?.toString()}
              disabled={disabled}
              required={required}
              {...props}
            >
              <SelectTrigger
                dir="rtl"
                className={cn("w-full h-full", className)}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent dir="rtl">
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value.toString()}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

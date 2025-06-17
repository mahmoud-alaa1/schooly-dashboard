import React, { type InputHTMLAttributes } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { type Control, type FieldValues, type Path } from "react-hook-form";
import { Input } from "../ui/input";

interface FormInputProps<TFormValues extends FieldValues>
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "defaultValue"> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  Icon?: React.ReactNode;
  labelClassName?: string;
  defaultValue?: string;
}

export default function FormInput<TFormValues extends FieldValues>({
  control,
  label,
  name,
  Icon,
  description,
  className,
  labelClassName,
  ...inputProps
}: FormInputProps<TFormValues>) {
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
            <div className="relative h-fit">
              {Icon && (
                <div className="absolute inset-y-0 end-2.5 flex items-center justify-center">
                  {Icon}
                </div>
              )}
              <Input
                id={name}
                {...field}
                {...inputProps}
                className={cn("py-6!", Icon && "pl-8", className)}
              />
            </div>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

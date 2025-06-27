import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Spinner from "../ui/Spinner";
import {
  registerFaceSchema,
  RegisterFaceSchema,
} from "@/schemas/registerFaceSchema";
import useRegisterFace from "@/hooks/useRegisterFace";
import { Input } from "../ui/input";

interface RegisterFaceFormProps {
  id: string;
}

function RegisterFaceForm({ id }: RegisterFaceFormProps) {
  const { mutate, isPending } = useRegisterFace();
  const form = useForm<RegisterFaceSchema>({
    resolver: zodResolver(registerFaceSchema),
    defaultValues: {
      userId: id,
    },
  });

  function onSubmit(values: RegisterFaceSchema) {
    const formData = new FormData();
    formData.append("userId", values.userId);
    formData.append("Image", values.Image);

    mutate(formData, {
      onSuccess: () => {
        form.reset();
      },
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <Button
          type="button"
          variant="destructive"
          onClick={() => {
            form.reset();
          }}
        >
          اعادة تعيين
        </Button>
        <div className="flex items-center gap-4 mb-4">
          <p className="text-muted-foreground whitespace-nowrap">سجل الوجه</p>
          <div className="h-px bg-border flex-1" />
        </div>
        <FormField
          control={form.control}
          name="Image"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem>
              <FormLabel>صورة الوجه</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      onChange(file);
                    }
                  }}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-primary "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-3 border-t">
          <Button
            disabled={isPending}
            type="submit"
            className="w-full  text-white py-3 rounded-md  "
          >
            {isPending ? <Spinner /> : "سجل صورة"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default RegisterFaceForm;

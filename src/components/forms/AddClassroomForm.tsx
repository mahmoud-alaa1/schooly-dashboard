import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { useEffect } from "react";

import FormInput from "../forms-fields/FormInput";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import { createClassroomSchema } from "@/schemas/classroomsSchema";
import { createFormStore } from "@/store/formsStore";
import usePostClassroom from "@/hooks/classrooms/usePostClassroom";

const defaultValues: createClassroomSchema = {
  grade: "",
  subject: "",
};

export default function AddClassroomForm() {
  const { clearFormData, formData, setFormData } =
    createFormStore<createClassroomSchema>("classroom-form");

  const { isPending, mutate } = usePostClassroom();

  const form = useForm<createClassroomSchema>({
    resolver: zodResolver(createClassroomSchema),
    defaultValues: formData || defaultValues,
  });

  useEffect(() => {
    const subscription = form.watch((data) => {
      setFormData(data as createClassroomSchema);
    });
    return () => subscription.unsubscribe();
  }, [form, setFormData]);

  function onSubmit(values: createClassroomSchema) {
    mutate(values, {
      onSuccess: () => {
        clearFormData();
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
            clearFormData();
          }}
        >
          اعادة تعيين
        </Button>
        {/* معلومات المعلم */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-muted-foreground whitespace-nowrap">
            معلومات الفصل
          </p>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="sm:grid-cols-2 grid gap-3 ">
          <FormInput<createClassroomSchema>
            control={form.control}
            name="grade"
            label="اسم الصف الدراسي"
            type="text"
            placeholder="مثال: اولى ثانوي"
          />
          <FormInput<createClassroomSchema>
            control={form.control}
            name="subject"
            label="اسم المادة"
            type="text"
            placeholder="اسم المادة كاملة"
          />
        </div>

        <div className="pt-3 border-t">
          <Button
            disabled={isPending}
            type="submit"
            className="w-full  text-white py-3 rounded-md  "
          >
            {isPending ? <Spinner /> : "إضافة فصل جديد"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

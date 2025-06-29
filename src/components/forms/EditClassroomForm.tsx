import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";

import FormInput from "../forms-fields/FormInput";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import { updateClassroomSchema } from "@/schemas/classroomsSchema";
import useEditClassroom from "@/hooks/classrooms/useEditClassroom";

interface IEditClassroomFormProps {
  initialData: IClassroom;
}

export default function EditClassroomForm({
  initialData,
}: IEditClassroomFormProps) {
  const { isPending, mutate } = useEditClassroom();

  const form = useForm<updateClassroomSchema>({
    resolver: zodResolver(updateClassroomSchema),
    defaultValues: {
      grade: initialData?.grade || "",
      subject: initialData?.subject || "",
    },
  });

  function onSubmit(values: updateClassroomSchema) {
    const data: IClassroomPutData = {
      id: initialData.id,
      grade: values.grade!,
      subject: values.subject!,
    };
    mutate(data, {
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
          <p className="text-muted-foreground whitespace-nowrap">
            معلومات الفصل
          </p>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="sm:grid-cols-2 grid gap-3 ">
          <FormInput<updateClassroomSchema>
            control={form.control}
            name="grade"
            label="اسم الصف الدراسي"
            type="text"
            placeholder="مثال: اولى ثانوي"
          />
          <FormInput<updateClassroomSchema>
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
            {isPending ? <Spinner /> : "تحديث بيانات الفصل"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

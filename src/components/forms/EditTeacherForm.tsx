import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";

import FormInput from "../forms-fields/FormInput";
import FormSelect from "../forms-fields/FormSelectWithOptions";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import { updateTeacherSchema } from "@/schemas/teachersSchema";
import useEditTeacher from "@/hooks/teachers/useEditTeacher";

interface IEditTeacherFormProps {
  initialData: ITeacher;
}
export default function EditTeacherForm({
  initialData,
}: IEditTeacherFormProps) {
  const { isPending, mutate } = useEditTeacher();

  const form = useForm<updateTeacherSchema>({
    resolver: zodResolver(updateTeacherSchema),
    defaultValues: {
      name: initialData.name || "",
      email: initialData.email || "",
      phoneNumber: initialData.phoneNumber || "",
      dateOfBirth: new Date(initialData.dateOfBirth),
      gender: initialData.gender,
    },
  });

  function onSubmit(values: updateTeacherSchema) {
    const data: ITeacherPutData = {
      id: initialData.id,
      name: values.name!,
      email: values.email!,
      phoneNumber: values.phoneNumber || "",
      gender: values.gender!,
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
          onClick={() => form.reset()}
        >
          اعادة تعيين
        </Button>
        {/* معلومات المعلم */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-muted-foreground whitespace-nowrap">
            معلومات المعلم
          </p>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="sm:grid-cols-2 grid gap-3 ">
          <FormInput<updateTeacherSchema>
            control={form.control}
            name="name"
            label="اسم المعلم"
            placeholder="اسم المعلم رباعي"
          />
          <FormInput<updateTeacherSchema>
            control={form.control}
            name="email"
            label="بريد المعلم الإلكتروني"
            type="email"
            placeholder="example@example.com"
          />
        </div>
        <div className="sm:grid-cols-2 grid gap-3 ">
          <FormInput<updateTeacherSchema>
            control={form.control}
            name="phoneNumber"
            label="رقم الهاتف"
            placeholder="01234567890"
          />
          <FormSelect<updateTeacherSchema>
            control={form.control}
            name="gender"
            placeholder="اختر النوع"
            label="النوع"
            options={[
              {
                label: "ذكر",
                value: 0,
              },
              {
                label: "أنثى",
                value: 1,
              },
            ]}
          />
        </div>

        <div className="pt-3 border-t">
          <Button
            disabled={isPending}
            type="submit"
            className="w-full  text-white py-3 rounded-md  "
          >
            {isPending ? <Spinner /> : "تحديث بيانات المعلم"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

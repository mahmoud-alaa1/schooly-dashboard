import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { useEffect } from "react";

import FormInput from "../forms-fields/FormInput";
import FormSelect from "../forms-fields/FormSelectWithOptions";
import FormDatePicker from "../forms-fields/FormDatePicker";
import { Button } from "../ui/button";
import FormPassword from "../forms-fields/FormPassword";
import Spinner from "../ui/Spinner";
import { format } from "date-fns";
import { registerTeacherSchema } from "@/schemas/teachersSchema";
import { createFormStore } from "@/store/formsStore";
import usePostTeacher from "@/hooks/teachers/usePostTeacher";

const defaultValues: registerTeacherSchema = {
  dateOfBirth: new Date("2002-02-19"),
  gender: 0,
  password: "",
  email: "",
  name: "",
  phoneNumber: "",
};

export default function AddTeacherForm() {
  const useTeacherForm = createFormStore<registerTeacherSchema>("teacher-form");
  const { clearFormData, formData, setFormData } = useTeacherForm;

  const { isPending, mutate } = usePostTeacher();

  const form = useForm<registerTeacherSchema>({
    resolver: zodResolver(registerTeacherSchema),
    defaultValues: formData || defaultValues,
  });

  useEffect(() => {
    const subscription = form.watch((data) => {
      setFormData(data as registerTeacherSchema);
    });
    return () => subscription.unsubscribe();
  }, [form, setFormData]);

  function onSubmit(values: registerTeacherSchema) {
    const dateOfBirth = format(values.dateOfBirth, "yyyy-MM-dd");
    mutate(
      { ...values, dateOfBirth },
      {
        onSuccess: () => {
          clearFormData();
          form.reset();
        },
      }
    );
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

          <FormInput<registerTeacherSchema>
            control={form.control}
            name="name"
            label="اسم المعلم"
            placeholder="اسم المعلم رباعي"
          />
          <FormInput<registerTeacherSchema>
            control={form.control}
            name="email"
            label="بريد المعلم الإلكتروني"
            type="email"
            placeholder="example@example.com"
          />
        </div>
        <div className="sm:grid-cols-2 grid gap-3 ">
          <FormInput<registerTeacherSchema>
            control={form.control}
            name="phoneNumber"
            label="رقم الهاتف"
            placeholder="01234567890"
          />
          <FormPassword<registerTeacherSchema>
            control={form.control}
            name="password"
            label="كلمة المرور"
            placeholder="كلمة المرور"
          />
        </div>
        <div className="grid  sm:grid-cols-2 gap-3 flex-wrap">
          <FormSelect<registerTeacherSchema>
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
          <FormDatePicker<registerTeacherSchema>
            control={form.control}
            name="dateOfBirth"
            label="تاريخ الميلاد"
            placeholder="تاريخ الميلاد"
          />
        </div>

        <div className="pt-3 border-t">
          <Button
            disabled={isPending}
            type="submit"
            className="w-full  text-white py-3 rounded-md  "
          >
            {isPending ? <Spinner /> : "إضافة معلم جديد"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

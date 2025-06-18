import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerStudentSchema } from "@/schemas/studentSchema";
import { Form } from "../ui/form";
import { useStudentForm } from "@/store/studentFormStore";
import { useEffect } from "react";

import FormInput from "../forms-fields/FormInput";
import FormSelect from "../forms-fields/FormSelectWithOptions";
import FormDatePicker from "../forms-fields/FormDatePicker";
import { Button } from "../ui/button";
import FormPassword from "../forms-fields/FormPassword";
import usePostStudent from "@/hooks/students/usePostStudent";
import Spinner from "../ui/Spinner";
import { format } from "date-fns";

const defaultValues: registerStudentSchema = {
  address: "سوهاج",
  dateOfBirth: new Date("2002-02-19"),
  dateOfJoining: new Date(),
  department: 0,
  gender: 0,
  parentJob: "مهندس برمجيات",
  parentName: " محمود علاء ابراهيم",
  grade: 0,
  parentPhone1: "01000000000",
  parentPhone2: "01000000001",
  parentRelation: 0,
  password: "",
  studentEmail: "",
  studentName: "محمود علاء ابراهيم",
};

export default function AddStudentForm() {
  const { formData, setFormData, clearFormData } = useStudentForm();
  const { isPending, mutate } = usePostStudent();

  const form = useForm<registerStudentSchema>({
    resolver: zodResolver(registerStudentSchema),
    defaultValues: formData || defaultValues,
  });

  useEffect(() => {
    const subscription = form.watch((data) => {
      setFormData(data as registerStudentSchema);
    });
    return () => subscription.unsubscribe();
  }, [form, setFormData]);

  function onSubmit(values: registerStudentSchema) {
    console.log(values);
    const dateOfBirth = format(values.dateOfBirth, "yyyy-MM-dd");
    const dateOfJoining = format(values.dateOfJoining, "yyyy-MM-dd");
    mutate(
      { ...values, dateOfBirth, dateOfJoining },
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
          onClick={() => {
            form.reset();
            clearFormData();
          }}
        >
          اعادة تعيين
        </Button>
        {/* معلومات الطالب */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-muted-foreground whitespace-nowrap">
            معلومات الطالب
          </p>
          <div className="h-px bg-border flex-1" />
        </div>
        <FormInput<registerStudentSchema>
          control={form.control}
          name="studentName"
          label="اسم الطالب المستجد"
          placeholder="اسم الطالب رباعي"
        />
        <div className="sm:grid-cols-2 grid gap-3 ">
          <FormInput<registerStudentSchema>
            control={form.control}
            name="studentEmail"
            label="بريد الطالب المستجد"
            placeholder="example@example.com"
          />
          <FormPassword<registerStudentSchema>
            control={form.control}
            name="password"
            label="كلمة المرور"
            placeholder="كلمة المرور"
          />
        </div>
        <div className="grid  sm:grid-cols-2 gap-3 flex-wrap">
          <FormSelect<registerStudentSchema>
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
          <FormDatePicker<registerStudentSchema>
            control={form.control}
            name="dateOfBirth"
            label="تاريخ الميلاد"
            placeholder="تاريخ الميلاد"
          />
        </div>
        <FormInput<registerStudentSchema>
          control={form.control}
          name="address"
          label="عنوان السكن"
          placeholder="مثال: شارع عبيد أبراج الصفوة أمام شركة الكهرباء بجوار كوبري الساحل في شبرا مصر"
        />

        {/* ولى الامر */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-muted-foreground whitespace-nowrap">ولى الامر</p>
          <div className="h-px bg-border flex-1" />
        </div>
        <FormInput<registerStudentSchema>
          control={form.control}
          name="parentName"
          label="اسم ولي الامر"
          placeholder="اسم ولى الامر رباعي"
        />
        <div className="grid  sm:grid-cols-2 gap-3 flex-wrap">
          <FormSelect<registerStudentSchema>
            control={form.control}
            name="parentRelation"
            placeholder="مثال: الوالد"
            label="علاقة ولي الأمر"
            options={[
              {
                label: "الوالد",
                value: 0,
              },
              {
                label: "الام",
                value: 1,
              },
            ]}
          />
          <FormInput<registerStudentSchema>
            control={form.control}
            name="parentJob"
            label="مهنة ولى الأمر"
            placeholder="مثال: مهندس برمجيات"
          />
        </div>
        <div className="grid  sm:grid-cols-2 gap-3 flex-wrap">
          <FormInput<registerStudentSchema>
            control={form.control}
            name="parentPhone1"
            label="رقم ولى الأمر الأول"
            placeholder="رقم الموبايل الأساسي"
          />
          <FormInput<registerStudentSchema>
            control={form.control}
            name="parentPhone2"
            label="رقم ولى الأمر الثاني"
            placeholder="رقم الموبايل الثانوي"
          />
        </div>

        {/* المدرسة */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-muted-foreground whitespace-nowrap">المدرسة</p>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <FormDatePicker<registerStudentSchema>
              control={form.control}
              name="dateOfJoining"
              label="تاريخ الإلتحاق بالمدرسة"
              placeholder="إختر التاريخ"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <FormSelect<registerStudentSchema>
              control={form.control}
              name="gender"
              placeholder="مثال: امريكي"
              label="قسم المدرسة"
              options={[
                { label: "امريكي", value: 0 },
                { label: "بريطاني", value: 1 },
              ]}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <FormSelect<registerStudentSchema>
              control={form.control}
              name="gender"
              placeholder="مثال: Grade 10"
              label="الصف الدراسي"
              options={[
                { label: "Grade 1", value: 0 },
                { label: "Grade 2", value: 1 },
                { label: "Grade 3", value: 2 },
                { label: "Grade 4", value: 3 },
                { label: "Grade 5", value: 4 },
              ]}
            />
          </div>
        </div>
        <div className="pt-3 border-t">
          <Button
            disabled={isPending}
            type="submit"
            className="w-full  text-white py-3 rounded-md  "
          >
            {isPending ? <Spinner /> : "إضافة طالب جديد"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

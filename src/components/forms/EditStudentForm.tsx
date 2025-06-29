import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateStudentSchema } from "@/schemas/studentSchema";
import { Form } from "../ui/form";

import FormInput from "../forms-fields/FormInput";
import FormSelect from "../forms-fields/FormSelectWithOptions";
import FormDatePicker from "../forms-fields/FormDatePicker";
import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import { format } from "date-fns";
import useEditStudent from "@/hooks/students/useEditStudent";

interface IEditStudentFormProps {
  initialData: IStudent;
}

export default function EditStudentForm({
  initialData,
}: IEditStudentFormProps) {
  const { isPending, mutate } = useEditStudent();

  const form = useForm<updateStudentSchema>({
    resolver: zodResolver(updateStudentSchema),
    defaultValues: {
      studentName: initialData.studentName || "",
      studentEmail: initialData.email || "",
      parentName: initialData.parentName || "",
      parentPhone1: initialData.parentPhone1 || "",
      phoneNumber: initialData.phoneNumber || "",
      dateOfBirth: new Date(initialData.dateOfBirth),
      dateOfJoining: new Date(initialData.dateOfJoining),
      gender: initialData.gender || 0,
      grade: initialData.grade || 0,
      department: initialData.department || 0,
      // parentRelation: initialData.parentRelation || 0,
      // parentJob: initialData.parentJob || "",
      // parentPhone2: initialData.parentPhone2 || "",
      // address: initialData.address || "",
    },
  });

  function onSubmit(values: updateStudentSchema) {
    console.log(values);
    const dateOfJoining = format(values.dateOfJoining!, "yyyy-MM-dd");
    const data: IStudentPutData = {
      id: initialData.id,
      name: values.studentName!,
      email: values.studentEmail!,
      phoneNumber: values.phoneNumber!,
      profilePictureUrl: initialData.profilePictureUrl || "",
      parent: {
        parentName: values.parentName!,
        relation: values.parentRelation || 0,
        job: values.parentJob || "",
        phone1: values.parentPhone1!,
        phone2: values.parentPhone2 || "",
      },
      address: values.address!,
      dateOfJoining,
      department: values.department!,
      grade: values.grade!,
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
          onClick={() => {
            form.reset();
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

        <div className="sm:grid-cols-2 grid gap-3 ">
          <FormInput<updateStudentSchema>
            control={form.control}
            name="studentName"
            label="اسم الطالب المستجد"
            placeholder="اسم الطالب رباعي"
          />
          <FormInput<updateStudentSchema>
            control={form.control}
            name="studentEmail"
            label="بريد الطالب المستجد"
            placeholder="example@example.com"
          />
        </div>
        <div className="grid  sm:grid-cols-2 gap-3 flex-wrap">
          <FormSelect<updateStudentSchema>
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
          <FormDatePicker<updateStudentSchema>
            control={form.control}
            name="dateOfBirth"
            label="تاريخ الميلاد"
            placeholder="تاريخ الميلاد"
            disabled={true}
          />
        </div>
        <FormInput<updateStudentSchema>
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
        <FormInput<updateStudentSchema>
          control={form.control}
          name="parentName"
          label="اسم ولي الامر"
          placeholder="اسم ولى الامر رباعي"
        />
        <div className="grid  sm:grid-cols-2 gap-3 flex-wrap">
          <FormSelect<updateStudentSchema>
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
          <FormInput<updateStudentSchema>
            control={form.control}
            name="parentJob"
            label="مهنة ولى الأمر"
            placeholder="مثال: مهندس برمجيات"
          />
        </div>
        <div className="grid  sm:grid-cols-2 gap-3 flex-wrap">
          <FormInput<updateStudentSchema>
            control={form.control}
            name="parentPhone1"
            label="رقم ولى الأمر الأول"
            placeholder="رقم الموبايل الأساسي"
          />
          <FormInput<updateStudentSchema>
            control={form.control}
            name="parentPhone2"
            label="رقم ولى الأمر الثاني"
            placeholder="رقم الموبايل الثانوي"
          />
          <FormInput<updateStudentSchema>
            control={form.control}
            name="phoneNumber"
            label="رقم الهاتف"
            placeholder="رقم الهاتف"
          />
        </div>

        {/* المدرسة */}
        <div className="flex items-center gap-4 mb-4">
          <p className="text-muted-foreground whitespace-nowrap">المدرسة</p>
          <div className="h-px bg-border flex-1" />
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <FormDatePicker<updateStudentSchema>
              control={form.control}
              name="dateOfJoining"
              label="تاريخ الإلتحاق بالمدرسة"
              placeholder="إختر التاريخ"
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <FormSelect<updateStudentSchema>
              control={form.control}
              name="department"
              placeholder="مثال: امريكي"
              label="قسم المدرسة"
              options={[
                { label: "امريكي", value: 0 },
                { label: "بريطاني", value: 1 },
              ]}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <FormSelect<updateStudentSchema>
              control={form.control}
              name="grade"
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
            {isPending ? <Spinner /> : "تحديث بيانات الطالب"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

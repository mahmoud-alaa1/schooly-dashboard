import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";

import { Button } from "../ui/button";
import Spinner from "../ui/Spinner";
import useAssginClassroomStudent from "@/hooks/classrooms/useAssginClassroomStudent";
import FormInfiniteSelect from "../forms-fields/FormInfiniteSelect";
import { getAllClassrooms } from "@/services/classroomsServices";
import { AssignStudentClassroomSchema } from "@/schemas/classroomsSchema";

interface AssignFormProps {
  id: string;
}

export default function AssignStudentForm({ id }: AssignFormProps) {
  const { isPending, mutate } = useAssginClassroomStudent();

  const form = useForm<AssignStudentClassroomSchema>({
    resolver: zodResolver(AssignStudentClassroomSchema),
    defaultValues: {
      StudentId: id,
    },
  });

  function onSubmit(values: AssignStudentClassroomSchema) {
    console.log(values);
    mutate(values, {
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
            تعيين فصل دراسي
          </p>
          <div className="h-px bg-border flex-1" />
        </div>
        <FormInfiniteSelect<AssignStudentClassroomSchema, IClassroom>
          control={form.control}
          name="ClassRoomId"
          queryKey={["classrooms"]}
          getOptionLabel={(item) => item.grade}
          getOptionValue={(item) => item.id}
          fetchFn={(pageNumber) =>
            getAllClassrooms({
              page: pageNumber,
            })
          }
          placeholder="اختر فثل دراسي"
          label="الفصل:"
        />

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

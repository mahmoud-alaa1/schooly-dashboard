import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
} from "@/components/ui/dialog";
import { Minus } from "lucide-react";
import { Button } from "./ui/button";
import useDeleteStudent from "@/hooks/students/useDeleteStudent";
import useDeleteTeacher from "@/hooks/teachers/useDeleteTeacher";
import useDeleteClassroom from "@/hooks/classrooms/useDeleteClassroom";

interface DeleteUserProps {
  studentId?: string;
  teacherId?: string;
  classroomId?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function DeleteUser({
  studentId,
  teacherId,
  classroomId,
  isOpen,
  setIsOpen,
}: DeleteUserProps) {
  const { mutate, isPending } = useDeleteStudent();
  const { mutate: mutateTeacher, isPending: isTeacherPending } =
    useDeleteTeacher();
  const { mutate: mutateClassroom, isPending: isClassroomPending } =
    useDeleteClassroom();

  const isLoading = isPending || isTeacherPending || isClassroomPending;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel
            title={`حذف ${
              studentId ? "الطالب" : teacherId ? "المعلم" : "الفصل"
            }  `}
            icon={<Minus />}
          />
        </DialogHeader>
        <div className="p-5 pt-3 text-center">
          <p className="text-red-600 mb-4">
            هل أنت متأكد أنك تريد حذف هذا{" "}
            {studentId ? "الطالب" : teacherId ? "المعلم" : "الفصل"} هذه العملية
            لا يمكن التراجع عنها.
          </p>
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="destructive"
              onClick={() => {
                if (studentId) {
                  mutate(studentId);
                } else if (teacherId) {
                  mutateTeacher(teacherId);
                } else if (classroomId) {
                  mutateClassroom(classroomId);
                }
                setIsOpen(false);
              }}
            >
              {isLoading
                ? "جاري الحذف..."
                : `حذف ${
                    studentId ? "الطالب" : teacherId ? "المعلم" : "الفصل"
                  }`}
            </Button>
            <Button
              variant="outline"
              className="ml-2"
              onClick={() => setIsOpen(false)}
            >
              إلغاء
            </Button>
          </div>
        </div>

        <DialogDescription className="sr-only">
          يمكنك حذف المستخدم من النظام. يرجى التأكد من أنك تريد حذف هذا
          المستخدم.
          <span className="sr-only">حذف مستخدم</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

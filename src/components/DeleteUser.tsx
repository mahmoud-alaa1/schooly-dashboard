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

interface DeleteUserProps {
  studentId?: string;
  teacherId?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function DeleteUser({
  studentId,
  teacherId,
  isOpen,
  setIsOpen,
}: DeleteUserProps) {
  const { mutate, isPending } = useDeleteStudent();
  const { mutate: mutateTeacher, isPending: isTeacherPending } =
    useDeleteTeacher();

  const isLoading = isPending || isTeacherPending;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel
            title={`حذف ${studentId ? "الطالب" : "المعلم"}`}
            icon={<Minus />}
          />
        </DialogHeader>
        <div className="p-5 pt-3 text-center">
          <p className="text-red-600 mb-4">
            هل أنت متأكد أنك تريد حذف هذا {studentId ? "الطالب" : "المعلم"} هذه
            العملية لا يمكن التراجع عنها.
          </p>
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="destructive"
              onClick={() => {
                if (studentId) {
                  mutate(studentId);
                } else if (teacherId) {
                  mutateTeacher(teacherId);
                }
                setIsOpen(false);
              }}
            >
              {isLoading
                ? "جاري الحذف..."
                : `حذف ${studentId ? "الطالب" : "المعلم"}`}
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

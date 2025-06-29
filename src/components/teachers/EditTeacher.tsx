import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import EditTeacherForm from "../forms/EditTeacherForm";

interface IEditTeacherFormProps {
  teacherData: ITeacher;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function EditTeacher({
  teacherData,
  isOpen,
  setIsOpen,
}: IEditTeacherFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title=" بيانات المعلم" icon={<Edit />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <EditTeacherForm initialData={teacherData} />
        </div>

        <DialogDescription className="sr-only">
          يمكنك عرض بيانات المعلم وتحديثها حسب الحاجة. تأكد من إدخال المعلومات
          الصحيحة.
          <span className="sr-only">عرض بيانات المعلم</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import EditStudentForm from "../forms/EditStudentForm";

interface IEditStudentFormProps {
  studentData: IStudent;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function EditStudent({
  studentData,
  isOpen,
  setIsOpen,
}: IEditStudentFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title=" بيانات الطالب" icon={<Edit />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <EditStudentForm initialData={studentData} />
        </div>

        <DialogDescription className="sr-only">
          يمكنك عرض بيانات الطالب وتحديثها حسب الحاجة. تأكد من إدخال المعلومات
          الصحيحة.
          <span className="sr-only">عرض بيانات الطالب</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

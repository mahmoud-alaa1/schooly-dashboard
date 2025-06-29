import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import EditClassroomForm from "../forms/EditClassroomForm";
interface IEditClassroomFormProps {
  classroomData: IClassroom;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function EditClassroom({
  classroomData,
  isOpen,
  setIsOpen,
}: IEditClassroomFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="بيانات الفصل" icon={<Edit />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <EditClassroomForm initialData={classroomData} />
        </div>

        <DialogDescription className="sr-only">
          يمكنك عرض بيانات الفصل وتحديثها حسب الحاجة. تأكد من إدخال المعلومات
          الصحيحة.
          <span className="sr-only">عرض بيانات الفصل</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

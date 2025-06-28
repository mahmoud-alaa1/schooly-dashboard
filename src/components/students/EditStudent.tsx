import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit } from "lucide-react";
import EditStudentForm from "../forms/EditStudentForm";

interface IEditStudentFormProps {
  studentData: IStudent;
}

export default function EditStudent({ studentData }: IEditStudentFormProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center w-full cursor-pointer gap-2">
          <Edit className="mr-2 h-4 w-4" />

          <span>تعديل</span>
        </div>
      </DialogTrigger>
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

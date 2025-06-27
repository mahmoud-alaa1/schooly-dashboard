import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Trash2 } from "lucide-react";
import UnAssignStudentForm from "../forms/UnAssignStudentForm";

interface IAssignProps {
  id: string;
}

export default function UnAssignStudent({ id }: IAssignProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center w-full cursor-pointer gap-2">
          <Trash2 className="mr-2 h-4 w-4" />
          <span>حذف فصل دراسي</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="تعيين فصل دراسي" icon={<Plus />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <UnAssignStudentForm id={id} />
        </div>

        <DialogDescription className="sr-only">
          يمكنك حذف فصل دراسي للطالب لتمكينه من الوصول إلى المحتوى التعليمي.
          <span className="sr-only">حذف فصل دراسي للطالب</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

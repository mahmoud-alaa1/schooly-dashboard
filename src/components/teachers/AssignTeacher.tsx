import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, School } from "lucide-react";
import AssignTeacherForm from "../forms/AssignTeacherForm";

interface IAssignProps {
  id: string;
}

export default function AssignTeacher({ id }: IAssignProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center w-full cursor-pointer gap-2">
          <School className="mr-2 h-4 w-4" />
          <span>تسجيل فصل دراسي</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="تسجيل فصل دراسي" icon={<Plus />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <AssignTeacherForm id={id} />
        </div>

        <DialogDescription className="sr-only">
          تسجيل فصل دراسي للمعلم لتمكينه من الوصول إلى المحتوى التعليمي.
          <span className="sr-only">تعيين فصل دراسي للمعلم</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

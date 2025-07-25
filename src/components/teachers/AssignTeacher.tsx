import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AssignTeacherForm from "../forms/AssignTeacherForm";

interface IAssignProps {
  id: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AssignTeacher({ id, isOpen, setIsOpen }: IAssignProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
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

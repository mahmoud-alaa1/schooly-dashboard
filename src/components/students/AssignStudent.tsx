import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AssignStudentForm from "../forms/AssignStudentForm";

interface IAssignProps {
  id: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function AssignStudent({ id, isOpen, setIsOpen }: IAssignProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="تسجيل فصل دراسي" icon={<Plus />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <AssignStudentForm id={id} />
        </div>

        <DialogDescription className="sr-only">
          تسجيل فصل دراسي للطالب لتمكينه من الوصول إلى المحتوى التعليمي.
          <span className="sr-only">تعيين فصل دراسي للطالب</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

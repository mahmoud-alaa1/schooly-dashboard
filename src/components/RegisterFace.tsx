import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import RegisterFaceForm from "./forms/RegisterFaceForm";

interface RegisterFaceProps {
  id: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function RegisterFace({
  id,
  isOpen,
  setIsOpen,
}: RegisterFaceProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="تسجيل وجه" icon={<Plus />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <RegisterFaceForm id={id} />
        </div>

        <DialogDescription className="sr-only">
          يمكنك تسجيل وجه الطالب او المعلم لتمكين التعرف على الوجه في المستقبل.
          <span className="sr-only"> تسجيل وجه الطالب او المعلم</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

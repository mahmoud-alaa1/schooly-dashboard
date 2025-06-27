import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, ScanFace } from "lucide-react";
import RegisterFaceForm from "../forms/RegisterFaceForm";

interface RegisterFaceProps {
  id: string;
}

export default function RegisterFace({ id }: RegisterFaceProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center w-full cursor-pointer gap-2">
          <ScanFace className="mr-2 h-4 w-4" />
          <span>تسجيل الوجه</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="تسجيل وجه" icon={<Plus />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <RegisterFaceForm id={id} />
        </div>

        <DialogDescription className="sr-only">
          يمكنك تسجيل وجه الطالب لتمكين التعرف على الوجه في المستقبل.
          <span className="sr-only">تسجيل وجه الطالب</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

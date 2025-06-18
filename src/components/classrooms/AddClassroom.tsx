import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import AddClassroomForm from "../forms/AddClassroomForm";

export default function AddClassroom() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-5! rounded-xl ">
          <span>أضف فصل جديد</span>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="إضافة فصل جديد" icon={<Plus />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <AddClassroomForm />
        </div>

        <DialogDescription className="sr-only">
          هذه الحوار مخصص لإضافة فصل دراسي جديد إلى النظام. يمكنك ملء النموذج
          بالمعلومات المطلوبة مثل اسم الفصل، المعلم المسؤول، والمادة التي يتم
          تدريسها. بعد الانتهاء، اضغط على زر "إضافة" لحفظ الفصل الجديد.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

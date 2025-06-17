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
import AddStudentForm from "../forms/AddStudentForm";

export default function AddStudent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-5! rounded-xl">
          <span>أضف طالب جديد</span>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="إضافة طالب جديد" icon={<Plus />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <AddStudentForm />
        </div>

        <DialogDescription className="sr-only">
          هذه الحوار مخصص لإضافة طالب جديد إلى النظام. يمكنك ملء النموذج
          بالمعلومات المطلوبة مثل الاسم، البريد الإلكتروني، ورقم الهاتف. بعد
          الانتهاء، اضغط على زر "إضافة" لحفظ الطالب الجديد.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

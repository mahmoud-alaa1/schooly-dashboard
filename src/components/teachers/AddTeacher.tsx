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
import AddTeacherForm from "../forms/AddTeacherForm";

export default function AddTeacher() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-5! rounded-xl ">
          <span>أضف معلم جديد</span>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title="إضافة معلم جديد" icon={<Plus />} />
        </DialogHeader>
        <div className="p-5 pt-3">
          <AddTeacherForm />
        </div>

        <DialogDescription className="sr-only">
          هذه الحوار مخصص لإضافة معلم جديد إلى النظام. يمكنك ملء النموذج
          بالمعلومات المطلوبة مثل الاسم، البريد الإلكتروني، ورقم الهاتف. بعد
          الانتهاء، اضغط على زر "إضافة" لحفظ المعلم الجديد.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

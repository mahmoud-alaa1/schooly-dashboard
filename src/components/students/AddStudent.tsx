import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function AddStudent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-5! rounded-xl">
          <span>أضف طالب جديد</span>
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent dir="rtl">
        <DialogHeader dir="rtl">
          <DialogTitle>
            <div dir="rtl" className="p-6">
              <h3 dir="rtl" className="text-lg font-semibold">
                إضافة طالب جديد
              </h3>
              <p dir="rtl" className="text-sm text-muted-foreground">
                يمكنك إضافة طالب جديد من خلال النموذج أدناه.
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="sr-only">
          هذه الحوار مخصص لإضافة طالب جديد إلى النظام. يمكنك ملء النموذج
          بالمعلومات المطلوبة مثل الاسم، البريد الإلكتروني، ورقم الهاتف. بعد
          الانتهاء، اضغط على زر "إضافة" لحفظ الطالب الجديد.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

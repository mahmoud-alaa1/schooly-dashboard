import { EDepartment, EGender, EGrade } from "@/types/enums";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitleWithCancel,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Award,
  BookOpen,
  Calendar,
  Eye,
  Mail,
  Phone,
  User,
  Users,
} from "lucide-react";

interface IViewStudentProps {
  student: IStudent;
}

export default function ViewStudent({ student }: IViewStudentProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center w-full cursor-pointer gap-2">
          <Eye className="mr-2 h-4 w-4" />
          <span>عرض</span>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[clamp(300px,80vw,1000px)]">
        <DialogHeader>
          <DialogTitleWithCancel title=" بيانات الطالب" icon={<Eye />} />
        </DialogHeader>

        <div className="bg-white overflow-hidden ">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6 text-white">
            <div className="flex items-center  gap-4 ">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1 space-y-1">
                <h2 className="text-3xl font-bold">{student.studentName}</h2>
                <p className="text-indigo-100 text-lg">
                  رقم الطالب: {student.id}
                </p>
                <div className="flex items-center space-x-4 space-x-reverse mt-2">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {EDepartment[student.department]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-r-4 border-indigo-500 pr-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  البيانات الشخصية
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        تاريخ الميلاد
                      </p>
                      <p className="font-medium">{student.dateOfBirth}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2">
                    <User className="w-4 h-4 text-indigo-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        الجنس
                      </p>
                      <p className="font-medium">
                        {EGender[student.gender] === "MALE" ? "ذكر" : "أنثى"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2">
                    <Calendar className="w-4 h-4 text-indigo-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        تاريخ الالتحاق
                      </p>
                      <p className="font-medium">{student.dateOfJoining}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-r-4 border-green-500 pr-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  معلومات التواصل
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 gap-2">
                    <Mail className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        البريد الإلكتروني
                      </p>
                      <p className="font-medium text-blue-600">
                        {student.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2">
                    <Phone className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        رقم الهاتف
                      </p>
                      <p className="font-medium">{student.phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-r-4 border-purple-500 pr-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  المعلومات الأكاديمية
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 gap-2">
                    <BookOpen className="w-4 h-4 text-purple-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        القسم
                      </p>
                      <p className="font-medium">
                        {EDepartment[student.department]}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2">
                    <Award className="w-4 h-4 text-purple-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        الصف الدراسي
                      </p>
                      <p className="font-medium">{EGrade[student.grade]}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-r-4 border-orange-500 pr-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  جهة الاتصال الطارئة
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600 gap-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        ولي الأمر
                      </p>
                      <p className="font-medium">{student.parentName}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 gap-2">
                    <Phone className="w-4 h-4 text-orange-500" />
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">
                        هاتف ولي الأمر
                      </p>
                      <div className="flex space-x-3">
                        <p className="font-medium">{student.parentPhone1}</p>
                        <span>-</span>
                        <p className="font-medium">{student.parentPhone1}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DialogDescription className="sr-only">
          يمكنك عرض بيانات الطالب وتحديثها حسب الحاجة. تأكد من إدخال المعلومات
          الصحيحة.
          <span className="sr-only">عرض بيانات الطالب</span>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}

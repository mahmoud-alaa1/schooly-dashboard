import { Edit, Ellipsis, ScanFace, School, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import AssignTeacher from "@/components/teachers/AssignTeacher";
import RegisterFace from "@/components/RegisterFace";
import { useState } from "react";
import DeleteUser from "@/components/DeleteUser";
import EditTeacher from "@/components/teachers/EditTeacher";

interface DropdownMenuItemProps {
  teacher: ITeacher;
}

function ActionsButton({ teacher }: DropdownMenuItemProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isRegisterFaceOpen, setIsRegisterFaceOpen] = useState(false);
  const [isAssignClassroomOpen, setIsAssignClassroomOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem dir="rtl" onClick={() => setIsEditDialogOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            تعديل
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-blue-600"
            dir="rtl"
            onClick={() => setIsRegisterFaceOpen(true)}
          >
            <ScanFace className="mr-2 h-4 w-4" />
            <span>تسجيل الوجه</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-green-600"
            dir="rtl"
            onClick={() => setIsAssignClassroomOpen(true)}
          >
            <School className="mr-2 h-4 w-4" />
            <span>تسجيل فصل دراسي</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-red-600"
            dir="rtl"
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            حذف المعلم
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <RegisterFace
        id={teacher.id}
        isOpen={isRegisterFaceOpen}
        setIsOpen={setIsRegisterFaceOpen}
      />
      <AssignTeacher
        id={teacher.id}
        isOpen={isAssignClassroomOpen}
        setIsOpen={setIsAssignClassroomOpen}
      />
      <DeleteUser
        teacherId={teacher.id}
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
      />
      <EditTeacher
        teacherData={teacher}
        isOpen={isEditDialogOpen}
        setIsOpen={setIsEditDialogOpen}
      />
    </>
  );
}

export default ActionsButton;

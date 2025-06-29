import { Edit, Ellipsis, Eye, ScanFace, School, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import RegisterFace from "@/components/RegisterFace";
import AssignStudent from "@/components/students/AssignStudent";
import UnAssignStudent from "@/components/students/UnAssignStudent";
import EditStudent from "@/components/students/EditStudent";
import ViewStudent from "@/components/students/ViewStudent";
import { useState } from "react";
import DeleteUser from "@/components/DeleteUser";

interface DropdownMenuItemProps {
  student: IStudent;
}

function ActionsButton({ student }: DropdownMenuItemProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isRegisterFaceOpen, setIsRegisterFaceOpen] = useState(false);
  const [isAssignClassroomOpen, setIsAssignClassroomOpen] = useState(false);
  const [isUnAssignClassroomOpen, setIsUnAssignClassroomOpen] = useState(false);
  const [isViewStudentOpen, setIsViewStudentOpen] = useState(false);
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
          <DropdownMenuItem
            dir="rtl"
            onClick={() => setIsViewStudentOpen(true)}
          >
            <Eye className="mr-2 h-4 w-4" />
            <span>عرض</span>
          </DropdownMenuItem>
          <DropdownMenuItem dir="rtl" onClick={() => setIsEditDialogOpen(true)}>
            <Edit className="mr-2 h-4 w-4" />
            <span>تعديل</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-blue-600"
            onClick={() => setIsRegisterFaceOpen(true)}
            dir="rtl"
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
            onClick={() => setIsUnAssignClassroomOpen(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            <span>حذف فصل دراسي</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-600"
            dir="rtl"
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            حذف الطالب
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <EditStudent
        studentData={student}
        isOpen={isEditDialogOpen}
        setIsOpen={setIsEditDialogOpen}
      />
      <RegisterFace
        id={student.id}
        isOpen={isRegisterFaceOpen}
        setIsOpen={setIsRegisterFaceOpen}
      />
      <AssignStudent
        id={student.id}
        isOpen={isAssignClassroomOpen}
        setIsOpen={setIsAssignClassroomOpen}
      />
      <UnAssignStudent
        id={student.id}
        isOpen={isUnAssignClassroomOpen}
        setIsOpen={setIsUnAssignClassroomOpen}
      />
      <ViewStudent
        student={student}
        isOpen={isViewStudentOpen}
        setIsOpen={setIsViewStudentOpen}
      />
      <DeleteUser
        studentId={student.id}
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
      />
    </>
  );
}

export default ActionsButton;

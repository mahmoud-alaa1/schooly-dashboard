import { Edit, Ellipsis, Eye, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import AssignTeacher from "@/components/teachers/AssignTeacher";
import RegisterFace from "@/components/students/RegisterFace";

interface DropdownMenuItemProps {
  teacher: ITeacher;
  onEdit?: () => void;
  onDelete?: () => void;
  onView?: () => void;
  onRegisterFace?: () => void;
  onAssignClassroom?: () => void;
}

function ActionsButton({
  onDelete,
  onEdit,
  onView,
  teacher,
}: DropdownMenuItemProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem dir="rtl">
          <Eye className="mr-2 h-4 w-4" />
          عرض
        </DropdownMenuItem>
        <DropdownMenuItem dir="rtl">
          <Edit className="mr-2 h-4 w-4" />
          تعديل
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-blue-600"
          onSelect={(e) => e.preventDefault()}
          dir="rtl"
        >
          <RegisterFace id={teacher.id} />
        </DropdownMenuItem>

        <DropdownMenuItem
          className="text-green-600"
          onSelect={(e) => e.preventDefault()}
          dir="rtl"
        >
          <AssignTeacher id={teacher.id} />
        </DropdownMenuItem>

        <DropdownMenuItem className="text-red-600" dir="rtl">
          <Trash2 className="mr-2 h-4 w-4" />
          حذف
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ActionsButton;

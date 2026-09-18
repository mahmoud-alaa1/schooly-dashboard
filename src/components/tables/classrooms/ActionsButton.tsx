import { Edit, Ellipsis, Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { useState } from "react";
import EditClassroom from "@/components/classrooms/EditClassroom";
import DeleteUser from "@/components/DeleteUser";

interface DropdownMenuItemProps {
  classroom: IClassroom;
}

function ActionsButton({ classroom }: DropdownMenuItemProps) {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
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
            <span>تعديل</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="text-red-600"
            dir="rtl"
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            حذف الفصل
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <EditClassroom
        isOpen={isEditDialogOpen}
        setIsOpen={setIsEditDialogOpen}
        classroomData={classroom}
      />
      <DeleteUser
        isOpen={isDeleteDialogOpen}
        setIsOpen={setIsDeleteDialogOpen}
        classroomId={classroom.id}
      />
    </>
  );
}

export default ActionsButton;

import { UserRoundPlus } from "lucide-react";
import AddStudent from "../students/AddStudent";

export default function StudentsTable() {
  return (
    <div className="bg-white rounded-xl border shadow-sm">
      <div className="p-6 flex items-center border-b-2">
        <UserRoundPlus />
        <h3>الطلاب</h3>
      </div>
      <div className="p-6">
        <div className="flex justify-between gap-2 flex-wrap mb-5">
          <div className="items-center flex gap-2">
            <AddStudent />
          </div>
          <div>ابحث</div>
        </div>
        <div>Students Table</div>
      </div>
    </div>
  );
}

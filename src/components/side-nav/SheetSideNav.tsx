import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideNav from "./SideNav";
import { Button } from "../ui/button";

export default function SheetSideNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className=" bg-white pt-6 w-64">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          استخدم القائمة الجانبية للتنقل بين الصفحات المختلفة في التطبيق.
        </SheetDescription>
        <SideNav />
      </SheetContent>
    </Sheet>
  );
}

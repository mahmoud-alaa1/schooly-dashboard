import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth } from "@/store/authStore";

export default function LogoutButton() {
  const logout = useAuth((state) => state.logout);
  return (
    <Button
      onClick={logout}
      variant="outline"
      className="border-none ring-0"
      size="icon"
    >
      <LogOut />
    </Button>
  );
}

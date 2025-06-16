import { useAuth } from "@/store/authStore";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const name = useAuth((state) => state.user?.name) || "Guest";
  return (
    <header className="p-4 h-fit bg-[#E9E9E9] rounded-b-xl border-neutral-300 border-2 shadow-md flex items-center gap-4">
      <img src="/default-image.png" className="size-7" alt="" />
      <span>{name}</span>
      <LogoutButton />
    </header>
  );
}

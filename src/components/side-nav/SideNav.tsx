import { Book, School, UsersRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const links: {
  to: string;
  label: string;
  icon?: React.ReactNode;
}[] = [
  { to: "/students", label: "الطلاب", icon: <Book /> },
  { to: "/teachers", label: "المعلمين", icon: <UsersRound /> },
  { to: "/classrooms", label: "الفصول", icon: <School /> },
];

export default function SideNav() {
  return (
    <aside className="bg-white flex-col p-4 gap-2 h-full flex">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className="p-[18px] rounded-2xl flex items-center gap-2 hover:bg-gray-100 transition-colors"
        >
          {link.icon}
          <span>{link.label}</span>
        </NavLink>
      ))}
    </aside>
  );
}

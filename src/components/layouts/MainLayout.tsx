import Header from "../Header";
import SideNav from "../SideNav";

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-[100dvh] ">
      <Header />
      <div className="grid grid-cols-[215px_auto] grow">
        <SideNav />
        <div>{children}</div>
      </div>
    </div>
  );
}

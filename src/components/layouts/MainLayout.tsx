import Header from "../Header";
import SideNav from "../side-nav/SideNav";
import AppBreadcrumbs from "../AppBreadcrumbs";

export default function MainLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-[100dvh] ">
      <Header />
      <div className="grid lg:grid-cols-[250px_auto] grow">
        <div className="lg:block hidden">
          <SideNav />
        </div>
        <div className="overflow-auto p-2 md:p-6 pt-0!">
          <AppBreadcrumbs />
          {children}
        </div>
      </div>
    </div>
  );
}

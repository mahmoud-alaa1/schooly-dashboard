import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { breadcrumbRoutes } from "@/lib/constants/routes";
import { SlashIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const Separator = () => (
  <BreadcrumbSeparator>
    <SlashIcon />
  </BreadcrumbSeparator>
);

export default function AppBreadcrumbs() {
  const breadcrumbs = useBreadcrumbs(breadcrumbRoutes);
  return (
    <div
      dir="rtl"
      className="bg-primary/10 p-4 shadow-sm border-neutral-200 rounded-b-lg mb-5 "
    >
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map(({ match, breadcrumb }, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <React.Fragment key={match.pathname}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{breadcrumb}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={match.pathname}>{breadcrumb}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>

                {!isLast && <Separator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

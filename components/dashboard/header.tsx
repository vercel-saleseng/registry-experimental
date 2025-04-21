import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Globe, ChevronDown, ChevronRight } from "lucide-react";

export function DashboardHeader() {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 shrink-0 items-center gap-4 border-b bg-aws-grey-800 px-6">
        <SidebarTrigger className="-ml-2 text-white" />
        <Separator orientation="vertical" className="h-6 bg-aws-grey-600" />
        <div className="flex items-center gap-2">
          <span className="text-heading-s text-white">CloudWatch</span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1 text-white hover:bg-aws-grey-700"
          >
            <Globe className="h-4 w-4" />
            <span>us-west-2</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <div className="flex h-12 items-center border-b bg-aws-grey-100 px-6">
        <Breadcrumb>
          <BreadcrumbList className="flex items-center">
            <BreadcrumbItem className="flex items-center">
              <BreadcrumbLink
                href="#"
                className="flex items-center text-aws-blue-600 hover:underline"
              >
                CloudWatch
              </BreadcrumbLink>
            </BreadcrumbItem>
            <div className="flex items-center mx-2 text-aws-grey-550">
              <ChevronRight className="h-4 w-4" />
            </div>
            <BreadcrumbItem className="flex items-center">
              <BreadcrumbPage className="text-aws-grey-600">
                Dashboard
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-between border-b bg-white px-6 py-4">
        <div>
          <h1 className="text-heading-l">Dashboard</h1>
          <p className="text-body-m text-aws-grey-550">
            Monitor metrics, logs, and application traces
          </p>
        </div>
        <Button className="bg-aws-blue-600 text-white hover:bg-aws-blue-800">
          Create dashboard
        </Button>
      </div>
    </div>
  );
}

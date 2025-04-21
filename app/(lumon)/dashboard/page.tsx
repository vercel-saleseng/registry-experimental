import { ChartSection } from "@/components/dashboard/chart-section";
import { DepartmentTable } from "@/components/dashboard/department-table";
import { DashboardHeader } from "@/components/dashboard/header";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { StatsCards } from "@/components/dashboard/stats-cards";
import { SidebarInset } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <div className="flex-1 space-y-8">
      <DashboardHeader />
      <div className="space-y-6">
        <StatsCards />
        {/* Chart and Recent Activity */}
        <div className="grid gap-6 md:grid-cols-7 lg:grid-cols-8">
          <div className="col-span-4 md:col-span-4 lg:col-span-5">
            <ChartSection />
          </div>
          <div className="col-span-4 md:col-span-3">
            <RecentActivity />
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <DepartmentTable />
        </div>
      </div>
    </div>
  );
}

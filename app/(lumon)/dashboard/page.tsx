import { AppSidebar } from "../../../components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Lumon Industries</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Management</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-4 md:gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Management</h1>
            <p className="text-muted-foreground">
              Monitor and manage the separation between innie and outie
              consciousness states.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium tracking-tight text-muted-foreground">
                  Active Innies
                </h3>
              </div>
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">78</p>
                  <p className="text-sm text-muted-foreground">
                    +4 from last quarter
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium tracking-tight text-muted-foreground">
                  Severance Compliance
                </h3>
              </div>
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">99.4%</p>
                  <p className="text-sm text-muted-foreground">
                    +0.2% from last quarter
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-medium tracking-tight text-muted-foreground">
                  Memory Bleed Rate
                </h3>
              </div>
              <div className="mt-2 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-bold">0.03%</p>
                  <p className="text-sm text-muted-foreground">
                    -0.01% from last quarter
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart and Recent Activity */}
          <div className="grid gap-6 md:grid-cols-7">
            {/* Chart */}
            <div className="col-span-4 rounded-lg border bg-card shadow-sm">
              <div className="p-6">
                <h3 className="font-semibold">Work-Life Separation Index</h3>
                <p className="text-sm text-muted-foreground">
                  Effectiveness of severance chip over the past 30 days
                </p>
              </div>
              <div className="h-[300px] w-full p-6 pt-0">
                <div className="h-full w-full">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Current: 99.7%</p>
                      <p className="text-xs text-muted-foreground">
                        Target: 99.9%
                      </p>
                    </div>
                    <div className="shrink-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span>Separation Index</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 w-2 rounded-full bg-red-500"></div>
                          <span>Threshold</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[250px] w-full">
                    <svg viewBox="0 0 600 200" className="h-full w-full">
                      {/* Background grid lines */}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <line
                          key={`grid-${i}`}
                          x1="0"
                          y1={i * 40}
                          x2="600"
                          y2={i * 40}
                          stroke="#e5e7eb"
                          strokeWidth="1"
                        />
                      ))}

                      {/* Data line - Separation Index */}
                      <path
                        d="M0,40 C20,38 40,42 60,40 C80,38 100,30 120,32 C140,34 160,20 180,15 C200,10 220,5 240,8 C260,11 280,20 300,18 C320,16 340,25 360,20 C380,15 400,10 420,12 C440,14 460,25 480,20 C500,15 520,10 540,8 C560,6 580,10 600,12"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                      />

                      {/* Threshold line */}
                      <path
                        d="M0,20 L600,20"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />

                      {/* Data points */}
                      {[40, 42, 40, 32, 15, 8, 18, 20, 12, 20, 8, 12].map(
                        (y, i) => (
                          <circle
                            key={`point-${i}`}
                            cx={i * 50 + 50}
                            cy={y}
                            r="3"
                            fill="hsl(var(--primary))"
                          />
                        )
                      )}

                      {/* X-axis labels */}
                      <text
                        x="0"
                        y="195"
                        className="text-xs fill-muted-foreground"
                      >
                        Day 1
                      </text>
                      <text
                        x="290"
                        y="195"
                        className="text-xs fill-muted-foreground"
                      >
                        Day 15
                      </text>
                      <text
                        x="580"
                        y="195"
                        className="text-xs fill-muted-foreground"
                      >
                        Day 30
                      </text>
                    </svg>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <div>
                      Higher values indicate stronger separation between
                      innie/outie states
                    </div>
                    <div>Updated hourly</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="col-span-3 rounded-lg border bg-card shadow-sm">
              <div className="p-6">
                <h3 className="font-semibold">Recent Severance Events</h3>
                <p className="text-sm text-muted-foreground">
                  Latest transitions between innie and outie states
                </p>
              </div>
              <div className="px-6">
                <div className="space-y-4">
                  {[
                    {
                      name: "Mark S.",
                      type: "Elevator Transition",
                      time: "2m",
                    },
                    {
                      name: "Helly R.",
                      type: "Elevator Transition",
                      time: "4m",
                    },
                    {
                      name: "Irving B.",
                      type: "Overtime Protocol",
                      time: "6m",
                    },
                    { name: "Dylan G.", type: "Security Override", time: "8m" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-lg border p-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {item.name} • {item.type}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Completed • {item.time} ago
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <button className="w-full rounded-md border p-2 text-sm font-medium">
                  View All
                </button>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="rounded-lg border bg-card shadow-sm">
            <div className="p-6">
              <h3 className="font-semibold">Department Performance</h3>
              <p className="text-sm text-muted-foreground">
                Productivity metrics for severed employees by department
              </p>
            </div>
            <div className="border-t">
              <div className="grid grid-cols-5 border-b p-4 text-sm font-medium">
                <div>Department</div>
                <div>Employees</div>
                <div>Productivity</div>
                <div>Deviation</div>
                <div>Status</div>
              </div>
              {[
                {
                  dept: "Macrodata Refinement",
                  employees: "4",
                  productivity: "92%",
                  deviation: "0.5%",
                  status: "Compliant",
                },
                {
                  dept: "Optics & Design",
                  employees: "6",
                  productivity: "88%",
                  deviation: "1.2%",
                  status: "Compliant",
                },
                {
                  dept: "Mind & Security",
                  employees: "12",
                  productivity: "95%",
                  deviation: "0.3%",
                  status: "Compliant",
                },
                {
                  dept: "Wellness Center",
                  employees: "3",
                  productivity: "76%",
                  deviation: "3.8%",
                  status: "Warning",
                },
              ].map((item, i) => (
                <div key={i} className="grid grid-cols-5 border-b p-4 text-sm">
                  <div className="font-medium">{item.dept}</div>
                  <div>{item.employees}</div>
                  <div>{item.productivity}</div>
                  <div>{item.deviation}</div>
                  <div>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        item.status === "Compliant"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Warning"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

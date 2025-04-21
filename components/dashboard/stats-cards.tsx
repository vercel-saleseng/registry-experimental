import {
  ArrowDown,
  ArrowUp,
  Clock,
  CpuIcon,
  Database,
  HardDrive,
} from "lucide-react";

export function StatsCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-lg border bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-aws-blue-300/20 p-2">
              <CpuIcon className="h-5 w-5 text-aws-blue-600" />
            </div>
            <h3 className="text-heading-s">CPU Utilization</h3>
          </div>
          <div className="flex items-center gap-2 text-body-s text-aws-grey-550">
            <Clock className="h-4 w-4" />
            <span>Last 1 hour</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-baseline gap-2">
            <p className="text-heading-xl">42.8%</p>
            <div className="flex items-center gap-1 text-aws-green-500">
              <ArrowDown className="h-4 w-4" />
              <span className="text-body-s">8.3%</span>
            </div>
          </div>
          <p className="mt-1 text-body-s text-aws-grey-550">
            Average across all instances
          </p>
        </div>
      </div>
      <div className="rounded-lg border bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-aws-blue-300/20 p-2">
              <HardDrive className="h-5 w-5 text-aws-blue-600" />
            </div>
            <h3 className="text-heading-s">Storage IOPS</h3>
          </div>
          <div className="flex items-center gap-2 text-body-s text-aws-grey-550">
            <Clock className="h-4 w-4" />
            <span>Last 1 hour</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-baseline gap-2">
            <p className="text-heading-xl">3,842</p>
            <div className="flex items-center gap-1 text-aws-red-500">
              <ArrowUp className="h-4 w-4" />
              <span className="text-body-s">12.5%</span>
            </div>
          </div>
          <p className="mt-1 text-body-s text-aws-grey-550">
            Total read/write operations
          </p>
        </div>
      </div>
      <div className="rounded-lg border bg-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-aws-blue-300/20 p-2">
              <Database className="h-5 w-5 text-aws-blue-600" />
            </div>
            <h3 className="text-heading-s">Memory Usage</h3>
          </div>
          <div className="flex items-center gap-2 text-body-s text-aws-grey-550">
            <Clock className="h-4 w-4" />
            <span>Last 1 hour</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-baseline gap-2">
            <p className="text-heading-xl">76.2%</p>
            <div className="flex items-center gap-1 text-aws-green-500">
              <ArrowDown className="h-4 w-4" />
              <span className="text-body-s">3.1%</span>
            </div>
          </div>
          <p className="mt-1 text-body-s text-aws-grey-550">
            Average across all instances
          </p>
        </div>
      </div>
    </div>
  );
}

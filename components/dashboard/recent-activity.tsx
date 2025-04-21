import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Filter,
} from "lucide-react";

export function RecentActivity() {
  return (
    <div className="col-span-3 rounded-lg border bg-white">
      <div className="flex items-center justify-between border-b p-4">
        <div>
          <h3 className="text-heading-s">Recent Events</h3>
          <p className="text-body-s text-aws-grey-550">Last 24 hours</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1 text-aws-grey-550 hover:bg-aws-grey-200"
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1 text-aws-blue-600 hover:bg-aws-grey-200"
          >
            <ArrowUpRight className="h-4 w-4" />
            <span>View all</span>
          </Button>
        </div>
      </div>
      <div className="space-y-1 p-4">
        {[
          {
            name: "EC2 Instance i-0a1b2c3d4e5f",
            type: "CPU Utilization",
            status: "warning",
            message: "Exceeded 80% threshold",
            time: "2 minutes ago",
          },
          {
            name: "RDS Database prod-db-1",
            type: "Storage",
            status: "success",
            message: "Automatic backup completed",
            time: "15 minutes ago",
          },
          {
            name: "Lambda Function api-handler",
            type: "Error Rate",
            status: "error",
            message: "Increased error rate detected",
            time: "32 minutes ago",
          },
          {
            name: "ECS Cluster prod-cluster",
            type: "Container Health",
            status: "success",
            message: "Service scaled successfully",
            time: "45 minutes ago",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-sm border-l-2 border-transparent bg-white p-3 hover:bg-aws-grey-100"
            style={{
              borderLeftColor:
                item.status === "warning"
                  ? "#f2cd54"
                  : item.status === "error"
                  ? "#ce3311"
                  : "#2bb534",
            }}
          >
            <div className="mt-0.5">
              {item.status === "warning" ? (
                <AlertTriangle className="h-4 w-4 text-aws-severity-yellow" />
              ) : item.status === "error" ? (
                <AlertTriangle className="h-4 w-4 text-aws-severity-red" />
              ) : (
                <CheckCircle2 className="h-4 w-4 text-aws-green-500" />
              )}
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-body-s font-semibold">{item.name}</p>
                <div className="flex items-center gap-1 text-body-s text-aws-grey-550">
                  <Clock className="h-3 w-3" />
                  <span>{item.time}</span>
                </div>
              </div>
              <p className="text-body-s text-aws-grey-550">
                {item.type} - {item.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

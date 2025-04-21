import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Clock, Download, Filter, MoreHorizontal, ZoomIn } from "lucide-react";

export function ChartSection() {
  return (
    <div className="col-span-4 rounded-lg border bg-white">
      <div className="flex items-center justify-between border-b p-4">
        <div>
          <h3 className="text-heading-s">CPU Utilization</h3>
          <p className="text-body-s text-aws-grey-550">
            Average across all instances
          </p>
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
            className="h-8 gap-1 text-aws-grey-550 hover:bg-aws-grey-200"
          >
            <ZoomIn className="h-4 w-4" />
            <span>Zoom</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1 text-aws-grey-550 hover:bg-aws-grey-200"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 text-aws-grey-550 hover:bg-aws-grey-200"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-aws-blue-600"></div>
              <span className="text-body-s">Average</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-sm bg-aws-grey-300"></div>
              <span className="text-body-s">p90</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-body-s text-aws-grey-550">
            <Clock className="h-4 w-4" />
            <span>Last 3 hours</span>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <svg viewBox="0 0 600 200" className="h-full w-full">
            {/* Background grid */}
            <defs>
              <pattern
                id="grid"
                width="60"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 40"
                  fill="none"
                  stroke="#f1f1f1"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="600" height="200" fill="url(#grid)" />

            {/* Average CPU line */}
            <path
              d="M0,100 C50,80 100,120 150,90 C200,60 250,110 300,70 C350,30 400,150 450,100 C500,50 550,90 600,70"
              fill="none"
              stroke="#0073bb"
              strokeWidth="2"
            />

            {/* p90 line */}
            <path
              d="M0,120 C50,100 100,140 150,110 C200,80 250,130 300,90 C350,50 400,170 450,120 C500,70 550,110 600,90"
              fill="none"
              stroke="#cccccc"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Y-axis labels */}
            <text x="10" y="30" className="text-xs fill-aws-grey-550">
              100%
            </text>
            <text x="10" y="110" className="text-xs fill-aws-grey-550">
              50%
            </text>
            <text x="10" y="190" className="text-xs fill-aws-grey-550">
              0%
            </text>

            {/* X-axis labels */}
            <text x="10" y="195" className="text-xs fill-aws-grey-550">
              15:00
            </text>
            <text x="290" y="195" className="text-xs fill-aws-grey-550">
              16:30
            </text>
            <text x="570" y="195" className="text-xs fill-aws-grey-550">
              18:00
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
}

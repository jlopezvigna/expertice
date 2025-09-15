import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function SLAWidget({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-medium text-muted-foreground">
          SLA Compliance
        </CardTitle>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          {/* Circular progress */}
          <div className="relative w-16 h-16">
            <svg
              className="w-16 h-16 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#f59e0b"
                strokeWidth="8"
                fill="none"
                strokeDasharray="238 251"
                strokeDashoffset="0"
                className="transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold">95%</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="text-sm font-bold">
              3,800
              <span className="text-sm font-normal text-muted-foreground">
                /4,000
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Resolved tickets within{" "}
              <span className="text-emerald-500 font-medium">4 hours</span> of
              target response time
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

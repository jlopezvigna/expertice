import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export function RevenueWidget({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-medium text-muted-foreground">
          Sales Revenue
        </CardTitle>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="flex gap-2">
        <div>
          <div className="text-md font-bold">$540,832</div>
          <div className="flex items-center text-xs text-muted-foreground mt-1">
            <span>
              Your revenue increased this month by about{" "}
              <span className="text-emerald-500 font-medium ml-1">$42k</span>
            </span>
          </div>
        </div>
        <div>
          {/* Mini bar chart */}
          <div className="flex items-end space-x-1 mt-4 h-12">
            <div className="bg-gray-300 w-3 h-10 rounded-sm"></div>
            <div className="bg-gray-300 w-3 h-8 rounded-sm"></div>
            <div className="bg-gray-300 w-3 h-6 rounded-sm"></div>
            <div className="bg-emerald-500 w-3 h-12 rounded-sm"></div>
          </div>

          <div className="flex justify-between text-[8px] text-muted-foreground mt-2">
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

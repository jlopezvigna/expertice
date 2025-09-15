import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export function RetentionWidget({ className }: { className?: string }) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-medium text-muted-foreground">
          Retention Rate
        </CardTitle>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-sm font-bold">92%</div>
          <div className="flex items-center space-x-1 text-emerald-500">
            <TrendingUp className="h-4 w-4" />
            <span className="text-xs font-medium">12%</span>
          </div>
          <div className="flex -space-x-2">
            <Avatar className="w-6 h-6 border-2 border-white">
              <AvatarImage src="/diverse-person-portrait.png" />
              <AvatarFallback className="text-xs">JD</AvatarFallback>
            </Avatar>
            <Avatar className="w-6 h-6 border-2 border-white">
              <AvatarImage src="/diverse-group-conversation.png" />
              <AvatarFallback className="text-xs">SM</AvatarFallback>
            </Avatar>
            <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-xs text-gray-600">+10</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          Customer retention over time — a key measure of loyalty and
          satisfaction.
        </p>
      </CardContent>
    </Card>
  );
}

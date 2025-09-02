"use client";

import { Badge } from "@/components/ui/badge";
import { CircleCheck } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceCardProps {
  title: string;
  badge: string;
  features: ServiceFeature[];
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({
  title,
  badge,
  features,
  icon: Icon,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`relative overflow-hidden h-[450px] bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      <span className="text-center">
        <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
          {badge}
        </Badge>
      </span>

      <h3 className="text-3xl font-bold text-foreground text-center">
        {title}
      </h3>

      <div className="flex flex-col gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <CircleCheck className="w-6 h-6 text-primary flex-shrink-0" />
            <p className="text-base text-foreground">
              <strong>{feature.title}:</strong> {feature.description}
            </p>
          </div>
        ))}
      </div>

      <Icon className="absolute bottom-0 -right-20 w-60 h-60 text-primary/20" />
    </div>
  );
}

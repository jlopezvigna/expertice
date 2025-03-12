import { cn } from "@/lib/utils";

interface ChipProps {
  label: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  className?: string;
}

export const Chip = ({
  label,
  textColor = "blue-400",
  bgColor = "blue-950/50",
  borderColor = "blue-900",
  className = "",
}: ChipProps) => {
  const chipClasses = cn(
    "px-3 py-1 text-sm font-medium rounded-full border inline-block",
    {
      "text-primary": textColor === "primary",
      "text-success": textColor === "success",
      "text-destructive": textColor === "destructive",
      "bg-primary/10": bgColor === "primary",
      "bg-success/10": bgColor === "success",
      "bg-destructive/10": bgColor === "destructive",
      "border-primary": borderColor === "primary",
      "border-success": borderColor === "success",
      "border-destructive": borderColor === "destructive",
    },
    className
  );

  return <span className={chipClasses}>{label}</span>;
};

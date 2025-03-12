import { NumberStats } from "./NumberStats";
import { cn } from "@/lib/utils";

export default function Stats({
  className,
  data,
  gridCols,
}: {
  className?: string;
  data: { title: string; value: number; suffix?: string }[];
  gridCols?: "1" | "2" | "3" | "4";
}) {
  return (
    <section className={cn(className)}>
      <div
        className={`grid grid-cols-2 md:grid-cols-${gridCols} gap-4 text-center`}
      >
        {data.map((item) => (
          <NumberStats
            key={item.title}
            statTitle={item.title}
            statValue={item.value}
            suffix={item.suffix}
          />
        ))}
      </div>
    </section>
  );
}

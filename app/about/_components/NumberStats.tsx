import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NumberTicker } from "@/components/magic/number-ticker";
interface NumberStatsProps {
  statTitle: string;
  statValue: number | string;
  suffix?: string;
}

export const NumberStats = ({
  statTitle,
  statValue,
  suffix,
}: NumberStatsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      transition={{ duration: 0.8 }}
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="text-4xl font-bold text-primary mb-2">
        <NumberTicker
          value={Number(statValue)}
          className="text-4xl font-bold text-primary"
        />
        <span className="text-primary-foreground">{suffix}</span>
      </div>
      <div className="text-muted-foreground text-lg font-medium">
        {statTitle}
      </div>
    </motion.div>
  );
};

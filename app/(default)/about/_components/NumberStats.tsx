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
      <div className="text-5xl text-accent-foreground font-bold mb-2">
        <NumberTicker value={Number(statValue)} />
        <span>{suffix}</span>
      </div>
      <div className="text-sm font-ligth">{statTitle}</div>
    </motion.div>
  );
};

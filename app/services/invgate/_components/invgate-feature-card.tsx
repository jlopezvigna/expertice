import { motion } from "framer-motion";

export function InvgateFeatureCard({
  idx,
  title,
  description,
  icon,
}: {
  idx: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex flex-col gap-4 items-center justify-center rounded-2xl border p-4 shadow-sm hover:shadow-md hover:bg-muted transition-all duration-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      {icon}
      <h3 className="text-md font-bold text-center">{title}</h3>
      <p className="text-sm text-center text-muted-foreground">{description}</p>
    </motion.div>
  );
}

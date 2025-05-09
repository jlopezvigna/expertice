"use client";
import { Marquee } from "@/components/magic/marquee";
import { client_logos } from "@/constants";
import { motion } from "framer-motion";
import { ClientCard } from "./ClientCard";

const firstRow = client_logos.slice(0, client_logos.length / 3);
const secondRow = client_logos.slice(client_logos.length / 3);
const theirRow = client_logos.slice(client_logos.length / 3);

export const ClientsCarrousel = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative w-full flex flex-col gap-2 items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {firstRow.map((review) => (
            <ClientCard
              key={review.imageUrl}
              imageUrl={review.imageUrl}
              companyName={review.alt}
              industry={review.industry}
            />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:30s]">
          {secondRow.map((review) => (
            <ClientCard
              key={review.imageUrl}
              imageUrl={review.imageUrl}
              companyName={review.alt}
              industry={review.industry}
            />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:30s]">
          {theirRow.map((review) => (
            <ClientCard
              key={review.imageUrl}
              imageUrl={review.imageUrl}
              companyName={review.alt}
              industry={review.industry}
            />
          ))}
        </Marquee>
      </div>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-primary/10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-primary/10"></div> */}
    </motion.div>
  );
};

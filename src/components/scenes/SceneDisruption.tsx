import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const lines = ["disruption.1", "disruption.2", "disruption.3", "disruption.4", "disruption.5"];

const SceneDisruption = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="scene-full flex flex-col justify-center px-6 lg:px-16 py-32 gap-24 lg:gap-32">
      {lines.map((key, i) => {
        const start = i * 0.2;
        const end = start + 0.15;
        return (
          <LineReveal key={key} progress={scrollYProgress} start={start} end={end} isLast={i === lines.length - 1}>
            {t(key)}
          </LineReveal>
        );
      })}
    </section>
  );
};

const LineReveal = ({
  children,
  progress,
  start,
  end,
  isLast,
}: {
  children: string;
  progress: any;
  start: number;
  end: number;
  isLast: boolean;
}) => {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const x = useTransform(progress, [start, end], [80, 0]);

  return (
    <motion.p
      style={{ opacity, x }}
      className={`text-brutal-lg ${isLast ? "text-accent-red" : "text-foreground"} max-w-[90vw]`}
    >
      {children}
    </motion.p>
  );
};

export default SceneDisruption;

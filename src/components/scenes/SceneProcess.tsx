import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const steps = ["process.1", "process.2", "process.3", "process.4"];

const SceneProcess = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="scene py-32 lg:py-48 px-6 lg:px-16">
      {steps.map((key, i) => {
        const start = 0.1 + i * 0.18;
        const end = start + 0.12;
        const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
        const x = useTransform(scrollYProgress, [start, end], [i % 2 === 0 ? -100 : 100, 0]);

        return (
          <motion.div
            key={key}
            style={{ opacity, x }}
            className={`py-12 lg:py-20 ${i % 2 === 0 ? "text-left" : "text-right"}`}
          >
            <span className="text-brutal-sm text-muted-foreground mb-2 block">
              0{i + 1}
            </span>
            <p className={`text-brutal-lg ${i === steps.length - 1 ? "text-accent-red" : "text-foreground"}`}>
              {t(key)}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
};

export default SceneProcess;

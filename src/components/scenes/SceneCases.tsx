import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const cases = [
  { key: "1", brand: "cases.1.brand", type: "cases.1.type", result: "cases.1.result" },
  { key: "2", brand: "cases.2.brand", type: "cases.2.type", result: "cases.2.result" },
  { key: "3", brand: "cases.3.brand", type: "cases.3.type", result: "cases.3.result" },
  { key: "4", brand: "cases.4.brand", type: "cases.4.type", result: "cases.4.result" },
];

const SceneCases = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="scene py-24 lg:py-40 px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 lg:mb-32 gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-brutal-xl text-foreground"
        >
          {t("cases.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-brutal-sm text-muted-foreground"
        >
          {t("cases.subtitle")}
        </motion.p>
      </div>

      <div className="space-y-0">
        {cases.map((c, i) => {
          const start = 0.05 + i * 0.18;
          const end = start + 0.12;
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const x = useTransform(scrollYProgress, [start, end], [i % 2 === 0 ? -50 : 50, 0]);

          return (
            <motion.div
              key={c.key}
              style={{ opacity, x }}
              className="border-t border-foreground/10 py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline group cursor-default"
            >
              <div className="lg:col-span-1">
                <span className="text-brutal-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-brutal-md text-foreground group-hover:text-accent transition-colors duration-300">
                  {t(c.brand)}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-brutal-sm text-muted-foreground leading-relaxed">
                  {t(c.type)}
                </p>
              </div>
              <div className="lg:col-span-3 lg:text-right">
                <span className="text-brutal-md text-accent-red">
                  {t(c.result)}
                </span>
              </div>
            </motion.div>
          );
        })}
        <div className="border-t border-foreground/10" />
      </div>
    </section>
  );
};

export default SceneCases;

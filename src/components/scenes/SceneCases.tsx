import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const cases = [
  {
    key: "case1",
    metric: "×4",
    metricLabel: "cases.1.metric",
    title: "cases.1.title",
    desc: "cases.1.desc",
  },
  {
    key: "case2",
    metric: "€47K",
    metricLabel: "cases.2.metric",
    title: "cases.2.title",
    desc: "cases.2.desc",
  },
  {
    key: "case3",
    metric: "0→12K",
    metricLabel: "cases.3.metric",
    title: "cases.3.title",
    desc: "cases.3.desc",
  },
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
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-brutal-sm text-muted-foreground mb-20 lg:mb-32"
      >
        {t("cases.title")}
      </motion.p>

      <div className="space-y-0">
        {cases.map((c, i) => {
          const start = 0.1 + i * 0.22;
          const end = start + 0.15;
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const x = useTransform(scrollYProgress, [start, end], [i % 2 === 0 ? -60 : 60, 0]);

          return (
            <motion.div
              key={c.key}
              style={{ opacity, x }}
              className={`border-t border-foreground/10 py-12 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-20 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Metric */}
              <div className="lg:w-1/3 flex-shrink-0">
                <span className="text-brutal-xl text-accent-red leading-none">{c.metric}</span>
                <p className="text-brutal-sm text-muted-foreground mt-3">{t(c.metricLabel)}</p>
              </div>

              {/* Text */}
              <div className="lg:flex-1 flex flex-col justify-center">
                <h3 className="text-brutal-md text-foreground mb-4">{t(c.title)}</h3>
                <p className="text-brutal-sm text-muted-foreground leading-relaxed max-w-[500px]">
                  {t(c.desc)}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom border */}
      <div className="border-t border-foreground/10" />
    </section>
  );
};

export default SceneCases;

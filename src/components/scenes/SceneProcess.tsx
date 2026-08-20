import { useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const steps = ["process.1", "process.2", "process.3", "process.4"];

const SceneProcess = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  return (
    <section ref={ref} className="scene py-32 lg:py-48 px-6 lg:px-16">
      {steps.map((key, i) => {
        return (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className={`py-12 lg:py-20 ${i % 2 === 0 ? "text-left" : "text-right"}`}
          >
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

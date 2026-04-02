import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const facts = [
  { number: "10+", label: "facts.years", desc: "facts.years.desc" },
  { number: "33", label: "facts.agency", desc: "facts.agency.desc" },
  { number: "EXTRA", label: "facts.extra", desc: "facts.extra.desc" },
  { number: "中文", label: "facts.chinese", desc: "facts.chinese.desc" },
];

const SceneRawFacts = () => {
  const { t } = useLang();

  return (
    <section className="scene py-24 lg:py-40 px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {facts.map((fact, i) => (
          <motion.div
            key={fact.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="border-t border-foreground/10 py-12 lg:py-20 lg:pr-16 group"
          >
            <div className="flex items-baseline gap-6 mb-4">
              <span className={`text-brutal-xl ${i % 2 === 0 ? "text-accent-red" : "text-foreground"}`}>
                {fact.number}
              </span>
            </div>
            <span className="text-brutal-sm text-muted-foreground block mb-4">
              {t(fact.label)}
            </span>
            <p className="text-sm text-muted-foreground/70 leading-relaxed max-w-md" style={{ fontFamily: "'Space Grotesk', sans-serif", textTransform: "none", letterSpacing: "0" }}>
              {t(fact.desc)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SceneRawFacts;

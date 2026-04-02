import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const logos = [
  "33AGENCY", "EXTRA", "MERIDIAN", "VOLTA", "NEXUS", "BLACKPOINT",
  "SOMA", "KRAIT", "ONYX STUDIO", "RUBIX",
];

const SceneLogos = () => {
  const { t } = useLang();

  return (
    <section className="scene py-24 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-brutal-sm text-muted-foreground mb-16 lg:mb-24"
      >
        {t("logos.title")}
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
        {logos.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="border border-foreground/10 py-10 lg:py-14 flex items-center justify-center group"
          >
            <span className="text-brutal-sm text-foreground/30 group-hover:text-foreground transition-colors duration-300 tracking-[0.15em]">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SceneLogos;

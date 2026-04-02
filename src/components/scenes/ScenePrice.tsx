import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const inclusions = [
  "price.inc.1",
  "price.inc.2",
  "price.inc.3",
  "price.inc.4",
  "price.inc.5",
  "price.inc.6",
  "price.inc.7",
];

const ScenePrice = () => {
  const { t } = useLang();

  return (
    <section className="scene py-24 lg:py-40 px-6 lg:px-16">
      {/* Price block */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-24 lg:mb-40">
        {/* Full price */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-brutal-sm text-muted-foreground mb-4">
            {t("price.full")}
          </p>
          <p className="text-brutal-xl text-foreground">€500</p>
        </motion.div>

        {/* Booking price */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-brutal-sm text-accent-red mb-4">{t("price.booking")}</p>
          <p className="text-brutal-xl text-accent-red">€200</p>
          <p className="text-brutal-sm text-muted-foreground mt-4">{t("price.remainder")}</p>
        </motion.div>
      </div>

      {/* What's included */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-brutal-sm text-muted-foreground mb-12 lg:mb-16">{t("price.includes")}</p>
      </motion.div>

      <div className="space-y-0">
        {inclusions.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="border-t border-foreground/10 py-6 lg:py-8 flex items-baseline gap-6"
          >
            <span className="text-brutal-sm text-muted-foreground flex-shrink-0">
              0{i + 1}
            </span>
            <p className="text-brutal-md text-foreground">{t(key)}</p>
          </motion.div>
        ))}
        <div className="border-t border-foreground/10" />
      </div>
    </section>
  );
};

export default ScenePrice;

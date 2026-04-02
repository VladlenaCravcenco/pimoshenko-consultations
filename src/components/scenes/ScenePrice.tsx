import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const ScenePrice = () => {
  const { t } = useLang();

  return (
    <section className="scene-full flex flex-col justify-center items-center min-h-screen px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-brutal-sm text-muted-foreground line-through mb-4">
          {t("price.full")}
        </p>
        <p className="text-brutal-md text-muted-foreground line-through">€500</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <p className="text-brutal-sm text-accent-red mb-4">{t("price.now")}</p>
        <p className="text-brutal-xl text-accent-red">€200</p>
      </motion.div>
    </section>
  );
};

export default ScenePrice;

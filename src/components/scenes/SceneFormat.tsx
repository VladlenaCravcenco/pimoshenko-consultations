import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SceneFormat = () => {
  const { t } = useLang();

  return (
    <section className="scene-full flex flex-col lg:flex-row min-h-screen">
      {/* Online - White */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex items-center justify-center bg-foreground"
      >
        <h2 className="text-brutal-xl text-primary-foreground">{t("format.online")}</h2>
      </motion.div>

      {/* Offline - Black */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center bg-background"
      >
        <h2 className="text-brutal-xl text-foreground">{t("format.offline")}</h2>
        <p className="text-brutal-md text-accent-red mt-4">{t("format.dubai")}</p>
      </motion.div>
    </section>
  );
};

export default SceneFormat;

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SceneFormat = () => {
  const { t } = useLang();

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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

      {/* Offline - Black with red text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col items-center justify-center bg-background gap-6"
      >
        <h2 className="text-brutal-xl text-accent-red">{t("format.offline")}</h2>
        <p className="text-brutal-sm text-muted-foreground tracking-[0.3em]">{t("format.global")}</p>
        <button
          onClick={scrollToBooking}
          className="mt-8 text-brutal-sm text-foreground border border-foreground/20 px-8 py-4 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300"
        >
          {t("format.cta")}
        </button>
      </motion.div>
    </section>
  );
};

export default SceneFormat;

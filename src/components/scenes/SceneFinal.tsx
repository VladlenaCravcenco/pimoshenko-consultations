import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SceneFinal = () => {
  const { t } = useLang();

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="scene-full flex flex-col justify-center items-center min-h-screen px-6 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-brutal-lg text-foreground"
      >
        {t("final.line1")}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-brutal-lg text-muted-foreground mt-4"
      >
        {t("final.line2")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{ once: true }}
        onClick={scrollToBooking}
        className="mt-20 cta-link text-brutal-md text-accent-red cursor-pointer"
      >
        {t("final.cta")}
      </motion.div>
    </section>
  );
};

export default SceneFinal;

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const voices = ["voice.1", "voice.2", "voice.3"];

const SceneVoices = () => {
  const { t } = useLang();

  return (
    <section className="scene py-32 lg:py-48 px-6 lg:px-16 flex flex-col gap-24 lg:gap-40">
      {voices.map((key, i) => (
        <motion.blockquote
          key={key}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className={`text-brutal-md text-foreground/80 max-w-[800px] ${
            i === 1 ? "self-end text-right" : ""
          } ${i === 2 ? "self-center" : ""}`}
        >
          {t(key)}
        </motion.blockquote>
      ))}
    </section>
  );
};

export default SceneVoices;

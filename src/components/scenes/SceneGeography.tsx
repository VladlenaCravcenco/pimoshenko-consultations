import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SceneGeography = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0.3, 0.7], [80, 0]);

  return (
    <section ref={ref} className="scene-full relative min-h-screen flex items-center justify-center">
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <h2 className="text-brutal-xl text-accent-red">{t("geo.global")}</h2>
        <p className="text-brutal-sm text-muted-foreground mt-8 tracking-[0.4em]">
          {t("geo.locations")}
        </p>
      </motion.div>
    </section>
  );
};

export default SceneGeography;

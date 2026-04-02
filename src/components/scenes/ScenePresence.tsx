import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import presenceImg from "@/assets/presence-portrait.jpg";

const ScenePresence = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.7], [60, -20]);
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section ref={ref} className="scene-full relative min-h-screen overflow-hidden">
      <motion.img
        src={presenceImg}
        alt=""
        style={{ scale }}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/40" />
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute bottom-16 left-6 lg:left-16 right-6 lg:right-16 z-10"
      >
        <p className="text-brutal-lg text-foreground max-w-[800px]">
          {t("presence.line")}
        </p>
      </motion.div>
    </section>
  );
};

export default ScenePresence;

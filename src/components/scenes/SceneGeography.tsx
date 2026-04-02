import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import dubaiImg from "@/assets/dubai-scene.jpg";

const SceneGeography = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const textY = useTransform(scrollYProgress, [0.3, 0.7], [80, 0]);

  return (
    <section ref={ref} className="scene-full relative min-h-screen overflow-hidden">
      <motion.img
        src={dubaiImg}
        alt=""
        style={{ scale: imgScale }}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/60" />
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center"
      >
        <h2 className="text-brutal-xl text-accent-red">DUBAI</h2>
        <p className="text-brutal-sm text-muted-foreground mt-8 tracking-[0.4em]">
          {t("geo.locations")}
        </p>
        <p className="text-brutal-sm text-foreground/40 mt-4">
          {t("geo.subtitle")}
        </p>
      </motion.div>
    </section>
  );
};

export default SceneGeography;

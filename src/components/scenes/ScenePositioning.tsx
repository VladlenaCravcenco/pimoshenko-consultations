import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const ScenePositioning = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX = useTransform(scrollYProgress, [0.2, 0.5], [-100, 0]);
  const rightX = useTransform(scrollYProgress, [0.2, 0.5], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.45], [0, 1]);

  return (
    <section ref={ref} className="scene-full flex flex-col lg:flex-row min-h-screen">
      {/* Left: Noise */}
      <motion.div
        style={{ x: leftX, opacity }}
        className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 bg-foreground"
      >
        <h2 className="text-brutal-lg text-primary-foreground mb-12">{t("positioning.left.title")}</h2>
        {["positioning.left.1", "positioning.left.2", "positioning.left.3", "positioning.left.4"].map((k) => (
          <p key={k} className="text-brutal-md text-primary-foreground/40 leading-relaxed line-through decoration-2">
            {t(k)}
          </p>
        ))}
      </motion.div>

      {/* Right: Clarity */}
      <motion.div
        style={{ x: rightX, opacity }}
        className="lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col justify-center px-6 lg:px-16 py-20 bg-background"
      >
        <h2 className="text-brutal-lg text-accent-red mb-12">{t("positioning.right.title")}</h2>
        {["positioning.right.1", "positioning.right.2", "positioning.right.3", "positioning.right.4"].map((k) => (
          <p key={k} className="text-brutal-md text-foreground leading-relaxed">
            {t(k)}
          </p>
        ))}
      </motion.div>
    </section>
  );
};

export default ScenePositioning;

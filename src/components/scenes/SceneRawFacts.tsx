import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SceneRawFacts = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [60, -80]);

  return (
    <section ref={ref} className="scene-full relative flex items-center min-h-screen px-6 lg:px-16">
      {/* Scattered numbers */}
      <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[5%] lg:left-[8%]">
        <span className="text-brutal-xl text-accent-red">10+</span>
        <br />
        <span className="text-brutal-sm text-muted-foreground">{t("facts.years")}</span>
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-[30%] right-[8%] lg:right-[15%] text-right">
        <span className="text-brutal-xl text-foreground">33</span>
        <br />
        <span className="text-brutal-sm text-muted-foreground">{t("facts.agency")}</span>
      </motion.div>

      <motion.div style={{ y: y3 }} className="absolute bottom-[25%] left-[15%] lg:left-[35%]">
        <span className="text-brutal-lg text-foreground">EXTRA</span>
        <br />
        <span className="text-brutal-sm text-muted-foreground">{t("facts.extra")}</span>
      </motion.div>

      <motion.div style={{ y: y1 }} className="absolute bottom-[15%] right-[10%]">
        <span className="text-brutal-lg text-foreground">{t("facts.padel")}</span>
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute top-[55%] left-[5%]">
        <span className="text-brutal-md text-accent-red">中文</span>
        <br />
        <span className="text-brutal-sm text-muted-foreground">{t("facts.chinese")}</span>
      </motion.div>
    </section>
  );
};

export default SceneRawFacts;

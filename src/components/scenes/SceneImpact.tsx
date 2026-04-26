import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import heroImg from "@/assets/hero-portrait.jpg";

const SceneImpact = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="scene-full flex flex-col lg:flex-row">
      {/* Text side */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col justify-end p-6 lg:p-12 lg:w-[55%] min-h-[60vh] lg:min-h-screen"
      >
        <div className="mb-12 lg:mb-20">
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-brutal-xl text-foreground leading-[0.85]"
          >
            {t("hero.line1")}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-brutal-xl text-accent-red leading-[0.85]"
          >
            {t("hero.line2")}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-brutal-xl text-foreground leading-[0.85]"
          >
            {t("hero.line3")}
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-brutal-xl text-foreground leading-[0.85]"
          >
            {t("hero.line4")}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          onClick={scrollToBooking}
          className="cta-link text-brutal-sm text-foreground/60 hover:text-accent pb-8 lg:pb-12 cursor-pointer"
        >
          {t("hero.cta")}
        </motion.div>
      </motion.div>

      {/* Image side */}
      <motion.div
        style={{ y: imgY }}
        className="relative lg:w-[45%] h-[50vh] lg:h-screen overflow-hidden"
      >
        <motion.img
          src={heroImg}
          alt=""
          style={{ scale: imgScale }}
          className="w-full h-full object-cover object-bottom lg:object-top"
          width={1200}
          height={1600}
        />
      </motion.div>
    </section>
  );
};

export default SceneImpact;

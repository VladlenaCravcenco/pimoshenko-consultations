import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import heroImg from "@/assets/hero-portrait.jpg";

const SceneProof = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={ref} className="scene-full relative min-h-screen overflow-hidden">
      <motion.img
        src={heroImg}
        alt=""
        style={{ y: imgY }}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        loading="lazy"
        width={1200}
        height={1600}
      />
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 lg:px-16 py-20 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-brutal-xl text-accent-red">500+</span>
          <p className="text-brutal-sm text-muted-foreground mt-2">{t("proof.clients")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="self-end text-right"
        >
          <span className="text-brutal-xl text-foreground">12</span>
          <p className="text-brutal-sm text-muted-foreground mt-2">{t("proof.countries")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-brutal-xl text-foreground">$2M+</span>
          <p className="text-brutal-sm text-muted-foreground mt-2">{t("proof.revenue")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SceneProof;

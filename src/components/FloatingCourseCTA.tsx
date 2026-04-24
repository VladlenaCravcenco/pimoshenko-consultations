import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const FloatingCourseCTA = () => {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="/course"
            className="group flex items-center gap-3 bg-accent text-accent-foreground px-5 py-4 lg:px-6 lg:py-5 shadow-[0_8px_24px_-8px_hsl(350_65%_15%)] hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-accent-foreground group-hover:bg-background animate-pulse" />
            <span className="text-brutal-sm">{t("float.cta")} →</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCourseCTA;

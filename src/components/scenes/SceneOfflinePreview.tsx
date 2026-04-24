import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";

const pastWaves = [
  { city: "CHISINAU", year: "2023", count: "30+" },
  { city: "MOSCOW", year: "2022", count: "50+" },
  { city: "ISTANBUL", year: "2024", count: "25+" },
];

const SceneOfflinePreview = () => {
  const { t } = useLang();

  return (
    <section className="scene py-24 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brutal-sm text-accent-red mb-6"
          >
            {t("offline.label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-brutal-lg mb-8"
          >
            {t("offline.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-brutal-sm text-muted-foreground leading-relaxed max-w-md mb-10"
          >
            {t("offline.desc")}
          </motion.p>
          <Link
            to="/course"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 text-brutal-sm hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            {t("offline.cta")}
          </Link>
        </div>

        <div className="lg:col-span-7">
          <p className="text-brutal-sm text-muted-foreground mb-8">
            {t("offline.past")}
          </p>
          <div className="space-y-0">
            {pastWaves.map((w, i) => (
              <motion.div
                key={w.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-12 gap-4 py-6 border-t border-foreground/10 items-baseline"
              >
                <span className="col-span-1 text-brutal-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <span className="col-span-5 text-brutal-md">{w.city}</span>
                <span className="col-span-3 text-brutal-sm text-muted-foreground">
                  {w.year}
                </span>
                <span className="col-span-3 text-right text-brutal-md text-accent-red">
                  {w.count}
                </span>
              </motion.div>
            ))}
            <div className="border-t border-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SceneOfflinePreview;

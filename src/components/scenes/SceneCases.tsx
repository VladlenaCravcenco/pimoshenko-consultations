import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

const cases = [
  {
    key: "1",
    brand: "cases.1.brand",
    type: "cases.1.type",
    result: "cases.1.result",
    desc: "cases.1.desc",
    reels: [
      { id: "r1-1", thumbnail: "", videoUrl: "" },
      { id: "r1-2", thumbnail: "", videoUrl: "" },
      { id: "r1-3", thumbnail: "", videoUrl: "" },
      { id: "r1-4", thumbnail: "", videoUrl: "" },
      { id: "r1-5", thumbnail: "", videoUrl: "" },
    ],
  },
  {
    key: "2",
    brand: "cases.2.brand",
    type: "cases.2.type",
    result: "cases.2.result",
    desc: "cases.2.desc",
    reels: [
      { id: "r2-1", thumbnail: "", videoUrl: "" },
      { id: "r2-2", thumbnail: "", videoUrl: "" },
      { id: "r2-3", thumbnail: "", videoUrl: "" },
      { id: "r2-4", thumbnail: "", videoUrl: "" },
    ],
  },
  {
    key: "3",
    brand: "cases.3.brand",
    type: "cases.3.type",
    result: "cases.3.result",
    desc: "cases.3.desc",
    reels: [
      { id: "r3-1", thumbnail: "", videoUrl: "" },
      { id: "r3-2", thumbnail: "", videoUrl: "" },
      { id: "r3-3", thumbnail: "", videoUrl: "" },
      { id: "r3-4", thumbnail: "", videoUrl: "" },
      { id: "r3-5", thumbnail: "", videoUrl: "" },
      { id: "r3-6", thumbnail: "", videoUrl: "" },
    ],
  },
  {
    key: "4",
    brand: "cases.4.brand",
    type: "cases.4.type",
    result: "cases.4.result",
    desc: "cases.4.desc",
    reels: [
      { id: "r4-1", thumbnail: "", videoUrl: "" },
      { id: "r4-2", thumbnail: "", videoUrl: "" },
      { id: "r4-3", thumbnail: "", videoUrl: "" },
    ],
  },
];

const ReelCard = ({
  reel,
  isActive,
  onActivate,
  isMobile,
}: {
  reel: { id: string; thumbnail: string; videoUrl: string };
  isActive: boolean;
  onActivate: () => void;
  isMobile: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // On mobile, use IntersectionObserver to auto-activate
  useEffect(() => {
    if (!isMobile || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActivate();
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile, onActivate]);

  // Play/pause video based on active state
  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive) {
      videoRef.current.play().catch(() => {});
      videoRef.current.muted = false;
    } else {
      videoRef.current.pause();
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div
      ref={cardRef}
      className={`relative flex-shrink-0 cursor-pointer overflow-hidden transition-all duration-500 ${
        isMobile ? "w-[70vw] snap-center" : "w-[180px] lg:w-[220px]"
      }`}
      style={{ aspectRatio: "9/16" }}
      onMouseEnter={() => !isMobile && onActivate()}
      onMouseLeave={() => {}}
    >
      {/* Placeholder / video container */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isActive ? "grayscale-0" : "grayscale"
        }`}
      >
        {reel.videoUrl ? (
          <video
            ref={videoRef}
            src={reel.videoUrl}
            className="w-full h-full object-cover"
            loop
            playsInline
            muted
            preload="metadata"
          />
        ) : (
          /* Placeholder when no video URL yet */
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 border-2 border-muted-foreground/30 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-muted-foreground/30 ml-1" />
              </div>
              <span className="text-brutal-sm text-muted-foreground/40">REEL</span>
            </div>
          </div>
        )}
      </div>

      {/* Active indicator */}
      {isActive && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent origin-left"
        />
      )}
    </div>
  );
};

const SceneCases = () => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const [openCase, setOpenCase] = useState<string | null>(null);
  const [activeReel, setActiveReel] = useState<string | null>(null);

  const toggleCase = (key: string) => {
    if (openCase === key) {
      setOpenCase(null);
      setActiveReel(null);
    } else {
      setOpenCase(key);
      setActiveReel(null);
    }
  };

  return (
    <section ref={ref} className="scene py-24 lg:py-40 px-6 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 lg:mb-32 gap-4">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-brutal-xl text-foreground"
        >
          {t("cases.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-brutal-sm text-muted-foreground"
        >
          {t("cases.subtitle")}
        </motion.p>
      </div>

      <div className="space-y-0">
        {cases.map((c, i) => {
          const start = 0.05 + i * 0.18;
          const end = start + 0.12;
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const x = useTransform(
            scrollYProgress,
            [start, end],
            [i % 2 === 0 ? -50 : 50, 0]
          );
          const isOpen = openCase === c.key;

          return (
            <motion.div
              key={c.key}
              style={{ opacity, x }}
              className="border-t border-foreground/10"
            >
              {/* Case header — clickable */}
              <div
                onClick={() => toggleCase(c.key)}
                className="py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline group cursor-pointer"
              >
                <div className="lg:col-span-1">
                  <span className="text-brutal-sm text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <div className="lg:col-span-3 flex items-center gap-3">
                  <h3
                    className={`text-brutal-md transition-colors duration-300 ${
                      isOpen ? "text-accent-red" : "text-foreground group-hover:text-accent"
                    }`}
                  >
                    {t(c.brand)}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-brutal-md text-muted-foreground"
                  >
                    +
                  </motion.span>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-brutal-sm text-muted-foreground leading-relaxed">
                    {t(c.type)}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <span className="text-brutal-md text-accent-red">
                    {t(c.result)}
                  </span>
                </div>
              </div>

              {/* Expandable reels carousel */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 lg:pb-16">
                      {/* Description */}
                      <p className="text-brutal-sm text-muted-foreground leading-relaxed max-w-[800px] mb-8 lg:mb-12">
                        {t(c.desc)}
                      </p>
                      {/* Desktop: horizontal carousel with gap */}
                      {!isMobile ? (
                        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                          {c.reels.map((reel) => (
                            <ReelCard
                              key={reel.id}
                              reel={reel}
                              isActive={activeReel === reel.id}
                              onActivate={() => setActiveReel(reel.id)}
                              isMobile={false}
                            />
                          ))}
                        </div>
                      ) : (
                        /* Mobile: horizontal snap scroll */
                        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scrollbar-hide">
                          {c.reels.map((reel) => (
                            <ReelCard
                              key={reel.id}
                              reel={reel}
                              isActive={activeReel === reel.id}
                              onActivate={() => setActiveReel(reel.id)}
                              isMobile={true}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        <div className="border-t border-foreground/10" />
      </div>
    </section>
  );
};

export default SceneCases;

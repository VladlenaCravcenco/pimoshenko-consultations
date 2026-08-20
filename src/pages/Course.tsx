import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { useRef, useState } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const Hero = () => {
  const { t } = useLang();
  return (
    <section className="scene-full flex flex-col justify-center px-6 lg:px-16 pt-20 lg:pt-32 pb-16 lg:pb-20 relative">
      <Link
        to="/"
        className="absolute top-6 lg:top-8 left-6 lg:left-16 text-brutal-sm hover:text-accent transition-colors"
      >
        {t("course.back")}
      </Link>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-brutal-xl"
      >
        {t("course.hero.title1")}
      </motion.h1>

      <p className="mt-8 lg:mt-12 text-sm lg:text-base font-medium normal-case tracking-normal text-foreground/90 max-w-4xl">
        {t("course.hero.sub")}
      </p>

      <div className="mt-6 lg:mt-8 flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center">
        <a
          href="#price"
          className="inline-block bg-accent text-accent-foreground px-6 lg:px-8 py-3 lg:py-4 text-sm lg:text-base font-medium tracking-normal normal-case hover:bg-foreground hover:text-background transition-colors w-fit"
        >
          {t("course.hero.cta")} →
        </a>
      </div>
    </section>
  );
};

const WordReveal = ({
  progress,
  range,
  text,
  className,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  text: string;
  className?: string;
}) => {
  const words = text.trim().split(/\s+/);

  return (
    <span aria-label={text} className={className}>
      {words.map((word, index) => {
        const portion = (range[1] - range[0]) / Math.max(words.length, 1);
        const start = range[0] + portion * index;
        const end = Math.min(start + portion * 1.8, range[1]);

        return (
          <RevealingWord
            key={`${word}-${index}`}
            progress={progress}
            range={[start, end]}
            isLast={index === words.length - 1}
          >
            {word}
          </RevealingWord>
        );
      })}
    </span>
  );
};

const RevealingWord = ({
  children,
  progress,
  range,
  isLast,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isLast: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.24, 1]);
  const filter = useTransform(progress, range, ["brightness(0.65)", "brightness(1.15)"]);

  return (
    <motion.span
      aria-hidden="true"
      style={{ opacity, filter, marginRight: isLast ? 0 : "0.28em" }}
      className="inline-block will-change-[opacity,filter]"
    >
      {children}
    </motion.span>
  );
};

const ExperienceNote = () => {
  const { t } = useLang();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={ref} className="scene py-16 lg:py-24 px-6 lg:px-16 border-t border-foreground/10 bg-secondary">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.25fr] gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden border border-foreground/10 bg-background"
        >
          <img src={heroPortrait} alt="" className="w-full h-[420px] lg:h-[520px] object-cover object-center" />
          <div className="absolute bottom-5 left-5 right-5 bg-background/90 backdrop-blur-sm border border-foreground/10 p-4 shadow-[8px_8px_0_rgba(0,0,0,0.08)]">
            <p className="text-sm lg:text-base leading-relaxed tracking-[0.02em] text-foreground/45">
              <WordReveal
                progress={scrollYProgress}
                range={[0.08, 0.3]}
                text={`${t("course.experience.caption.strong1")}${t("course.experience.caption.middle")}${t("course.experience.caption.strong2")}`}
                className="font-black"
              />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          viewport={{ once: true }}
          className="space-y-5 lg:space-y-6"
        >
          <h3 className="text-brutal-lg leading-[0.9] tracking-[-0.04em] text-foreground/80">
            <WordReveal progress={scrollYProgress} range={[0.2, 0.38]} text={t("course.experience.title")} />
          </h3>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <WordReveal progress={scrollYProgress} range={[0.32, 0.5]} text={t("course.experience.p1")} />
          </p>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <WordReveal progress={scrollYProgress} range={[0.42, 0.62]} text={t("course.experience.p2")} />
          </p>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <WordReveal progress={scrollYProgress} range={[0.52, 0.72]} text={t("course.experience.p3")} />
          </p>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <WordReveal progress={scrollYProgress} range={[0.62, 0.82]} text={t("course.experience.p4")} />
          </p>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <WordReveal progress={scrollYProgress} range={[0.74, 0.9]} text={t("course.experience.p5")} />
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Pain = () => {
  const { t } = useLang();
  const items = ["course.pain.1", "course.pain.2", "course.pain.3", "course.pain.4"];
  return (
    <section className="scene py-24 lg:py-40 px-6 lg:px-16 border-t border-foreground/10 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-brutal-lg mb-16 lg:mb-24"
      >
        {t("course.pain.title")}
      </motion.h2>

      <div>
        {items.map((key, index) => {
          const isRight = index % 2 !== 0;
          const isLast = index === items.length - 1;

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: isRight ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`py-12 lg:py-20 ${isRight ? "text-right" : "text-left"}`}
            >
              <p
                className={`text-brutal-lg break-words ${
                  isLast ? "text-accent-red" : "text-foreground"
                } ${isRight ? "ml-auto" : "mr-auto"} max-w-5xl`}
              >
                {t(key)}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const Who = () => {
  const { t } = useLang();
  const items = [
    {
      titleKey: "course.who.media.title",
      textKey: "course.who.media.text",
    },
    {
      titleKey: "course.who.business.title",
      textKey: "course.who.business.text",
    },
    {
      titleKey: "course.who.creators.title",
      textKey: "course.who.creators.text",
    },
    {
      titleKey: "course.who.marketers.title",
      textKey: "course.who.marketers.text",
    },
    {
      titleKey: "course.who.freelance.title",
      textKey: "course.who.freelance.text",
    },
  ];

  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-brutal-lg mb-12 lg:mb-20"
      >
        {t("course.who.title")}
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-foreground/10">
        {items.map((item, index) => (
          <motion.div
            key={item.titleKey}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.25 }}
            className="group border-t border-foreground/10 py-10 lg:py-20 lg:pr-8 xl:pr-16"
          >
            <h3
              className={`text-brutal-lg leading-[0.9] mb-7 lg:mb-10 break-words transition-colors duration-500 ${
                index % 2 === 0 ? "text-accent-red" : "text-foreground"
              }`}
            >
              {t(item.titleKey)}
            </h3>
            <p
              className="text-xs lg:text-sm text-muted-foreground/70 leading-relaxed max-w-md"
              style={{ fontFamily: "'Space Grotesk', sans-serif", textTransform: "none", letterSpacing: "0" }}
            >
              {t(item.textKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Program = () => {
  const { t } = useLang();
  const [openDay, setOpenDay] = useState<number | null>(0);
  const days = [
    {
      titleKey: "course.prog.d1.t",
      descKey: "course.prog.d1.d",
      pointsKeys: ["course.prog.d1.p1", "course.prog.d1.p2", "course.prog.d1.p3", "course.prog.d1.p4"],
    },
    {
      titleKey: "course.prog.d2.t",
      descKey: "course.prog.d2.d",
      pointsKeys: ["course.prog.d2.p1", "course.prog.d2.p2", "course.prog.d2.p3", "course.prog.d2.p4"],
    },
    {
      titleKey: "course.prog.d3.t",
      descKey: "course.prog.d3.d",
      pointsKeys: ["course.prog.d3.p1", "course.prog.d3.p2", "course.prog.d3.p3", "course.prog.d3.p4"],
    },
    {
      titleKey: "course.prog.d4.t",
      descKey: "course.prog.d4.d",
      pointsKeys: ["course.prog.d4.p1", "course.prog.d4.p2", "course.prog.d4.p3"],
    },
    {
      titleKey: "course.prog.d5.t",
      descKey: "course.prog.d5.d",
      premium: true,
      premiumLabelKey: "course.prog.d5.premium",
      pointsKeys: ["course.prog.d5.p1", "course.prog.d5.p2", "course.prog.d5.p3", "course.prog.d5.p4"],
    },
  ];

  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">{t("course.prog.title")}</h2>
      <div className="space-y-0">
        {days.map((d, i) => {
          const isOpen = openDay === i;
          return (
            <motion.div
              key={d.titleKey}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="border-t border-foreground/10"
            >
              <button
                onClick={() => setOpenDay(isOpen ? null : i)}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 py-6 lg:py-8 items-center text-left group"
              >
                <h3
                  className={`lg:col-span-5 text-brutal-md transition-colors break-words ${
                    isOpen ? "text-accent-red" : "group-hover:text-accent"
                  }`}
                >
                  {t(d.titleKey)}
                </h3>
                <p className="lg:col-span-5 text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  {t(d.descKey)}
                </p>
                <div className="lg:col-span-1 flex justify-end items-center">
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center text-brutal-md leading-none origin-center transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
              </button>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                >
                  <div className="lg:pl-[8.33%] pb-8 lg:pb-10 px-2 lg:px-0">
                    {d.premium && (
                      <div className="mb-4 inline-flex items-center border border-accent-red/80 bg-accent-red/10 px-2.5 py-1 text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.16em] text-accent-red">
                        {t(d.premiumLabelKey)}
                      </div>
                    )}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-2 lg:gap-y-3 max-w-3xl">
                      {d.pointsKeys.map((pk) => (
                        <li
                          key={pk}
                          className="flex items-baseline gap-2 lg:gap-3 text-xs lg:text-sm text-foreground/80"
                        >
                          <span className="text-accent-red flex-shrink-0">→</span>
                          <span>{t(pk)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
        <div className="border-t border-foreground/10" />
      </div>
    </section>
  );
};

const WhatYouGet = () => {
  const { t } = useLang();
  const benefits = [
    "course.get.benefit.1",
    "course.get.benefit.2",
    "course.get.benefit.3",
    "course.get.benefit.4",
  ];

  const skills = [
    ...Array.from({ length: 14 }, (_, index) => `course.get.skill.${index + 1}`),
  ];

  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10 bg-secondary">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">{t("course.get.title")}</h2>

      <div className="mx-auto max-w-5xl space-y-0">
        {benefits.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            viewport={{ once: true, amount: 0.55 }}
            className="flex items-center gap-4 lg:gap-5 border-t border-foreground/10 py-4 lg:py-5 text-left"
          >
            <span className="text-accent-red text-xl lg:text-2xl leading-none flex-shrink-0">→</span>
            <span className="text-[1.125rem] leading-tight break-words font-medium">{t(item)}</span>
          </motion.div>
        ))}

        <div className="mt-12 lg:mt-16 space-y-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + index * 0.04, duration: 0.25 }}
              viewport={{ once: true, amount: 0.6 }}
              className="flex items-start gap-3 lg:gap-4 border-t border-foreground/10 py-3 lg:py-4"
            >
              <span className="text-accent-red text-lg lg:text-xl leading-none mt-1 flex-shrink-0">→</span>
              <span className="text-[1.125rem] leading-relaxed break-words text-foreground/90">
                {t(skill)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Format = () => {
  const { t } = useLang();
  const items = [
    { label: "course.fmt.date.label", value: "course.fmt.date.value" },
    { label: "course.fmt.practice.label", value: "course.fmt.practice.value" },
    { label: "course.fmt.graduation.label", value: "course.fmt.graduation.value" },
    { label: "course.fmt.booking.label", value: "course.fmt.booking.value" },
  ];

  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">{t("course.fmt.title")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl">
        {items.map((it, index) => (
          <div
            key={it.label}
            className={`border border-foreground/10 bg-background/40 p-5 lg:p-6 ${
              index === 3 ? "md:col-span-2" : ""
            }`}
          >
            <p className="text-xs lg:text-sm uppercase tracking-[0.18em] text-accent-red mb-3">
              {t(it.label)}
            </p>
            <p className="text-2xl lg:text-4xl font-black uppercase tracking-[-0.06em] leading-none">
              {t(it.value)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Price = () => {
  const { t } = useLang();
  const tiers = [
    {
      name: "course.price.std",
      amount: "course.price.std.amount",
      note: "course.price.std.note",
      featured: false,
      includes: [
        "course.price.std.inc.1",
        "course.price.std.inc.2",
        "course.price.std.inc.3",
        "course.price.std.inc.4",
        "course.price.std.inc.5",
        "course.price.std.inc.6",
        "course.price.std.inc.7",
      ],
      excludes: [],
    },
    {
      name: "course.price.pro",
      amount: "course.price.pro.amount",
      note: "course.price.pro.note",
      featured: true,
      includes: [
        "course.price.pro.inc.1",
        "course.price.pro.inc.2",
        "course.price.pro.inc.3",
        "course.price.pro.inc.4",
        "course.price.pro.inc.5",
        "course.price.pro.inc.6",
        "course.price.pro.inc.7",
        "course.price.pro.inc.8",
        "course.price.pro.inc.9",
        "course.price.pro.inc.10",
        "course.price.pro.inc.11",
      ],
      excludes: [],
    },
    {
      name: "course.price.elite",
      amount: "course.price.elite.amount",
      note: "course.price.elite.note",
      featured: false,
      includes: [
        "course.price.elite.inc.1",
        "course.price.elite.inc.2",
        "course.price.elite.inc.3",
        "course.price.elite.inc.4",
        "course.price.elite.inc.5",
        "course.price.elite.inc.6",
        "course.price.elite.inc.7",
        "course.price.elite.inc.8",
        "course.price.elite.inc.9",
      ],
      excludes: [],
    },
  ];
  return (
    <section id="price" className="scene py-24 lg:py-40 px-6 lg:px-16 border-t border-foreground/10 bg-secondary">
      <h2 className="text-brutal-lg mb-16">{t("course.price.title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`p-10 border ${
              tier.featured
                ? "border-accent bg-accent/10"
                : "border-foreground/10"
            } flex flex-col`}
          >
            <p className="text-3xl lg:text-4xl font-black uppercase tracking-[-0.05em] leading-none mb-3">{t(tier.name)}</p>
            <p className="text-brutal-lg mb-2">{t(tier.amount)}</p>
            <p className="text-brutal-sm text-muted-foreground mb-8">{t(tier.note)}</p>

            <div className="mb-6">
              <p className="text-brutal-sm text-accent-red mb-4">
                {t("course.price.includes")}
              </p>
              <ul className="space-y-2">
                {tier.includes.map((k) => (
                  <li key={k} className="flex items-baseline gap-3 text-sm text-foreground/80">
                    <span className="text-accent-red">✓</span>
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {tier.excludes.length > 0 && (
              <div className="mb-10">
                <ul className="space-y-2">
                  {tier.excludes.map((k) => (
                    <li
                      key={k}
                      className="flex items-baseline gap-3 text-sm text-muted-foreground/80 line-through"
                    >
                      <span>−</span>
                      <span>{t(k)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href="https://wa.me/971000000000"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-auto px-6 py-4 text-brutal-sm text-center transition-colors ${
                tier.featured
                  ? "bg-accent text-accent-foreground hover:bg-foreground hover:text-background"
                  : "border border-foreground/30 hover:border-accent hover:text-accent"
              }`}
            >
              {t("course.price.cta")}
            </a>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 lg:mt-20 border-t border-foreground/10 pt-8 lg:pt-10">
        <p className="max-w-5xl text-2xl lg:text-4xl xl:text-5xl font-black uppercase tracking-[-0.06em] leading-[1.02]">
          {t("course.price.outcome.before")}<span className="text-accent-red">{t("course.price.outcome.diploma")}</span>{t("course.price.outcome.middle")}<span className="text-accent-red">{t("course.price.outcome.end")}</span>
        </p>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const items = [
    { q: "course.faq.1.q", a: "course.faq.1.a" },
    { q: "course.faq.2.q", a: "course.faq.2.a" },
    { q: "course.faq.3.q", a: "course.faq.3.a" },
  ];
  return (
    <section className="scene py-24 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <h2 className="text-brutal-lg mb-16">{t("course.faq.title")}</h2>
      <div className="max-w-4xl">
        {items.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q} className="border-t border-foreground/10">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full py-8 flex justify-between items-baseline gap-6 text-left group"
              >
                <span className={`text-brutal-md ${isOpen ? "text-accent-red" : "group-hover:text-accent"} transition-colors`}>
                  {t(it.q)}
                </span>
                <span className={`text-brutal-md transition-transform ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden pb-8"
                >
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {t(it.a)}
                  </p>
                </motion.div>
              )}
            </div>
          );
        })}
        <div className="border-t border-foreground/10" />
      </div>
    </section>
  );
};

const Final = () => {
  const { t } = useLang();

  return (
    <section className="scene-full flex flex-col justify-center items-center text-center px-6 lg:px-16 border-t border-foreground/10">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-brutal-xl text-accent-red mb-10"
      >
        {t("course.final.title")}
      </motion.h2>

      <a
        href="#price"
        className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 lg:px-12 py-5 lg:py-6 text-xl lg:text-3xl font-black uppercase tracking-[-0.06em] hover:bg-foreground hover:text-background transition-colors"
      >
        {t("course.final.booking")}
      </a>
    </section>
  );
};

const CourseInner = () => (
  <>
    <LanguageSwitcher />
    <main className="bg-background">
      <Hero />
      <ExperienceNote />
      <Pain />
      <Who />
      <Program />
      <WhatYouGet />
      <Format />
      <Price />
      <FAQ />
      <Final />
      <Footer />
    </main>
  </>
);

const Course = () => <CourseInner />;

export default Course;

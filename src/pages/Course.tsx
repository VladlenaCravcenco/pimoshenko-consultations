import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LanguageProvider, useLang } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";
import { useState } from "react";

const Hero = () => {
  const { t } = useLang();
  return (
    <section className="scene-full flex flex-col justify-center px-6 lg:px-16 pt-20 lg:pt-32 pb-16 lg:pb-20 relative">
      <Link
        to="/"
        className="absolute top-6 lg:top-8 left-6 lg:left-16 text-brutal-sm text-muted-foreground hover:text-accent transition-colors"
      >
        {t("course.back")}
      </Link>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-brutal-sm text-accent-red mb-6 lg:mb-8"
      >
        {t("course.hero.kicker")}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-brutal-xl"
      >
        {t("course.hero.title1")}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="text-brutal-xl"
      >
        {t("course.hero.title2")}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-brutal-xl text-accent-red"
      >
        {t("course.hero.title3")}
      </motion.h1>

      <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-4 lg:gap-6 lg:items-center">
        <p className="text-brutal-sm text-muted-foreground max-w-full lg:max-w-xs">{t("course.hero.sub")}</p>
        <a
          href="#price"
          className="inline-block bg-accent text-accent-foreground px-6 lg:px-8 py-3 lg:py-4 text-brutal-sm hover:bg-foreground hover:text-background transition-colors w-fit"
        >
          {t("course.hero.cta")} →
        </a>
        <span className="text-brutal-sm text-accent-red">{t("course.hero.spots")}</span>
      </div>
    </section>
  );
};

const Pain = () => {
  const { t } = useLang();
  const items = ["course.pain.1", "course.pain.2", "course.pain.3", "course.pain.4"];
  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">{t("course.pain.title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {items.map((k, i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="border-t border-foreground/10 py-8 lg:py-10 flex items-baseline gap-4 lg:gap-6"
          >
            <span className="text-brutal-sm text-accent-red flex-shrink-0">0{i + 1}</span>
            <span className="text-brutal-md break-words">{t(k)}</span>
          </motion.div>
        ))}
        <div className="border-t border-foreground/10 lg:col-span-2" />
      </div>
    </section>
  );
};

const Who = () => {
  const { t } = useLang();
  const items = [
    { t: "course.who.1.t", d: "course.who.1.d" },
    { t: "course.who.2.t", d: "course.who.2.d" },
    { t: "course.who.3.t", d: "course.who.3.d" },
  ];
  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10 bg-secondary">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">{t("course.who.title")}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border border-foreground/10 p-6 lg:p-8 hover:border-accent transition-colors"
          >
            <p className="text-brutal-sm text-accent-red mb-4">0{i + 1}</p>
            <h3 className="text-brutal-md mb-3 lg:mb-4 break-words">{t(it.t)}</h3>
            <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">{t(it.d)}</p>
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
      t: "course.prog.d1.t",
      d: "course.prog.d1.d",
      points: [
        "course.prog.d1.p1",
        "course.prog.d1.p2",
        "course.prog.d1.p3",
        "course.prog.d1.p4",
      ],
    },
    {
      t: "course.prog.d2.t",
      d: "course.prog.d2.d",
      points: [
        "course.prog.d2.p1",
        "course.prog.d2.p2",
        "course.prog.d2.p3",
        "course.prog.d2.p4",
      ],
    },
    {
      t: "course.prog.d3.t",
      d: "course.prog.d3.d",
      points: [
        "course.prog.d3.p1",
        "course.prog.d3.p2",
        "course.prog.d3.p3",
        "course.prog.d3.p4",
      ],
    },
    {
      t: "course.prog.d4.t",
      d: "course.prog.d4.d",
      points: [
        "course.prog.d4.p1",
        "course.prog.d4.p2",
        "course.prog.d4.p3",
        "course.prog.d4.p4",
      ],
    },
    {
      t: "course.prog.d5.t",
      d: "course.prog.d5.d",
      points: [
        "course.prog.d5.p1",
        "course.prog.d5.p2",
        "course.prog.d5.p3",
        "course.prog.d5.p4",
      ],
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
              key={d.t}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="border-t border-foreground/10"
            >
              <button
                onClick={() => setOpenDay(isOpen ? null : i)}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 py-6 lg:py-8 items-baseline text-left group"
              >
                <span className="lg:col-span-1 text-brutal-sm text-accent-red flex-shrink-0">
                  0{i + 1}
                </span>
                <h3
                  className={`lg:col-span-5 text-brutal-md transition-colors break-words ${
                    isOpen ? "text-accent-red" : "group-hover:text-accent"
                  }`}
                >
                  {t(d.t)}
                </h3>
                <p className="lg:col-span-5 text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  {t(d.d)}
                </p>
                <span
                  className={`lg:col-span-1 text-right text-brutal-md transition-transform flex-shrink-0 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="overflow-hidden"
                >
                  <div className="lg:pl-[8.33%] pb-8 lg:pb-10 px-2 lg:px-0">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-2 lg:gap-y-3 max-w-3xl">
                      {d.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-baseline gap-2 lg:gap-3 text-xs lg:text-sm text-foreground/80"
                        >
                          <span className="text-accent-red flex-shrink-0">→</span>
                          <span>{t(p)}</span>
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
  const items = [
    "course.get.1",
    "course.get.2",
    "course.get.3",
    "course.get.4",
    "course.get.5",
    "course.get.6",
  ];
  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10 bg-secondary">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">{t("course.get.title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-4 lg:gap-y-6">
        {items.map((k, i) => (
          <motion.div
            key={k}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="flex items-baseline gap-3 py-3 lg:py-4 border-b border-foreground/10"
          >
            <span className="text-accent-red text-brutal-sm flex-shrink-0">→</span>
            <span className="text-brutal-sm break-words">{t(k)}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Format = () => {
  const { t } = useLang();
  const items = [
    { l: "DATES", v: "course.fmt.dates" },
    { l: "PLACE", v: "course.fmt.place" },
    { l: "SEATS", v: "course.fmt.spots" },
    { l: "LANG", v: "course.fmt.lang" },
  ];
  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">{t("course.fmt.title")}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {items.map((it) => (
          <div key={it.l} className="border-t border-foreground/10 pt-4 lg:pt-6">
            <p className="text-brutal-sm text-muted-foreground mb-2 lg:mb-4">{it.l}</p>
            <p className="text-brutal-md break-words">{t(it.v)}</p>
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
      name: "course.price.early",
      amount: "course.price.early.amount",
      note: "course.price.early.note",
      featured: true,
      includes: [
        "course.price.early.inc.1",
        "course.price.early.inc.2",
        "course.price.early.inc.3",
        "course.price.early.inc.4",
      ],
      excludes: ["course.price.early.exc.1", "course.price.early.exc.2"],
    },
    {
      name: "course.price.std",
      amount: "course.price.std.amount",
      note: "course.price.std.note",
      includes: [
        "course.price.std.inc.1",
        "course.price.std.inc.2",
        "course.price.std.inc.3",
        "course.price.std.inc.4",
        "course.price.std.inc.5",
      ],
      excludes: ["course.price.std.exc.1"],
    },
    {
      name: "course.price.vip",
      amount: "course.price.vip.amount",
      note: "course.price.vip.note",
      includes: [
        "course.price.vip.inc.1",
        "course.price.vip.inc.2",
        "course.price.vip.inc.3",
        "course.price.vip.inc.4",
        "course.price.vip.inc.5",
        "course.price.vip.inc.6",
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
            <p className="text-brutal-sm text-muted-foreground mb-6">{t(tier.name)}</p>
            <p className="text-brutal-lg mb-2">{t(tier.amount)}</p>
            <p className="text-brutal-sm text-muted-foreground mb-8">{t(tier.note)}</p>

            <div className="mb-6">
              <p className="text-brutal-sm text-accent-red mb-4">
                {t("course.price.includes")}
              </p>
              <ul className="space-y-2">
                {tier.includes.map((k) => (
                  <li key={k} className="flex items-baseline gap-3 text-sm text-foreground/80">
                    <span className="text-accent-red">+</span>
                    <span>{t(k)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {tier.excludes.length > 0 && (
              <div className="mb-10">
                <p className="text-brutal-sm text-muted-foreground mb-4">
                  {t("course.price.excludes")}
                </p>
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
        className="text-brutal-xl text-accent-red mb-12"
      >
        {t("course.final.title")}
      </motion.h2>
      <a
        href="#price"
        className="inline-block bg-accent text-accent-foreground px-12 py-6 text-brutal-md hover:bg-foreground hover:text-background transition-colors"
      >
        {t("course.final.cta")}
      </a>
    </section>
  );
};

const CourseInner = () => (
  <>
    <LanguageSwitcher />
    <main className="bg-background">
      <Hero />
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

const Course = () => (
  <LanguageProvider>
    <CourseInner />
  </LanguageProvider>
);

export default Course;

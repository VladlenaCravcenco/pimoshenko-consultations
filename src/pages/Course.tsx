import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { LanguageProvider, useLang } from "@/context/LanguageContext";
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

const ExperienceNote = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const fillY = useTransform(scrollYProgress, [0.15, 0.9], ["100%", "0%"]);

  const RevealText = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <motion.span
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.35) 32%, #ffffff 32%, #ffffff 100%)",
        backgroundSize: "100% 220%",
        backgroundPositionY: fillY,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        WebkitTextFillColor: "transparent",
      }}
      className={className}
    >
      {children}
    </motion.span>
  );

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
              <RevealText className="font-black text-foreground/45">
                10 лет
              </RevealText>{" "}опыта в маркетинге — в одном
              <RevealText className="font-black text-foreground/45"> офлайн-курсе</RevealText>
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
            <RevealText>
              Практика + Офлайн обучение
            </RevealText>
          </h3>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <RevealText>
              Курс создан для тех, кто хочет освоить SMM-профессию и выйти на новый уровень.
            </RevealText>
          </p>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <RevealText>
              Вы будете работать с реальными проектами, создавать контент, оформлять профессиональный профиль
              и запускать работу, с которой сможете начать уже после окончания курса.
            </RevealText>
          </p>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <RevealText>
              Я расскажу, как узаконить профессию, как идти в ногу с рынком, куда расти из SMM-специалиста,
              как выстраивать стратегию, командообразование и делегирование.
            </RevealText>
          </p>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <RevealText>
              Я не учу вести страницы — я учу строить систему SMM, которая позволяет собирать команду под
              любой тип бизнеса или вести его самостоятельно.
            </RevealText>
          </p>

          <p className="text-sm lg:text-base leading-relaxed text-foreground/80">
            <RevealText>
              Мы определяем ваш уровень заранее и принимаем решение, в какую группу вас лучше определить.
            </RevealText>
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
            <span className="text-brutal-md break-words">{t(k)}</span>
          </motion.div>
        ))}
        <div className="border-t border-foreground/10 lg:col-span-2" />
      </div>
    </section>
  );
};

const Who = () => {
  const items = [
    {
      title: "МЕДИА",
      text: "Для людей из медиа, которые хотят новую профессию в SMM.",
    },
    {
      title: "ПРЕДПРИНИМАТЕЛИ",
      text: "Для предпринимателей, которые хотят знать, как правильно собрать команду и контролировать работу SMM.",
    },
    {
      title: "КРЕАТОРЫ И БЛОГЕРЫ",
      text: "Для контент-креаторов и блогеров, которые хотят вырасти и увеличить чек.",
    },
    {
      title: "МАРКЕТОЛОГИ",
      text: "Для маркетологов и специалистов, желающих повысить свою квалификацию.",
    },
    {
      title: "FREELANCE",
      text: "Для тех, кто хочет работать в свободном графике или стать частью маркетинговой команды.",
    },
  ];

  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10 bg-secondary">
      <h2 className="text-brutal-lg mb-10 lg:mb-16">ДЛЯ КОГО</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            className="border border-foreground/10 bg-background/60 p-4 lg:p-5 min-h-[160px] flex flex-col justify-between"
          >
            <h3 className="text-brutal-md leading-tight mb-1 text-foreground break-words">
              {item.title}
            </h3>
            <p className="text-xs lg:text-sm text-foreground/80 leading-relaxed mt-0">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Program = () => {
  const [openDay, setOpenDay] = useState<number | null>(0);
  const days = [
    {
      title: "ДЕНЬ 1 · СТРАТЕГИЯ",
      desc: "Позиционирование, аудитория, ниша, продукт и структура продвижения.",
      points: [
        "Основы маркетинга и SMM.",
        "Построение стратегии продвижения для разных платформ.",
        "Анализ аудитории и конкурентов.",
        "Создание контент-стратегии.",
      ],
    },
    {
      title: "ДЕНЬ 2 · КОНТЕНТ",
      desc: "Как придумывать идеи, снимать и собирать контент в систему.",
      points: [
        "Сценарии Reels и коротких видео.",
        "Работа с камерой телефона.",
        "Монтаж видео (CapCut).",
        "Canva и создание визуала и КП.",
        "Оформление Instagram.",
      ],
    },
    {
      title: "ДЕНЬ 3 · ПРОДАЖИ",
      desc: "Как продавать через SMM, работать с клиентами и выстраивать ценность.",
      points: [
        "Личный бренд SMM-специалиста.",
        "Работа с клиентами.",
        "Создание коммерческого предложения (КП).",
        "Формирование стоимости услуг.",
        "Поиск первых клиентов.",
      ],
    },
    {
      title: "ДЕНЬ 4 · МЕТРИКИ И РЕКЛАМА",
      desc: "Как понимать эффективность, запускать продвижение и работать с результатом.",
      points: [
        "Работа с метриками и таргетом.",
        "Работа с текстами.",
        "Использование AI в работе SMM.",
      ],
    },
    {
      title: "ДЕНЬ 5 · ПРАКТИКА",
      desc: "Практические уроки и разбор реальных кейсов.",
      premium: true,
      premiumLabel: "только для Premium",
      points: [
        "Съёмка на улице.",
        "Съёмка в ресторане.",
        "Съёмка в Твистер.",
        "Практические уроки для premium-пакета: разбор реальных кейсов, работа с контентом и закрепление навыков на практике.",
      ],
    },
  ];

  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">ПРОГРАММА · 5 ДНЕЙ</h2>
      <div className="space-y-0">
        {days.map((d, i) => {
          const isOpen = openDay === i;
          return (
            <motion.div
              key={d.title}
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
                  {d.title}
                </h3>
                <p className="lg:col-span-5 text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  {d.desc}
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
                        {d.premiumLabel}
                      </div>
                    )}
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-2 lg:gap-y-3 max-w-3xl">
                      {d.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-baseline gap-2 lg:gap-3 text-xs lg:text-sm text-foreground/80"
                        >
                          <span className="text-accent-red flex-shrink-0">→</span>
                          <span>{p}</span>
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
  const benefits = [
    "Разрабатывать полноценную SMM-стратегию.",
    "Собрать свою команду для продвижения.",
    "Повышать стоимость продукта каждые пол года.",
    "Продавать проекты под ключ.",
  ];

  const skills = [
    "Анализировать целевую аудиторию и конкурентов.",
    "Создавать контент-планы.",
    "Снимать профессиональный контент на телефон.",
    "Монтировать Reels и TikTok.",
    "Работать с AI-инструментами для создания контента.",
    "Оформлять Instagram-профили.",
    "Создавать продающие Stories.",
    "Писать тексты для брендов.",
    "Запускать продвижение и понимать основы рекламы.",
    "Общаться с клиентами и вести проекты.",
    "Формировать стоимость своих услуг.",
    "Создать собственное портфолио.",
    "Продвигать себя как SMM-специалиста.",
    "Найти первых клиентов и начать работать в профессии.",
  ];

  return (
    <section className="scene py-16 lg:py-40 px-6 lg:px-16 border-t border-foreground/10 bg-secondary">
      <h2 className="text-brutal-lg mb-12 lg:mb-16">ЧТО ПОЛУЧИШЬ</h2>

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
            <span className="text-[1.125rem] leading-tight break-words font-medium">{item}</span>
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
                {skill}
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
    { label: "ДАТЫ", value: "7–11 сентября" },
    { label: "ПРАКТИЧЕСКИЕ ДНИ", value: "12–13–14" },
    { label: "ВЫПУСКНОЙ", value: "15 сентября · PARTY" },
    { label: "БРОНЬ КУРСА", value: "250€" },
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
              {it.label}
            </p>
            <p className="text-2xl lg:text-4xl font-black uppercase tracking-[-0.06em] leading-none">
              {it.value}
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
          После окончания курса вы выйдете не только с <span className="text-accent-red">дипломом</span>, но и с готовым набором инструментов для <span className="text-accent-red">старта в SMM</span>
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
        Бронь курса · 250€ →
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

const Course = () => (
  <LanguageProvider>
    <CourseInner />
  </LanguageProvider>
);

export default Course;

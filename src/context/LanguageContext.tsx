import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "ru" | "en" | "ro";

type Translations = {
  [key: string]: { ru: string; en: string; ro: string };
};

const translations: Translations = {
  // Scene 1
  "hero.line1": {
    ru: "ТВОЙ",
    en: "YOUR",
    ro: "BRANDUL",
  },
  "hero.line2": {
    ru: "БРЕНД",
    en: "BRAND",
    ro: "TĂU",
  },
  "hero.line3": {
    ru: "НЕ",
    en: "DOES",
    ro: "NU",
  },
  "hero.line4": {
    ru: "РАБОТАЕТ",
    en: "NOT WORK",
    ro: "FUNCȚIO­NEAZĂ",
  },
  "hero.cta": {
    ru: "ЗАПИСАТЬСЯ →",
    en: "BOOK NOW →",
    ro: "REZERVĂ →",
  },
  // Scene 2
  "disruption.1": {
    ru: "ТЫ ПОСТИШЬ КАЖДЫЙ ДЕНЬ.",
    en: "YOU POST EVERY DAY.",
    ro: "POSTEZI ÎN FIECARE ZI.",
  },
  "disruption.2": {
    ru: "НИКТО НЕ ПОКУПАЕТ.",
    en: "NOBODY BUYS.",
    ro: "NIMENI NU CUMPĂRĂ.",
  },
  "disruption.3": {
    ru: "ТЫ ДУМАЕШЬ, ЧТО ПРОБЛЕМА В КОНТЕНТЕ.",
    en: "YOU THINK THE PROBLEM IS CONTENT.",
    ro: "CREZI CĂ PROBLEMA E CONȚINUTUL.",
  },
  "disruption.4": {
    ru: "ПРОБЛЕМА — ТЫ.",
    en: "THE PROBLEM IS YOU.",
    ro: "PROBLEMA EȘTI TU.",
  },
  // Scene 3
  "facts.years": { ru: "ЛЕТ В МАРКЕТИНГЕ", en: "YEARS IN MARKETING", ro: "ANI ÎN MARKETING" },
  "facts.years.desc": {
    ru: "Начинала с SMM в 2014 году. Прошла путь от контент-менеджера до стратега, который строит бренды с нуля и выводит их на новый уровень.",
    en: "Started in SMM in 2014. Went from content manager to strategist who builds brands from scratch and takes them to the next level.",
    ro: "Am început în SMM în 2014. Am parcurs drumul de la content manager la strateg care construiește branduri de la zero.",
  },
  "facts.agency": { ru: "АГЕНТСТВО 33", en: "AGENCY 33", ro: "AGENȚIA 33" },
  "facts.agency.desc": {
    ru: "Основала собственное агентство, специализирующееся на стратегическом маркетинге и Instagram-продвижении для бизнеса и личных брендов.",
    en: "Founded her own agency specializing in strategic marketing and Instagram promotion for businesses and personal brands.",
    ro: "A fondat propria agenție specializată în marketing strategic și promovare Instagram pentru afaceri și branduri personale.",
  },
  "facts.extra": { ru: "БИЗНЕС EXTRA", en: "EXTRA BUSINESS", ro: "AFACERE EXTRA" },
  "facts.extra.desc": {
    ru: "Параллельно развивает собственный бизнес-проект EXTRA — практический опыт, который напрямую отражается в консультациях.",
    en: "Simultaneously developing her own business project EXTRA — hands-on experience that directly translates into consultations.",
    ro: "Dezvoltă simultan propriul proiect de afaceri EXTRA — experiență practică reflectată direct în consultanțe.",
  },
  "facts.chinese": { ru: "КИТАЙСКИЙ ЯЗЫК", en: "CHINESE LANGUAGE", ro: "LIMBA CHINEZĂ" },
  "facts.chinese.desc": {
    ru: "Свободно владеет китайским языком. Работает с международными клиентами и понимает специфику азиатского маркетинга.",
    en: "Fluent in Chinese. Works with international clients and understands the specifics of Asian marketing.",
    ro: "Vorbește fluent limba chineză. Lucrează cu clienți internaționali și înțelege specificul marketingului asiatic.",
  },
  // Scene 4
  "presence.line": {
    ru: "Я НЕ УЧИТЕЛЬ. Я ТОТ, КТО ДЕЛАЕТ.",
    en: "I'M NOT A TEACHER. I'M THE ONE WHO DOES.",
    ro: "NU SUNT PROFESOR. SUNT CEL CARE FACE.",
  },
  // Scene 5
  "process.1": {
    ru: "ТЫ ПОКАЗЫВАЕШЬ СВОЙ БИЗНЕС",
    en: "YOU SHOW YOUR BUSINESS",
    ro: "ÎȚI ARĂȚI AFACEREA",
  },
  "process.2": {
    ru: "Я РАЗБИРАЮ ЕГО НА ЧАСТИ",
    en: "I TAKE IT APART",
    ro: "O DEZMEMBREZ",
  },
  "process.3": {
    ru: "НАХОЖУ ДЫРЫ",
    en: "FIND THE GAPS",
    ro: "GĂSESC GOLURILE",
  },
  "process.4": {
    ru: "СТРОЮ СИСТЕМУ",
    en: "BUILD THE SYSTEM",
    ro: "CONSTRUIESC SISTEMUL",
  },
  // Scene 6
  "positioning.left.title": { ru: "ОНИ", en: "THEM", ro: "EI" },
  "positioning.left.1": { ru: "КУРСЫ", en: "COURSES", ro: "CURSURI" },
  "positioning.left.2": { ru: "СОВЕТЫ", en: "TIPS", ro: "SFATURI" },
  "positioning.left.3": { ru: "КОНТЕНТ", en: "CONTENT", ro: "CONȚINUT" },
  "positioning.left.4": { ru: "ШУМ", en: "NOISE", ro: "ZGOMOT" },
  "positioning.right.title": { ru: "Я", en: "ME", ro: "EU" },
  "positioning.right.1": { ru: "СИСТЕМА", en: "SYSTEM", ro: "SISTEM" },
  "positioning.right.2": { ru: "ЯСНОСТЬ", en: "CLARITY", ro: "CLARITATE" },
  "positioning.right.3": { ru: "ДЕНЬГИ", en: "MONEY", ro: "BANI" },
  "positioning.right.4": { ru: "РЕЗУЛЬТАТ", en: "RESULT", ro: "REZULTAT" },
  // Logos
  "logos.title": { ru: "РАБОТАЛИ С", en: "WORKED WITH", ro: "AM LUCRAT CU" },
  // Cases — works / reels for brands
  "cases.title": { ru: "РАБОТЫ", en: "WORKS", ro: "LUCRĂRI" },
  "cases.subtitle": { ru: "РИЛСЫ И КОНТЕНТ ДЛЯ БРЕНДОВ", en: "REELS & CONTENT FOR BRANDS", ro: "REELS ȘI CONȚINUT PENTRU BRANDURI" },
  "cases.1.brand": { ru: "FASHION БРЕНД", en: "FASHION BRAND", ro: "BRAND FASHION" },
  "cases.1.type": { ru: "СЕРИЯ РИЛСОВ · ПРОДАКШН · СТРАТЕГИЯ", en: "REELS SERIES · PRODUCTION · STRATEGY", ro: "SERIE REELS · PRODUCȚIE · STRATEGIE" },
  "cases.1.result": { ru: "2.4M ПРОСМОТРОВ", en: "2.4M VIEWS", ro: "2.4M VIZUALIZĂRI" },
  "cases.2.brand": { ru: "BEAUTY БРЕНД", en: "BEAUTY BRAND", ro: "BRAND BEAUTY" },
  "cases.2.type": { ru: "КОНТЕНТ-СТРАТЕГИЯ · РИЛСЫ · ВИЗУАЛ", en: "CONTENT STRATEGY · REELS · VISUAL", ro: "STRATEGIE CONȚINUT · REELS · VIZUAL" },
  "cases.2.result": { ru: "×6 ПРОДАЖИ", en: "×6 SALES", ro: "×6 VÂNZĂRI" },
  "cases.3.brand": { ru: "РЕСТОРАН", en: "RESTAURANT", ro: "RESTAURANT" },
  "cases.3.type": { ru: "РИЛСЫ · ФОТО · ПОЗИЦИОНИРОВАНИЕ", en: "REELS · PHOTO · POSITIONING", ro: "REELS · FOTO · POZIȚIONARE" },
  "cases.3.result": { ru: "SOLD OUT ЗА 2 НЕДЕЛИ", en: "SOLD OUT IN 2 WEEKS", ro: "SOLD OUT ÎN 2 SĂPTĂMÂNI" },
  "cases.4.brand": { ru: "ЛИЧНЫЙ БРЕНД", en: "PERSONAL BRAND", ro: "BRAND PERSONAL" },
  "cases.4.type": { ru: "ПОЛНЫЙ ПРОДАКШН · СТРАТЕГИЯ · МОНТАЖ", en: "FULL PRODUCTION · STRATEGY · EDITING", ro: "PRODUCȚIE COMPLETĂ · STRATEGIE · MONTAJ" },
  "cases.4.result": { ru: "0 → 47K ЗА 3 МЕСЯЦА", en: "0 → 47K IN 3 MONTHS", ro: "0 → 47K ÎN 3 LUNI" },
  // Footer
  "footer.contact": { ru: "СВЯЗАТЬСЯ", en: "CONTACT", ro: "CONTACT" },
  "footer.ig": { ru: "@USERNAME", en: "@USERNAME", ro: "@USERNAME" },
  "footer.tg": { ru: "TELEGRAM", en: "TELEGRAM", ro: "TELEGRAM" },
  "footer.wa": { ru: "WHATSAPP", en: "WHATSAPP", ro: "WHATSAPP" },
  "footer.rights": { ru: "ВСЕ ПРАВА ЗАЩИЩЕНЫ", en: "ALL RIGHTS RESERVED", ro: "TOATE DREPTURILE REZERVATE" },
  // Scene 7
  "proof.clients": { ru: "КЛИЕНТОВ", en: "CLIENTS", ro: "CLIENȚI" },
  "proof.countries": { ru: "СТРАН", en: "COUNTRIES", ro: "ȚĂRI" },
  "proof.revenue": { ru: "ВЫРУЧКА КЛИЕНТОВ", en: "CLIENT REVENUE", ro: "VENITURI CLIENȚI" },
  // Scene 8
  "voice.1": {
    ru: "«За 2 недели я заработал больше, чем за 3 месяца»",
    en: '"In 2 weeks I earned more than in 3 months"',
    ro: '"În 2 săptămâni am câștigat mai mult decât în 3 luni"',
  },
  "voice.2": {
    ru: "«Он сломал мне мозг, а потом собрал заново»",
    en: '"He broke my brain, then rebuilt it"',
    ro: '"Mi-a spart creierul, apoi l-a reconstruit"',
  },
  "voice.3": {
    ru: "«Это не коучинг. Это хирургия»",
    en: '"This is not coaching. This is surgery"',
    ro: '"Nu e coaching. E chirurgie"',
  },
  // Scene 9
  "format.online": { ru: "ОНЛАЙН", en: "ONLINE", ro: "ONLINE" },
  "format.offline": { ru: "ОФЛАЙН", en: "OFFLINE", ro: "OFFLINE" },
  "format.global": { ru: "РАБОТАЕМ ПО ВСЕМУ МИРУ", en: "WORKING WORLDWIDE", ro: "LUCRĂM ÎN TOATĂ LUMEA" },
  "format.cta": { ru: "ЗАПИСАТЬСЯ →", en: "BOOK NOW →", ro: "REZERVĂ →" },
  // Scene 10
  "geo.global": { ru: "ГЛОБАЛЬНО", en: "GLOBAL", ro: "GLOBAL" },
  "geo.locations": {
    ru: "МОСКВА · КИШИНЁВ · СТАМБУЛ · И ДАЛЕЕ",
    en: "MOSCOW · CHISINAU · ISTANBUL · BEYOND",
    ro: "MOSCOVA · CHIȘINĂU · ISTANBUL · MAI DEPARTE",
  },
  // Price
  "price.full": { ru: "ПОЛНАЯ СТОИМОСТЬ", en: "FULL PRICE", ro: "PREȚ COMPLET" },
  "price.booking": { ru: "БРОНЬ", en: "BOOKING", ro: "REZERVARE" },
  "price.remainder": { ru: "ОСТАТОК ОПЛАЧИВАЕТСЯ ПЕРЕД СЕССИЕЙ", en: "REMAINDER PAID BEFORE SESSION", ro: "RESTUL SE PLĂTEȘTE ÎNAINTE DE SESIUNE" },
  "price.includes": { ru: "ЧТО ВХОДИТ", en: "WHAT'S INCLUDED", ro: "CE INCLUDE" },
  "price.inc.1": { ru: "ПОЛНЫЙ АУДИТ АККАУНТА", en: "FULL ACCOUNT AUDIT", ro: "AUDIT COMPLET AL CONTULUI" },
  "price.inc.2": { ru: "СТРАТЕГИЯ ПОЗИЦИОНИРОВАНИЯ", en: "POSITIONING STRATEGY", ro: "STRATEGIE DE POZIȚIONARE" },
  "price.inc.3": { ru: "КОНТЕНТ-ПЛАН НА 30 ДНЕЙ", en: "30-DAY CONTENT PLAN", ro: "PLAN DE CONȚINUT 30 ZILE" },
  "price.inc.4": { ru: "ВИЗУАЛЬНАЯ СИСТЕМА", en: "VISUAL SYSTEM", ro: "SISTEM VIZUAL" },
  "price.inc.5": { ru: "СИСТЕМА ПРОДАЖ ЧЕРЕЗ INSTAGRAM", en: "INSTAGRAM SALES SYSTEM", ro: "SISTEM VÂNZĂRI INSTAGRAM" },
  "price.inc.6": { ru: "РАЗБОР ВОРОНКИ", en: "FUNNEL BREAKDOWN", ro: "ANALIZA PÂLNIEI" },
  "price.inc.7": { ru: "2 НЕДЕЛИ ПОДДЕРЖКИ ПОСЛЕ СЕССИИ", en: "2 WEEKS POST-SESSION SUPPORT", ro: "2 SĂPTĂMÂNI SUPORT POST-SESIUNE" },
  // Booking
  "booking.step1": { ru: "ИМЯ", en: "NAME", ro: "NUME" },
  "booking.step2": { ru: "INSTAGRAM", en: "INSTAGRAM", ro: "INSTAGRAM" },
  "booking.step3": { ru: "БИЗНЕС", en: "BUSINESS", ro: "AFACERE" },
  "booking.next": { ru: "ДАЛЕЕ", en: "NEXT", ro: "URMĂTORUL" },
  "booking.date": { ru: "ВЫБЕРИ ДЕНЬ", en: "CHOOSE A DAY", ro: "ALEGE O ZI" },
  "booking.time": { ru: "ВЫБЕРИ ВРЕМЯ", en: "CHOOSE TIME", ro: "ALEGE ORA" },
  "booking.pay": { ru: "ОПЛАТИТЬ БРОНЬ €200 →", en: "PAY BOOKING €200 →", ro: "PLĂTEȘTE REZERVAREA €200 →" },
  "booking.placeholder.name": { ru: "Как тебя зовут?", en: "What's your name?", ro: "Cum te cheamă?" },
  "booking.placeholder.ig": { ru: "@username", en: "@username", ro: "@username" },
  "booking.placeholder.biz": { ru: "Чем занимаешься?", en: "What do you do?", ro: "Cu ce te ocupi?" },
  // Final
  "final.line1": {
    ru: "ТЫ ЛИБО ДЕЛАЕШЬ",
    en: "YOU EITHER DO IT",
    ro: "FIE FACI",
  },
  "final.line2": {
    ru: "ЛИБО ОСТАЁШЬСЯ ТАМ ЖЕ",
    en: "OR STAY WHERE YOU ARE",
    ro: "FIE RĂMÂI UNDE EȘTI",
  },
  "final.cta": {
    ru: "ЗАПИСАТЬСЯ →",
    en: "BOOK →",
    ro: "REZERVĂ →",
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}>({
  lang: "ru",
  setLang: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ru");

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

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
    ru: "ТЫ НЕ ЗНАЕШЬ, ЧТО ВЫСТАВИТЬ.",
    en: "YOU DON'T KNOW WHAT TO POST.",
    ro: "NU ȘTII CE SĂ POSTEZI.",
  },
  "disruption.3": {
    ru: "ПРЕДЛОЖЕНИЯ НЕ ПРИХОДЯТ.",
    en: "OFFERS DON'T COME.",
    ro: "OFERTELE NU VIN.",
  },
  "disruption.4": {
    ru: "ТЫ ДУМАЕШЬ, ЧТО ПРОБЛЕМА В КОНТЕНТЕ.",
    en: "YOU THINK THE PROBLEM IS CONTENT.",
    ro: "CREZI CĂ PROBLEMA E CONȚINUTUL.",
  },
  "disruption.5": {
    ru: "ПРОБЛЕМА — ОТСУТСТВИЕ СТРАТЕГИИ.",
    en: "THE PROBLEM IS NO STRATEGY.",
    ro: "PROBLEMA E LIPSA STRATEGIEI.",
  },
  // Scene 3
  "facts.years": { ru: "ЛЕТ В МАРКЕТИНГЕ", en: "YEARS IN MARKETING", ro: "ANI ÎN MARKETING" },
  "facts.years.desc": {
    ru: "Я вела бренды в Инстаграм с 2016 года, когда все выставляли квадратные фото, а сторис не существовала.",
    en: "I've been leading brands on Instagram since 2016, when everyone posted square photos and stories didn't exist.",
    ro: "Conduc branduri pe Instagram din 2016, când toți postau poze pătrate și story-urile nu existau.",
  },
  "facts.agency": { ru: "АГЕНТСТВО 33", en: "AGENCY 33", ro: "AGENȚIA 33" },
  "facts.agency.desc": {
    ru: "Маркетинговое агентство. Создала сильную команду, которая комплексно работает с брендом и выстраивает долгосрочные стратегии продвижения. От съёмок до мероприятий. Идеальный баланс между структурой и креативом.",
    en: "Marketing agency. I built a strong team that works comprehensively with brands and creates long-term promotion strategies. From shoots to events. The perfect balance between structure and creativity.",
    ro: "Agenție de marketing. Am creat o echipă puternică ce lucrează complex cu brandul și construiește strategii de promovare pe termen lung. De la filmări la evenimente. Echilibrul perfect între structură și creativitate.",
  },
  "facts.extra": { ru: "EXTRA CLUB", en: "EXTRA CLUB", ro: "EXTRA CLUB" },
  "facts.extra.desc": {
    ru: "Основатель спортивного сообщества, где людей объединяет спорт, желание развиваться сразу в нескольких направлениях и яркость жизни. Здесь нет предела твоим возможностям.",
    en: "Founder of a sports community where people are united by sport, the desire to grow in multiple directions and the brightness of life. There's no limit to your possibilities here.",
    ro: "Fondator al unei comunități sportive unde oamenii sunt uniți de sport, dorința de a se dezvolta în mai multe direcții și intensitatea vieții. Aici nu există limite pentru posibilitățile tale.",
  },
  "facts.course": { ru: "АВТОРСКИЙ КУРС SMM", en: "AUTHOR'S SMM COURSE", ro: "CURS DE AUTOR SMM" },
  "facts.course.desc": {
    ru: "За 5 дней — старт в новой профессии. Для тех, кто хочет быть SMM-экспертом и работать с брендами.",
    en: "In 5 days — start in a new profession. For those who want to be an SMM expert and work with brands.",
    ro: "În 5 zile — start într-o profesie nouă. Pentru cei care vor să fie expert SMM și să lucreze cu branduri.",
  },
  "facts.niches": { ru: "НИШ В ПРОДВИЖЕНИИ", en: "NICHES IN PROMOTION", ro: "NIȘE ÎN PROMOVARE" },
  "facts.niches.desc": {
    ru: "Опыт работы с разными нишами: от ресторанов и beauty до fashion-брендов и личных брендов. Понимаю специфику каждого рынка.",
    en: "Experience with different niches: from restaurants and beauty to fashion brands and personal brands. I understand the specifics of every market.",
    ro: "Experiență cu nișe diferite: de la restaurante și beauty la branduri fashion și personale. Înțeleg specificul fiecărei piețe.",
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

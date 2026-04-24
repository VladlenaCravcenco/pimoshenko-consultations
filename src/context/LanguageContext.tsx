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
    ru: "Я НЕ УЧИТЕЛЬ. Я ТОТ, КТО ДАЁТ ЗНАНИЯ, КОТОРЫЕ ВЫ СРАЗУ МОЖЕТЕ ПРИМЕНИТЬ.",
    en: "I'M NOT A TEACHER. I GIVE KNOWLEDGE YOU CAN APPLY IMMEDIATELY.",
    ro: "NU SUNT PROFESOR. OFER CUNOȘTINȚE PE CARE LE POȚI APLICA IMEDIAT.",
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
    ru: "НАХОЖУ СЛАБЫЕ МЕСТА",
    en: "FIND THE WEAK SPOTS",
    ro: "GĂSESC PUNCTELE SLABE",
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
  "positioning.left.3": { ru: "ТРЕНДЫ", en: "TRENDS", ro: "TRENDURI" },
  "positioning.left.4": { ru: "ШУМ", en: "NOISE", ro: "ZGOMOT" },
  "positioning.right.title": { ru: "Я", en: "ME", ro: "EU" },
  "positioning.right.1": { ru: "СИСТЕМА", en: "SYSTEM", ro: "SISTEM" },
  "positioning.right.2": { ru: "СТРАТЕГИЯ", en: "STRATEGY", ro: "STRATEGIE" },
  "positioning.right.3": { ru: "КРЕАТИВ", en: "CREATIVE", ro: "CREATIVITATE" },
  "positioning.right.4": { ru: "РЕЗУЛЬТАТ", en: "RESULT", ro: "REZULTAT" },
  // Logos
  "logos.title": { ru: "РАБОТАЛИ С", en: "WORKED WITH", ro: "AM LUCRAT CU" },
  // Cases — works / reels for brands
  "cases.title": { ru: "РАБОТЫ", en: "WORKS", ro: "LUCRĂRI" },
  "cases.subtitle": { ru: "РИЛСЫ И КОНТЕНТ ДЛЯ БРЕНДОВ", en: "REELS & CONTENT FOR BRANDS", ro: "REELS ȘI CONȚINUT PENTRU BRANDURI" },
  "cases.1.brand": { ru: "TWISTER", en: "TWISTER", ro: "TWISTER" },
  "cases.1.type": { ru: "КРЕАТИВ · ДРАЙВ · ЯРКОСТЬ", en: "CREATIVE · DRIVE · BRIGHTNESS", ro: "CREATIVITATE · ENERGIE · STRĂLUCIRE" },
  "cases.1.result": { ru: "5 ЛЕТ СОТРУДНИЧЕСТВА", en: "5 YEARS OF PARTNERSHIP", ro: "5 ANI DE COLABORARE" },
  "cases.1.desc": {
    ru: "5 лет сотрудничества. 5 лет стабильных продаж всей системы. Креатив, драйв, яркость.",
    en: "5 years of partnership. 5 years of stable sales across the whole system. Creative, drive, brightness.",
    ro: "5 ani de colaborare. 5 ani de vânzări stabile pe întregul sistem. Creativitate, energie, strălucire.",
  },
  "cases.2.brand": { ru: "JET TOURE", en: "JET TOURE", ro: "JET TOURE" },
  "cases.2.type": { ru: "БРЕНД · СТРАТЕГИЯ · КОНТЕНТ", en: "BRAND · STRATEGY · CONTENT", ro: "BRAND · STRATEGIE · CONȚINUT" },
  "cases.2.result": { ru: "ПРЕМИУМ-ПОЗИЦИОНИРОВАНИЕ", en: "PREMIUM POSITIONING", ro: "POZIȚIONARE PREMIUM" },
  "cases.2.desc": {
    ru: "Премиальный travel-бренд. Выстраивание стиля и подачи под аудиторию, которая выбирает уровень.",
    en: "Premium travel brand. Building style and presentation for an audience that chooses the level.",
    ro: "Brand premium de călătorii. Construirea stilului și prezentării pentru un public care alege nivelul.",
  },
  "cases.3.brand": { ru: "TOSCA", en: "TOSCA", ro: "TOSCA" },
  "cases.3.type": { ru: "КОНЦЕПТ С НУЛЯ · СТИЛЬ · ПОДАЧА", en: "CONCEPT FROM SCRATCH · STYLE · DELIVERY", ro: "CONCEPT DE LA ZERO · STIL · PREZENTARE" },
  "cases.3.result": { ru: "SOLD OUT НА ОТКРЫТИЕ", en: "SOLD OUT AT OPENING", ro: "SOLD OUT LA DESCHIDERE" },
  "cases.3.desc": {
    ru: "Выстраивание концепта с нуля, создание стиля, подачи и формы. За полгода — 10К живых подписчиков и реальные резервы ресторана.",
    en: "Building the concept from scratch, creating style, delivery and form. In half a year — 10K real followers and real restaurant reservations.",
    ro: "Construirea conceptului de la zero, crearea stilului, prezentării și formei. În jumătate de an — 10K urmăritori reali și rezervări reale.",
  },
  "cases.4.brand": { ru: "CASTEL MIMI", en: "CASTEL MIMI", ro: "CASTEL MIMI" },
  "cases.4.type": { ru: "ОБРАЗ · ПОДАЧА · ЭЛЕГАНТНОСТЬ", en: "IMAGE · DELIVERY · ELEGANCE", ro: "IMAGINE · PREZENTARE · ELEGANȚĂ" },
  "cases.4.result": { ru: "ВОЛШЕБНЫЙ ОБРАЗ БРЕНДА", en: "MAGICAL BRAND IMAGE", ro: "IMAGINE MAGICĂ A BRANDULUI" },
  "cases.4.desc": {
    ru: "Создание волшебного образа, подачи, раскрытие смыслов бренда через элегантность.",
    en: "Creating a magical image, delivery, revealing brand meanings through elegance.",
    ro: "Crearea unei imagini magice, a prezentării, dezvăluirea semnificațiilor brandului prin eleganță.",
  },
  // Footer
  "footer.contact": { ru: "СВЯЗАТЬСЯ", en: "CONTACT", ro: "CONTACT" },
  "footer.ig": { ru: "@USERNAME", en: "@USERNAME", ro: "@USERNAME" },
  "footer.tg": { ru: "TELEGRAM", en: "TELEGRAM", ro: "TELEGRAM" },
  "footer.wa": { ru: "WHATSAPP", en: "WHATSAPP", ro: "WHATSAPP" },
  "footer.rights": { ru: "ВСЕ ПРАВА ЗАЩИЩЕНЫ", en: "ALL RIGHTS RESERVED", ro: "TOATE DREPTURILE REZERVATE" },
  // Scene 7
  "proof.clients": { ru: "РАЗНЫХ НИШ", en: "DIFFERENT NICHES", ro: "NIȘE DIFERITE" },
  "proof.countries": { ru: "ОРГАНИЧЕСКИХ ПРОСМОТРОВ ДЛЯ БРЕНДОВ", en: "ORGANIC VIEWS FOR BRANDS", ro: "VIZUALIZĂRI ORGANICE PENTRU BRANDURI" },
  "proof.revenue": { ru: "ЛЕТ ПОСТОЯННОГО СОТРУДНИЧЕСТВА", en: "YEARS OF ONGOING PARTNERSHIP", ro: "ANI DE COLABORARE CONSTANTĂ" },
  // Scene 8
  "voice.1": {
    ru: "«Я не только поняла, что снимать — поняла, кто я сейчас»",
    en: '"I didn\'t just understand what to shoot — I understood who I am now"',
    ro: '"Nu am înțeles doar ce să filmez — am înțeles cine sunt acum"',
  },
  "voice.2": {
    ru: "«Оказывается, блог — это работа на себя, а не все умеют брать 100% ответственности»",
    en: '"Turns out a blog is working for yourself, and not everyone can take 100% responsibility"',
    ro: '"Se pare că blogul e munca pentru tine însuți, și nu toți pot lua 100% responsabilitate"',
  },
  "voice.3": {
    ru: "«Теперь структура — это друг, а не рутина»",
    en: '"Now structure is a friend, not a routine"',
    ro: '"Acum structura e un prieten, nu o rutină"',
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
  "price.consultation": { ru: "КОНСУЛЬТАЦИЯ", en: "CONSULTATION", ro: "CONSULTAȚIE" },
  "price.full": { ru: "ПОЛНАЯ СТОИМОСТЬ", en: "FULL PRICE", ro: "PREȚ COMPLET" },
  "price.booking": { ru: "БРОНЬ", en: "BOOKING", ro: "REZERVARE" },
  "price.remainder": { ru: "ОСТАТОК ОПЛАЧИВАЕТСЯ ПЕРЕД СЕССИЕЙ", en: "REMAINDER PAID BEFORE SESSION", ro: "RESTUL SE PLĂTEȘTE ÎNAINTE DE SESIUNE" },
  "price.training": { ru: "ТРЕНИНГ ДЛЯ КОМПАНИИ", en: "CORPORATE TRAINING", ro: "TRAINING PENTRU COMPANIE" },
  "price.training.desc": {
    ru: "Для тех, кто хочет повысить уровень квалификации медиа-команды.",
    en: "For those who want to raise the qualification level of their media team.",
    ro: "Pentru cei care vor să ridice nivelul de calificare al echipei media.",
  },
  "price.training.cta": { ru: "УЗНАТЬ БОЛЬШЕ В WHATSAPP →", en: "LEARN MORE ON WHATSAPP →", ro: "AFLĂ MAI MULT PE WHATSAPP →" },
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
  "booking.pay": { ru: "ОПЛАТИТЬ БРОНЬ €20 →", en: "PAY BOOKING €20 →", ro: "PLĂTEȘTE REZERVAREA €20 →" },
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
  // Offline Course Preview (на главной)
  "offline.label": { ru: "ОФЛАЙН-ОПЫТ", en: "OFFLINE EXPERIENCE", ro: "EXPERIENȚĂ OFFLINE" },
  "offline.title": { ru: "ОФЛАЙН-КУРСЫ", en: "OFFLINE COURSES", ro: "CURSURI OFFLINE" },
  "offline.desc": {
    ru: "Уже провела несколько офлайн-потоков в Кишинёве. Сотни выпускников, реальные результаты. Сейчас открыта запись на новый поток.",
    en: "I've already run several offline waves in Chisinau. Hundreds of graduates, real results. Registration is now open for the new wave.",
    ro: "Am condus deja câteva fluxuri offline la Chișinău. Sute de absolvenți, rezultate reale. Înscrierile pentru noul flux sunt deschise.",
  },
  "offline.cta": { ru: "НОВЫЙ КУРС ПО SMM →", en: "NEW SMM COURSE →", ro: "NOU CURS SMM →" },
  "offline.past": { ru: "ПРОШЛЫЕ ПОТОКИ", en: "PAST WAVES", ro: "FLUXURI ANTERIOARE" },
  // Past waves — creative course names
  "offline.wave.1.name": { ru: "BRAND CODE", en: "BRAND CODE", ro: "BRAND CODE" },
  "offline.wave.1.year": { ru: "2022", en: "2022", ro: "2022" },
  "offline.wave.1.count": { ru: "30+ УЧАСТНИКОВ", en: "30+ PARTICIPANTS", ro: "30+ PARTICIPANȚI" },
  "offline.wave.2.name": { ru: "REELS LAB", en: "REELS LAB", ro: "REELS LAB" },
  "offline.wave.2.year": { ru: "2023", en: "2023", ro: "2023" },
  "offline.wave.2.count": { ru: "50+ УЧАСТНИКОВ", en: "50+ PARTICIPANTS", ro: "50+ PARTICIPANȚI" },
  "offline.wave.3.name": { ru: "SOLD OUT", en: "SOLD OUT", ro: "SOLD OUT" },
  "offline.wave.3.year": { ru: "2024", en: "2024", ro: "2024" },
  "offline.wave.3.count": { ru: "40+ УЧАСТНИКОВ", en: "40+ PARTICIPANTS", ro: "40+ PARTICIPANȚI" },
  // Upcoming wave
  "offline.wave.4.name": { ru: "SMM SYSTEM", en: "SMM SYSTEM", ro: "SMM SYSTEM" },
  "offline.wave.4.year": { ru: "СКОРО", en: "SOON", ro: "ÎN CURÂND" },
  "offline.wave.4.count": { ru: "ОСТАЛОСЬ 12 МЕСТ", en: "12 SEATS LEFT", ro: "AU RĂMAS 12 LOCURI" },
  "offline.wave.4.more": { ru: "ПОДРОБНЕЕ →", en: "LEARN MORE →", ro: "DETALII →" },
  // Floating CTA
  "float.cta": { ru: "КУРС ПО SMM", en: "SMM COURSE", ro: "CURS SMM" },
  // Course page
  "course.back": { ru: "← НА ГЛАВНУЮ", en: "← HOME", ro: "← ACASĂ" },
  "course.hero.kicker": { ru: "ОФЛАЙН-ИНТЕНСИВ", en: "OFFLINE INTENSIVE", ro: "INTENSIV OFFLINE" },
  "course.hero.title1": { ru: "SMM,", en: "SMM", ro: "SMM" },
  "course.hero.title2": { ru: "КОТОРЫЙ", en: "THAT", ro: "CARE" },
  "course.hero.title3": { ru: "ПРОДАЁТ", en: "SELLS", ro: "VINDE" },
  "course.hero.sub": {
    ru: "5 ДНЕЙ. ЖИВАЯ ГРУППА. РЕАЛЬНЫЕ КЕЙСЫ.",
    en: "5 DAYS. LIVE GROUP. REAL CASES.",
    ro: "5 ZILE. GRUP LIVE. CAZURI REALE.",
  },
  "course.hero.cta": { ru: "ЗАБРОНИРОВАТЬ МЕСТО →", en: "RESERVE A SEAT →", ro: "REZERVĂ UN LOC →" },
  "course.hero.spots": { ru: "ОСТАЛОСЬ 12 МЕСТ", en: "12 SEATS LEFT", ro: "AU RĂMAS 12 LOCURI" },
  // Pain
  "course.pain.title": { ru: "ЕСЛИ ЭТО ПРО ТЕБЯ", en: "IF THIS IS YOU", ro: "DACĂ ASTA EȘTI TU" },
  "course.pain.1": { ru: "ПОСТИШЬ — ТИШИНА В ОТВЕТ", en: "YOU POST — SILENCE BACK", ro: "POSTEZI — TĂCERE" },
  "course.pain.2": { ru: "НЕ ПОНИМАЕШЬ, ЧТО СНИМАТЬ", en: "DON'T KNOW WHAT TO SHOOT", ro: "NU ȘTII CE SĂ FILMEZI" },
  "course.pain.3": { ru: "ХОЧЕШЬ РАБОТАТЬ С БРЕНДАМИ", en: "WANT TO WORK WITH BRANDS", ro: "VREI SĂ LUCREZI CU BRANDURI" },
  "course.pain.4": { ru: "ИЩЕШЬ НОВУЮ ПРОФЕССИЮ", en: "LOOKING FOR A NEW CAREER", ro: "CAUȚI O NOUĂ CARIERĂ" },
  // For who
  "course.who.title": { ru: "ДЛЯ КОГО", en: "WHO IT'S FOR", ro: "PENTRU CINE" },
  "course.who.1.t": { ru: "ЭКСПЕРТЫ", en: "EXPERTS", ro: "EXPERȚI" },
  "course.who.1.d": {
    ru: "Хочешь упаковать себя как личный бренд и продавать через Instagram.",
    en: "Want to package yourself as a personal brand and sell through Instagram.",
    ro: "Vrei să te împachetezi ca brand personal și să vinzi prin Instagram.",
  },
  "course.who.2.t": { ru: "ВЛАДЕЛЬЦЫ БИЗНЕСА", en: "BUSINESS OWNERS", ro: "PROPRIETARI DE AFACERI" },
  "course.who.2.d": {
    ru: "Хочешь сам управлять контентом, а не зависеть от агентств.",
    en: "Want to run your own content instead of relying on agencies.",
    ro: "Vrei să-ți gestionezi singur conținutul, fără agenții.",
  },
  "course.who.3.t": { ru: "НАЧИНАЮЩИЕ SMM", en: "BEGINNER SMM", ro: "ÎNCEPĂTORI SMM" },
  "course.who.3.d": {
    ru: "Хочешь войти в профессию и сразу работать с реальными клиентами.",
    en: "Want to enter the profession and start with real clients right away.",
    ro: "Vrei să intri în profesie și să lucrezi imediat cu clienți reali.",
  },
  // Program
  "course.prog.title": { ru: "ПРОГРАММА · 5 ДНЕЙ", en: "PROGRAM · 5 DAYS", ro: "PROGRAM · 5 ZILE" },
  "course.prog.d1.t": { ru: "ДЕНЬ 1 · СТРАТЕГИЯ", en: "DAY 1 · STRATEGY", ro: "ZIUA 1 · STRATEGIE" },
  "course.prog.d1.d": {
    ru: "Позиционирование, аудитория, ниша, точки роста. Разбираем твой проект.",
    en: "Positioning, audience, niche, growth points. We break down your project.",
    ro: "Poziționare, audiență, nișă, puncte de creștere. Analizăm proiectul tău.",
  },
  "course.prog.d2.t": { ru: "ДЕНЬ 2 · КОНТЕНТ", en: "DAY 2 · CONTENT", ro: "ZIUA 2 · CONȚINUT" },
  "course.prog.d2.d": {
    ru: "Контент-план, структура, форматы, рилсы, сторис. Что снимать каждый день.",
    en: "Content plan, structure, formats, reels, stories. What to shoot every day.",
    ro: "Plan de conținut, structură, formate, reels, story. Ce să filmezi zilnic.",
  },
  "course.prog.d3.t": { ru: "ДЕНЬ 3 · ВИЗУАЛ", en: "DAY 3 · VISUAL", ro: "ZIUA 3 · VIZUAL" },
  "course.prog.d3.d": {
    ru: "Визуальная система, эстетика, съёмка, монтаж. Как держать стиль.",
    en: "Visual system, aesthetics, shooting, editing. How to keep the style.",
    ro: "Sistem vizual, estetică, filmare, montaj. Cum să menții stilul.",
  },
  "course.prog.d4.t": { ru: "ДЕНЬ 4 · ПРОДАЖИ", en: "DAY 4 · SALES", ro: "ZIUA 4 · VÂNZĂRI" },
  "course.prog.d4.d": {
    ru: "Воронка, прогревы, конверсия, работа с заявками. Превращаем подписчиков в клиентов.",
    en: "Funnel, warm-ups, conversion, lead handling. Turning followers into clients.",
    ro: "Pâlnie, încălzire, conversie, lead-uri. Transformăm urmăritorii în clienți.",
  },
  "course.prog.d5.t": { ru: "ДЕНЬ 5 · ПРАКТИКА", en: "DAY 5 · PRACTICE", ro: "ZIUA 5 · PRACTICĂ" },
  "course.prog.d5.d": {
    ru: "Защита проектов, обратная связь, готовая стратегия на 3 месяца.",
    en: "Project defense, feedback, ready 3-month strategy.",
    ro: "Apărarea proiectelor, feedback, strategie gata pe 3 luni.",
  },
  // Program details — what's inside each day
  "course.prog.d1.p1": {
    ru: "Анализ ниши и конкурентов",
    en: "Niche & competitor analysis",
    ro: "Analiza nișei și a concurenților",
  },
  "course.prog.d1.p2": {
    ru: "Распаковка личного бренда / бизнеса",
    en: "Unpacking personal brand / business",
    ro: "Despachetarea brandului personal / afacerii",
  },
  "course.prog.d1.p3": {
    ru: "Целевая аудитория и её боли",
    en: "Target audience and their pains",
    ro: "Audiența țintă și durerile ei",
  },
  "course.prog.d1.p4": {
    ru: "Уникальное позиционирование и смыслы",
    en: "Unique positioning and meanings",
    ro: "Poziționare unică și semnificații",
  },
  "course.prog.d2.p1": {
    ru: "Контент-план на 30 дней",
    en: "30-day content plan",
    ro: "Plan de conținut pe 30 de zile",
  },
  "course.prog.d2.p2": {
    ru: "Рубрики, форматы, прогревы",
    en: "Rubrics, formats, warm-ups",
    ro: "Rubrici, formate, încălziri",
  },
  "course.prog.d2.p3": {
    ru: "Сценарии рилсов, которые залетают",
    en: "Reels scripts that go viral",
    ro: "Scenarii de reels care devin virale",
  },
  "course.prog.d2.p4": {
    ru: "Сторителлинг в сторис",
    en: "Storytelling in stories",
    ro: "Storytelling în story",
  },
  "course.prog.d3.p1": {
    ru: "Визуальная айдентика и палитра",
    en: "Visual identity and palette",
    ro: "Identitate vizuală și paletă",
  },
  "course.prog.d3.p2": {
    ru: "Практика съёмки на телефон",
    en: "Phone shooting practice",
    ro: "Practică de filmare pe telefon",
  },
  "course.prog.d3.p3": {
    ru: "Монтаж рилсов в CapCut",
    en: "Editing reels in CapCut",
    ro: "Montaj reels în CapCut",
  },
  "course.prog.d3.p4": {
    ru: "Эстетика ленты и хайлайтов",
    en: "Feed and highlights aesthetics",
    ro: "Estetica feed-ului și highlights",
  },
  "course.prog.d4.p1": {
    ru: "Воронка продаж в Instagram",
    en: "Instagram sales funnel",
    ro: "Pâlnia de vânzări în Instagram",
  },
  "course.prog.d4.p2": {
    ru: "Прогрев в сторис от A до Z",
    en: "Stories warm-up from A to Z",
    ro: "Încălzire în story de la A la Z",
  },
  "course.prog.d4.p3": {
    ru: "Скрипты переписки и закрытие сделок",
    en: "Chat scripts and closing deals",
    ro: "Scripturi chat și închiderea ofertelor",
  },
  "course.prog.d4.p4": {
    ru: "Запуск продукта или услуги",
    en: "Launching a product or service",
    ro: "Lansarea unui produs sau serviciu",
  },
  "course.prog.d5.p1": {
    ru: "Защита своей стратегии",
    en: "Defending your own strategy",
    ro: "Apărarea propriei strategii",
  },
  "course.prog.d5.p2": {
    ru: "Личная обратная связь от меня",
    en: "Personal feedback from me",
    ro: "Feedback personal de la mine",
  },
  "course.prog.d5.p3": {
    ru: "Дорожная карта на 3 месяца",
    en: "3-month roadmap",
    ro: "Foaie de parcurs pe 3 luni",
  },
  "course.prog.d5.p4": {
    ru: "Нетворкинг и закрытый чат",
    en: "Networking and private chat",
    ro: "Networking și chat privat",
  },
  // What you get
  "course.get.title": { ru: "ЧТО ПОЛУЧИШЬ", en: "WHAT YOU GET", ro: "CE PRIMEȘTI" },
  "course.get.1": { ru: "ГОТОВУЮ СТРАТЕГИЮ ПОД СВОЙ ПРОЕКТ", en: "READY STRATEGY FOR YOUR PROJECT", ro: "STRATEGIE GATA PENTRU PROIECTUL TĂU" },
  "course.get.2": { ru: "КОНТЕНТ-ПЛАН НА 90 ДНЕЙ", en: "90-DAY CONTENT PLAN", ro: "PLAN DE CONȚINUT 90 ZILE" },
  "course.get.3": { ru: "ШАБЛОНЫ РИЛСОВ И СТОРИС", en: "REELS & STORIES TEMPLATES", ro: "ȘABLOANE REELS ȘI STORY" },
  "course.get.4": { ru: "ДОСТУП К ЗАКРЫТОМУ ЧАТУ ВЫПУСКНИКОВ", en: "ACCESS TO PRIVATE ALUMNI CHAT", ro: "ACCES LA CHAT-UL PRIVAT AL ABSOLVENȚILOR" },
  "course.get.5": { ru: "СЕРТИФИКАТ", en: "CERTIFICATE", ro: "CERTIFICAT" },
  "course.get.6": { ru: "ПОДДЕРЖКУ 30 ДНЕЙ ПОСЛЕ КУРСА", en: "30 DAYS POST-COURSE SUPPORT", ro: "30 ZILE SUPORT POST-CURS" },
  // Format
  "course.fmt.title": { ru: "ФОРМАТ", en: "FORMAT", ro: "FORMAT" },
  "course.fmt.dates": { ru: "ДАТЫ УТОЧНЯЮТСЯ", en: "DATES TBA", ro: "DATELE URMEAZĂ" },
  "course.fmt.place": { ru: "ОФЛАЙН · КИШИНЁВ", en: "OFFLINE · CHISINAU", ro: "OFFLINE · CHIȘINĂU" },
  "course.fmt.spots": { ru: "ТОЛЬКО 20 МЕСТ", en: "ONLY 20 SEATS", ro: "DOAR 20 LOCURI" },
  "course.fmt.lang": { ru: "RU · RO", en: "RU · RO", ro: "RU · RO" },
  // Price
  "course.price.title": { ru: "СТОИМОСТЬ", en: "PRICE", ro: "PREȚ" },
  "course.price.early": { ru: "РАННЯЯ ПТАШКА", en: "EARLY BIRD", ro: "EARLY BIRD" },
  "course.price.early.amount": { ru: "€450", en: "€450", ro: "€450" },
  "course.price.early.note": { ru: "ДО КОНЦА МЕСЯЦА", en: "TILL END OF MONTH", ro: "PÂNĂ LA SFÂRȘITUL LUNII" },
  "course.price.std": { ru: "СТАНДАРТ", en: "STANDARD", ro: "STANDARD" },
  "course.price.std.amount": { ru: "€650", en: "€650", ro: "€650" },
  "course.price.std.note": { ru: "ОБЫЧНАЯ ЦЕНА", en: "REGULAR PRICE", ro: "PREȚ OBIȘNUIT" },
  "course.price.vip": { ru: "VIP · 1 НА 1", en: "VIP · 1 ON 1", ro: "VIP · 1 LA 1" },
  "course.price.vip.amount": { ru: "€1500", en: "€1500", ro: "€1500" },
  "course.price.vip.note": { ru: "ИНДИВИДУАЛЬНОЕ СОПРОВОЖДЕНИЕ", en: "PERSONAL MENTORING", ro: "MENTORAT PERSONAL" },
  "course.price.cta": { ru: "ЗАБРОНИРОВАТЬ →", en: "BOOK →", ro: "REZERVĂ →" },
  // FAQ
  "course.faq.title": { ru: "ВОПРОСЫ", en: "QUESTIONS", ro: "ÎNTREBĂRI" },
  "course.faq.1.q": { ru: "А ЕСЛИ Я НОВИЧОК?", en: "WHAT IF I'M A BEGINNER?", ro: "DAR DACĂ SUNT ÎNCEPĂTOR?" },
  "course.faq.1.a": {
    ru: "Курс рассчитан на любой уровень. Начнём с базы и дойдём до продаж.",
    en: "The course works for any level. We start from the basics and reach sales.",
    ro: "Cursul e potrivit pentru orice nivel. Începem cu bazele și ajungem la vânzări.",
  },
  "course.faq.2.q": { ru: "ЧТО ЕСЛИ Я ПРОПУЩУ ДЕНЬ?", en: "WHAT IF I MISS A DAY?", ro: "DACĂ PIERD O ZI?" },
  "course.faq.2.a": {
    ru: "Все материалы остаются с тобой. Запись и поддержка — внутри.",
    en: "All materials stay with you. Recording and support — inside.",
    ro: "Toate materialele rămân cu tine. Înregistrare și suport — incluse.",
  },
  "course.faq.3.q": { ru: "ВЕРНЁТЕ ДЕНЬГИ?", en: "REFUND?", ro: "RAMBURSARE?" },
  "course.faq.3.a": {
    ru: "Возврат брони невозможен, но место можно передать другому участнику.",
    en: "Booking is non-refundable, but you can transfer your seat.",
    ro: "Rezervarea nu se rambursează, dar poți transfera locul.",
  },
  // Final
  "course.final.title": {
    ru: "МЕСТА ОГРАНИЧЕНЫ",
    en: "LIMITED SEATS",
    ro: "LOCURI LIMITATE",
  },
  "course.final.cta": { ru: "ЗАБРОНИРОВАТЬ МЕСТО →", en: "RESERVE SEAT →", ro: "REZERVĂ LOCUL →" },
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

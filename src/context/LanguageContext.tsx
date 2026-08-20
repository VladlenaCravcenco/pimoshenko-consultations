import { createContext, useContext, useEffect, useState, ReactNode } from "react";

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
    en: "I've been managing brands on Instagram since 2016, when everyone posted square photos and Stories didn't exist yet.",
    ro: "Lucrez cu branduri pe Instagram din 2016, când toți publicau fotografii pătrate, iar Stories încă nu existau.",
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
    en: "Start a new career in 5 days. For anyone who wants to become an SMM specialist and work with brands.",
    ro: "Începe o profesie nouă în 5 zile. Pentru cei care vor să devină specialiști SMM și să lucreze cu branduri.",
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
  "offline.title": { ru: "OFFLINE SMM ACADEMY", en: "OFFLINE SMM ACADEMY", ro: "OFFLINE SMM ACADEMY" },
  "offline.desc": {
    ru: "Освой профессию SMM-специалиста за 5 дней и начни проекты в моей команде.",
    en: "Become an SMM specialist in 5 days and start working on projects with my team.",
    ro: "Învață profesia de specialist SMM în 5 zile și începe să lucrezi la proiecte alături de echipa mea.",
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
  "offline.wave.4.name": { ru: "SMM ACADEMY", en: "SMM ACADEMY", ro: "SMM ACADEMY" },
  "offline.wave.4.year": { ru: "СКОРО", en: "SOON", ro: "ÎN CURÂND" },
  "offline.wave.4.count": { ru: "Осталось 12 мест", en: "12 seats left", ro: "Au rămas 12 locuri" },
  "offline.wave.4.more": { ru: "ПОДРОБНЕЕ →", en: "LEARN MORE →", ro: "DETALII →" },
  // Floating CTA
  "float.cta": { ru: "КУРС ПО SMM", en: "SMM COURSE", ro: "CURS SMM" },
  // Course page
  "course.back": { ru: "← НА ГЛАВНУЮ", en: "← HOME", ro: "← ACASĂ" },
  "course.hero.kicker": { ru: "OFFLINE SMM ACADEMY", en: "OFFLINE SMM ACADEMY", ro: "OFFLINE SMM ACADEMY" },
  "course.hero.title1": { ru: "OFFLINE SMM ACADEMY", en: "OFFLINE SMM ACADEMY", ro: "OFFLINE SMM ACADEMY" },
  "course.hero.title2": { ru: "", en: "", ro: "" },
  "course.hero.title3": { ru: "", en: "", ro: "" },
  "course.hero.sub": {
    ru: "Освой профессию SMM-специалиста за 5 дней\nи начни проекты в моей команде",
    en: "Learn the SMM specialist profession in 5 days\nand start projects in my team",
    ro: "Stăpânește profesia de specialist SMM în 5 zile\nși începe proiecte în echipa mea",
  },
  "course.experience.caption.strong1": { ru: "10 лет", en: "10 years", ro: "10 ani" },
  "course.experience.caption.middle": {
    ru: " опыта в маркетинге — в одном",
    en: " of marketing experience — in one",
    ro: " de experiență în marketing — într-un singur",
  },
  "course.experience.caption.strong2": {
    ru: " офлайн-курсе",
    en: " offline course",
    ro: " curs offline",
  },
  "course.experience.title": {
    ru: "Практика + офлайн-обучение",
    en: "Hands-on practice + offline learning",
    ro: "Practică + instruire offline",
  },
  "course.experience.p1": {
    ru: "Курс создан для тех, кто хочет освоить профессию SMM-специалиста и выйти на новый уровень.",
    en: "This course is for anyone who wants to become an SMM specialist and reach the next professional level.",
    ro: "Cursul este creat pentru cei care vor să devină specialiști SMM și să ajungă la un nou nivel profesional.",
  },
  "course.experience.p2": {
    ru: "Вы будете работать с реальными проектами, создавать контент, оформлять профессиональный профиль и соберёте портфолио, с которым сможете начать работать сразу после курса.",
    en: "You will work on real projects, create content, build a professional profile and assemble a portfolio you can use to start working right after the course.",
    ro: "Vei lucra la proiecte reale, vei crea conținut, îți vei construi un profil profesional și un portofoliu cu care vei putea începe să lucrezi imediat după curs.",
  },
  "course.experience.p3": {
    ru: "Я расскажу, как оформить свою деятельность, идти в ногу с рынком, развиваться в профессии, выстраивать стратегию, формировать команду и делегировать.",
    en: "I will explain how to formalize your work, keep pace with the market, grow in the profession, build a strategy, form a team and delegate.",
    ro: "Îți voi explica cum să-ți formalizezi activitatea, să ții pasul cu piața, să evoluezi profesional, să construiești o strategie, să formezi o echipă și să delegi.",
  },
  "course.experience.p4": {
    ru: "Я не учу просто вести страницы — я учу строить SMM-систему, с которой можно собрать команду под любой бизнес или вести проект самостоятельно.",
    en: "I do not simply teach social media management — I teach you to build an SMM system that lets you assemble a team for any business or run a project independently.",
    ro: "Nu te învăț doar să administrezi pagini — te învăț să construiești un sistem SMM cu care poți forma o echipă pentru orice afacere sau gestiona proiectul independent.",
  },
  "course.experience.p5": {
    ru: "Мы заранее определим ваш уровень и подберём подходящую группу.",
    en: "We assess your level in advance and place you in the right group.",
    ro: "Îți evaluăm nivelul din timp și alegem grupa potrivită pentru tine.",
  },
  "course.hero.cta": { ru: "ЗАБРОНИРОВАТЬ МЕСТО", en: "RESERVE A SEAT", ro: "REZERVĂ UN LOC" },
  "course.hero.spots": { ru: "Осталось 12 мест", en: "12 seats left", ro: "Au rămas 12 locuri" },
  // Pain
  "course.pain.title": { ru: "ЕСЛИ ЭТО ПРО ТЕБЯ", en: "IF THIS IS YOU", ro: "DACĂ ASTA EȘTI TU" },
  "course.pain.1": { ru: "НЕ ЗНАЮ, КУДА РАСТИ ДАЛЬШЕ", en: "I DON'T KNOW HOW TO GROW FURTHER", ro: "NU ȘTIU ÎN CE DIRECȚIE SĂ MĂ DEZVOLT" },
  "course.pain.2": { ru: "Я УПЁРСЯ В ПОТОЛОК", en: "I'VE HIT A CEILING", ro: "AM ATINS UN PLAFON PROFESIONAL" },
  "course.pain.3": { ru: "НЕ ПОНИМАЮ, КАК ПОВЫСИТЬ ЧЕК", en: "I DON'T KNOW HOW TO RAISE MY RATES", ro: "NU ȘTIU CUM SĂ-MI MĂRESC TARIFELE" },
  "course.pain.4": { ru: "Я ВЫГОРЕЛ В СВОЕЙ РАБОТЕ", en: "I'M BURNED OUT AT WORK", ro: "MĂ SIMT EPUIZAT PROFESIONAL" },
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
  "course.prog.d5.premium": {
    ru: "только для Premium",
    en: "premium only",
    ro: "doar pentru premium",
  },
  // What you get
  "course.get.title": { ru: "ЧТО ПОЛУЧИШЬ", en: "WHAT YOU GET", ro: "CE PRIMEȘTI" },
  "course.get.1": { ru: "ГОТОВУЮ СТРАТЕГИЮ ПОД СВОЙ ПРОЕКТ", en: "READY STRATEGY FOR YOUR PROJECT", ro: "STRATEGIE GATA PENTRU PROIECTUL TĂU" },
  "course.get.2": { ru: "КОНТЕНТ-ПЛАН НА 90 ДНЕЙ", en: "90-DAY CONTENT PLAN", ro: "PLAN DE CONȚINUT 90 ZILE" },
  "course.get.3": { ru: "ШАБЛОНЫ РИЛСОВ И СТОРИС", en: "REELS & STORIES TEMPLATES", ro: "ȘABLOANE REELS ȘI STORY" },
  "course.get.4": { ru: "ДОСТУП К ЗАКРЫТОМУ ЧАТУ ВЫПУСКНИКОВ", en: "ACCESS TO PRIVATE ALUMNI CHAT", ro: "ACCES LA CHAT-UL PRIVAT AL ABSOLVENȚILOR" },
  "course.get.5": { ru: "СЕРТИФИКАТ", en: "CERTIFICATE", ro: "CERTIFICAT" },
  "course.get.6": { ru: "ПОДДЕРЖКУ 30 ДНЕЙ ПОСЛЕ КУРСА", en: "30 DAYS POST-COURSE SUPPORT", ro: "30 ZILE SUPORT POST-CURS" },
  "course.get.benefit.1": { ru: "Разрабатывать полноценную SMM-стратегию.", en: "Develop a complete SMM strategy.", ro: "Să dezvolți o strategie SMM completă." },
  "course.get.benefit.2": { ru: "Собирать команду для продвижения.", en: "Build a team to promote a brand.", ro: "Să formezi o echipă pentru promovare." },
  "course.get.benefit.3": { ru: "Регулярно повышать стоимость своих услуг.", en: "Raise your rates as your expertise grows.", ro: "Să-ți mărești tarifele pe măsură ce capeți experiență." },
  "course.get.benefit.4": { ru: "Продавать проекты под ключ.", en: "Sell turnkey projects.", ro: "Să vinzi proiecte la cheie." },
  "course.get.skill.1": { ru: "Анализировать целевую аудиторию и конкурентов.", en: "Analyze target audiences and competitors.", ro: "Să analizezi publicul-țintă și concurenții." },
  "course.get.skill.2": { ru: "Создавать контент-планы.", en: "Create content plans.", ro: "Să creezi planuri de conținut." },
  "course.get.skill.3": { ru: "Снимать профессиональный контент на телефон.", en: "Shoot professional content on a phone.", ro: "Să filmezi conținut profesionist cu telefonul." },
  "course.get.skill.4": { ru: "Монтировать Reels и TikTok-видео.", en: "Edit Reels and TikTok videos.", ro: "Să montezi videoclipuri pentru Reels și TikTok." },
  "course.get.skill.5": { ru: "Работать с AI-инструментами для создания контента.", en: "Use AI tools to create content.", ro: "Să folosești instrumente AI pentru crearea conținutului." },
  "course.get.skill.6": { ru: "Оформлять Instagram-профили.", en: "Build professional Instagram profiles.", ro: "Să configurezi profiluri profesionale de Instagram." },
  "course.get.skill.7": { ru: "Создавать продающие Stories.", en: "Create Stories that convert.", ro: "Să creezi Stories care vând." },
  "course.get.skill.8": { ru: "Писать тексты для брендов.", en: "Write copy for brands.", ro: "Să scrii texte pentru branduri." },
  "course.get.skill.9": { ru: "Запускать продвижение и понимать основы рекламы.", en: "Launch promotions and understand advertising fundamentals.", ro: "Să lansezi campanii de promovare și să înțelegi bazele publicității." },
  "course.get.skill.10": { ru: "Общаться с клиентами и вести проекты.", en: "Communicate with clients and manage projects.", ro: "Să comunici cu clienții și să gestionezi proiecte." },
  "course.get.skill.11": { ru: "Формировать стоимость своих услуг.", en: "Set the right price for your services.", ro: "Să stabilești prețul corect pentru serviciile tale." },
  "course.get.skill.12": { ru: "Создать собственное портфолио.", en: "Build your own portfolio.", ro: "Să-ți creezi propriul portofoliu." },
  "course.get.skill.13": { ru: "Продвигать себя как SMM-специалиста.", en: "Promote yourself as an SMM specialist.", ro: "Să te promovezi ca specialist SMM." },
  "course.get.skill.14": { ru: "Найти первых клиентов и начать работать в профессии.", en: "Find your first clients and start your SMM career.", ro: "Să găsești primii clienți și să-ți începi cariera în SMM." },
  // Format
  "course.fmt.title": { ru: "ФОРМАТ", en: "FORMAT", ro: "FORMAT" },
  "course.fmt.dates": { ru: "ДАТЫ УТОЧНЯЮТСЯ", en: "DATES TBA", ro: "DATELE URMEAZĂ" },
  "course.fmt.place": { ru: "ОФЛАЙН · КИШИНЁВ", en: "OFFLINE · CHISINAU", ro: "OFFLINE · CHIȘINĂU" },
  "course.fmt.spots": { ru: "ТОЛЬКО 20 МЕСТ", en: "ONLY 20 SEATS", ro: "DOAR 20 LOCURI" },
  "course.fmt.lang": { ru: "RU · RO", en: "RU · RO", ro: "RU · RO" },
  "course.fmt.date.label": { ru: "ДАТЫ", en: "DATES", ro: "DATE" },
  "course.fmt.date.value": { ru: "7–11 сентября", en: "September 7–11", ro: "7–11 septembrie" },
  "course.fmt.practice.label": { ru: "ПРАКТИЧЕСКИЕ ДНИ", en: "PRACTICE DAYS", ro: "ZILE PRACTICE" },
  "course.fmt.practice.value": { ru: "12–14 сентября", en: "September 12–14", ro: "12–14 septembrie" },
  "course.fmt.graduation.label": { ru: "ВЫПУСКНОЙ", en: "GRADUATION", ro: "FESTIVITATEA DE ABSOLVIRE" },
  "course.fmt.graduation.value": { ru: "15 сентября · PARTY", en: "September 15 · PARTY", ro: "15 septembrie · PARTY" },
  "course.fmt.booking.label": { ru: "БРОНЬ КУРСА", en: "COURSE DEPOSIT", ro: "REZERVAREA CURSULUI" },
  "course.fmt.booking.value": { ru: "250€", en: "€250", ro: "250€" },
  // Price
  "course.price.title": { ru: "СТОИМОСТЬ", en: "PRICE", ro: "PREȚ" },
  "course.price.std": { ru: "STANDARD", en: "STANDARD", ro: "STANDARD" },
  "course.price.std.amount": { ru: "€500", en: "€500", ro: "€500" },
  "course.price.std.note": { ru: "ОБЫЧНАЯ ЦЕНА", en: "REGULAR PRICE", ro: "PREȚ OBIȘNUIT" },
  "course.price.pro": { ru: "PRO", en: "PRO", ro: "PRO" },
  "course.price.pro.amount": { ru: "€750", en: "€750", ro: "€750" },
  "course.price.pro.note": { ru: "ПРОДВИНУТЫЙ ПАКЕТ", en: "ADVANCED PACKAGE", ro: "PACHET AVANSAT" },
  "course.price.elite": { ru: "ELITE", en: "ELITE", ro: "ELITE" },
  "course.price.elite.amount": { ru: "€1000", en: "€1000", ro: "€1000" },
  "course.price.elite.note": { ru: "ПРЕМИУМ ПАКЕТ", en: "PREMIUM PACKAGE", ro: "PACHET PREMIUM" },
  "course.price.cta": { ru: "ЗАБРОНИРОВАТЬ →", en: "BOOK →", ro: "REZERVĂ →" },
  "course.price.outcome.before": {
    ru: "После окончания курса вы уйдёте не только с ",
    en: "By the end of the course, you will leave not only with a ",
    ro: "La finalul cursului vei pleca nu doar cu o ",
  },
  "course.price.outcome.diploma": { ru: "дипломом", en: "certificate", ro: "diplomă" },
  "course.price.outcome.middle": {
    ru: ", но и с готовым набором инструментов для ",
    en: ", but also with a complete toolkit to ",
    ro: ", ci și cu un set complet de instrumente pentru a ",
  },
  "course.price.outcome.end": { ru: "старта в SMM", en: "start working in SMM", ro: "începe să lucrezi în SMM" },
  // Includes / excludes labels
  "course.price.includes": { ru: "ЧТО ВХОДИТ", en: "WHAT'S INCLUDED", ro: "CE INCLUDE" },
  "course.price.excludes": { ru: "НЕ ВХОДИТ", en: "NOT INCLUDED", ro: "NU ESTE INCLUS" },
  // Standard
  "course.price.std.inc.1": {
    ru: "5 дней офлайн-обучения",
    en: "5 days of offline training",
    ro: "5 zile de training offline",
  },
  "course.price.std.inc.2": {
    ru: "Полная теоретическая программа",
    en: "Full theoretical program",
    ro: "Programă teoretică completă",
  },
  "course.price.std.inc.3": {
    ru: "Рабочая тетрадь",
    en: "Workbook",
    ro: "Caiet de lucru",
  },
  "course.price.std.inc.4": {
    ru: "Все презентации и материалы",
    en: "All presentations and materials",
    ro: "Toate prezentările și materialele",
  },
  "course.price.std.inc.5": {
    ru: "Домашние задания",
    en: "Homework assignments",
    ro: "Teme de casă",
  },
  "course.price.std.inc.6": {
    ru: "Закрытый чат участников",
    en: "Private participant chat",
    ro: "Chat privat al participanților",
  },
  "course.price.std.inc.7": {
    ru: "Диплом о прохождении курса",
    en: "Certificate of completion",
    ro: "Diplomă de absolvire",
  },
  // Pro
  "course.price.pro.inc.1": {
    ru: "Всё, что входит в STANDARD",
    en: "Everything included in STANDARD",
    ro: "Tot ce este inclus în STANDARD",
  },
  "course.price.pro.inc.2": {
    ru: "3 дополнительных дня практики на реальных проектах",
    en: "3 extra days of practice on real projects",
    ro: "3 zile suplimentare de practică pe proiecte reale",
  },
  "course.price.pro.inc.3": {
    ru: "Оффлайн занятие с TikTok-менеджером",
    en: "Offline session with a TikTok manager",
    ro: "Sesiune offline cu un manager TikTok",
  },
  "course.price.pro.inc.4": {
    ru: "Оффлайн занятие с видеоператором",
    en: "Offline session with a videographer",
    ro: "Sesiune offline cu un operator video",
  },
  "course.price.pro.inc.5": {
    ru: "Практические съёмки для бизнеса",
    en: "Practical shoots for business",
    ro: "Filmări practice pentru business",
  },
  "course.price.pro.inc.6": {
    ru: "Работа с реальными кейсами",
    en: "Work with real case studies",
    ro: "Lucru cu studii de caz reale",
  },
  "course.price.pro.inc.7": {
    ru: "Создание собственного портфолио",
    en: "Build your own portfolio",
    ro: "Crearea propriului portofoliu",
  },
  "course.price.pro.inc.8": {
    ru: "Индивидуальная обратная связь по домашним заданиям",
    en: "Individual feedback on homework",
    ro: "Feedback individual la temele de casă",
  },
  "course.price.pro.inc.9": {
    ru: "Разбор вашего Instagram-профиля",
    en: "Review of your Instagram profile",
    ro: "Analiza profilului tău Instagram",
  },
  "course.price.pro.inc.10": {
    ru: "Персональные рекомендации по развитию в профессии",
    en: "Personal recommendations for professional growth",
    ro: "Recomandări personale pentru dezvoltarea în profesie",
  },
  "course.price.pro.inc.11": {
    ru: "Диплом о прохождении курса",
    en: "Certificate of completion",
    ro: "Diplomă de absolvire",
  },
  // Elite
  "course.price.elite.inc.1": {
    ru: "Всё, что входит в PRO",
    en: "Everything included in PRO",
    ro: "Tot ce este inclus în PRO",
  },
  "course.price.elite.inc.2": {
    ru: "Личное сопровождение в течение 1 месяца после окончания курса",
    en: "Personal support for 1 month after the course",
    ro: "Suport personal timp de 1 lună după curs",
  },
  "course.price.elite.inc.3": {
    ru: "Участие в реальных коммерческих съёмках вместе с моей командой",
    en: "Participation in real commercial shoots with my team",
    ro: "Participare la filmări comerciale reale împreună cu echipa mea",
  },
  "course.price.elite.inc.4": {
    ru: "Практический опыт работы с брендами и клиентами",
    en: "Practical experience working with brands and clients",
    ro: "Experiență practică cu branduri și clienți",
  },
  "course.price.elite.inc.5": {
    ru: "Помощь в создании сильного портфолио",
    en: "Help creating a strong portfolio",
    ro: "Ajutor la crearea unui portofoliu puternic",
  },
  "course.price.elite.inc.6": {
    ru: "Индивидуальная обратная связь на протяжении месяца",
    en: "Individual feedback throughout the month",
    ro: "Feedback individual pe parcursul lunii",
  },
  "course.price.elite.inc.7": {
    ru: "Приоритетная поддержка по вопросам клиентов и проектов",
    en: "Priority support for client and project questions",
    ro: "Suport prioritar pentru întrebări despre clienți și proiecte",
  },
  "course.price.elite.inc.8": {
    ru: "Возможность пройти стажировку и получить предложение о работе в моей команде",
    en: "Opportunity to intern and receive a job offer in my team",
    ro: "Posibilitatea de a face internship și de a primi o ofertă de muncă în echipa mea",
  },
  "course.price.elite.inc.9": {
    ru: "Диплом о прохождении курса",
    en: "Certificate of completion",
    ro: "Diplomă de absolvire",
  },
  // Who (Для кого)
  "course.who.title": { ru: "Для кого", en: "WHO IT'S FOR", ro: "PENTRU CINE" },
  "course.who.media.title": { ru: "МЕДИА", en: "MEDIA", ro: "MEDIA" },
  "course.who.media.text": {
    ru: "Для людей из медиа, которые хотят новую профессию в SMM.",
    en: "For media professionals who want a new profession in SMM.",
    ro: "Pentru profesioniștii din media care doresc o nouă profesie în SMM.",
  },
  "course.who.business.title": { ru: "ПРЕДПРИНИМАТЕЛИ", en: "ENTREPRENEURS", ro: "ANTREPRENORI" },
  "course.who.business.text": {
    ru: "Для предпринимателей, которые хотят знать, как правильно собрать команду и контролировать работу SMM.",
    en: "For entrepreneurs who want to know how to properly build a team and manage SMM work.",
    ro: "Pentru antreprenori care doresc să știe cum să construiască corect o echipă și să gestioneze munca SMM.",
  },
  "course.who.creators.title": { ru: "КРЕАТОРЫ И БЛОГЕРЫ", en: "CREATORS & BLOGGERS", ro: "CREATORI ȘI BLOGGERI" },
  "course.who.creators.text": {
    ru: "Для контент-креаторов и блогеров, которые хотят вырасти и увеличить чек.",
    en: "For content creators and bloggers who want to grow and increase their earnings.",
    ro: "Pentru creatorii de conținut și bloggeri care vor să crească și să-și mărească veniturile.",
  },
  "course.who.marketers.title": { ru: "МАРКЕТОЛОГИ", en: "MARKETERS", ro: "MARKETERI" },
  "course.who.marketers.text": {
    ru: "Для маркетологов и специалистов, желающих повысить свою квалификацию.",
    en: "For marketers and specialists who want to improve their qualifications.",
    ro: "Pentru marketeri și specialiști care doresc să-și îmbunătățească calificarea.",
  },
  "course.who.freelance.title": { ru: "FREELANCE", en: "FREELANCE", ro: "FREELANCE" },
  "course.who.freelance.text": {
    ru: "Для тех, кто хочет работать в свободном графике или стать частью маркетинговой команды.",
    en: "For those who want to work on a flexible schedule or become part of a marketing team.",
    ro: "Pentru cei care vor să lucreze în program flexibil sau să devină parte a unei echipe de marketing.",
  },
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
  "course.final.booking": { ru: "Бронь курса · 250€ →", en: "Reserve your place · €250 →", ro: "Rezervă locul · 250€ →" },
  "notFound.title": { ru: "Страница не найдена", en: "Page not found", ro: "Pagina nu a fost găsită" },
  "notFound.home": { ru: "Вернуться на главную", en: "Return to home", ro: "Înapoi la pagina principală" },
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
  const [lang, setLang] = useState<Lang>(() => {
    const saved = window.localStorage.getItem("language");
    return saved === "ru" || saved === "en" || saved === "ro" ? saved : "ru";
  });

  useEffect(() => {
    window.localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  }, [lang]);

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

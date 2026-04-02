import { useLang } from "@/context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();
  const langs = ["RU", "EN", "RO"] as const;
  const langMap = { RU: "ru", EN: "en", RO: "ro" } as const;

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-4 mix-blend-difference">
      {langs.map((l) => (
        <button
          key={l}
          onClick={() => setLang(langMap[l])}
          className={`lang-switch ${lang === langMap[l] ? "active" : "text-foreground/50"}`}
        >
          {l}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;

import { useLang } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 px-6 lg:px-16 py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Contact label */}
        <div className="lg:col-span-3">
          <p className="text-brutal-sm text-muted-foreground mb-6">{t("footer.contact")}</p>
        </div>

        {/* Links */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link text-brutal-md text-foreground hover:text-accent transition-colors duration-300 w-fit"
          >
            {t("footer.ig")}
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link text-brutal-md text-foreground hover:text-accent transition-colors duration-300 w-fit"
          >
            {t("footer.tg")}
          </a>
          <a
            href="https://wa.me/971000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-link text-brutal-md text-foreground hover:text-accent transition-colors duration-300 w-fit"
          >
            {t("footer.wa")}
          </a>
        </div>

        {/* Rights */}
        <div className="lg:col-span-3 lg:text-right flex flex-col justify-end">
          <p className="text-brutal-sm text-muted-foreground">
            © {year}
          </p>
          <p className="text-brutal-sm text-muted-foreground mt-1">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const SceneBooking = () => {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", ig: "", biz: "" });

  const steps = [
    { key: "name", label: t("booking.step1"), placeholder: t("booking.placeholder.name") },
    { key: "ig", label: t("booking.step2"), placeholder: t("booking.placeholder.ig") },
    { key: "biz", label: t("booking.step3"), placeholder: t("booking.placeholder.biz") },
  ] as const;

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
  };

  const handleSubmit = () => {
    const msg = `Имя: ${form.name}\nInstagram: ${form.ig}\nБизнес: ${form.biz}`;
    window.open(`https://wa.me/971000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="booking" className="scene-full flex flex-col justify-center min-h-screen px-6 lg:px-16">
      <AnimatePresence mode="wait">
        {step < 3 && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brutal-sm text-muted-foreground mb-8">
              0{step + 1} / 03
            </p>
            <label className="text-brutal-lg text-foreground block mb-8">
              {steps[step].label}
            </label>
            <input
              type="text"
              placeholder={steps[step].placeholder}
              value={form[steps[step].key]}
              onChange={(e) => setForm({ ...form, [steps[step].key]: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (step < 2) handleNext();
                  else handleSubmit();
                }
              }}
              className="w-full bg-transparent border-b-2 border-foreground/20 focus:border-accent text-foreground text-brutal-md py-4 outline-none transition-colors"
              autoFocus
            />
            <div className="mt-12">
              {step < 2 ? (
                <span
                  onClick={handleNext}
                  className="cta-link text-brutal-sm text-foreground/60 hover:text-accent cursor-pointer"
                >
                  → NEXT
                </span>
              ) : (
                <span
                  onClick={handleSubmit}
                  className="cta-link text-brutal-sm text-accent-red cursor-pointer"
                >
                  {t("booking.send")}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SceneBooking;

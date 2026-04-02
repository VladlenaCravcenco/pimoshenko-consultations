import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { format, addDays, isBefore, startOfDay } from "date-fns";

const timeSlots = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

const SceneBooking = () => {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", ig: "", biz: "" });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const today = startOfDay(new Date());
  const availableDays = Array.from({ length: 14 }, (_, i) => addDays(today, i + 1));

  const textSteps = [
    { key: "name" as const, label: t("booking.step1"), placeholder: t("booking.placeholder.name") },
    { key: "ig" as const, label: t("booking.step2"), placeholder: t("booking.placeholder.ig") },
    { key: "biz" as const, label: t("booking.step3"), placeholder: t("booking.placeholder.biz") },
  ];

  const handleNext = () => setStep((s) => s + 1);

  const handlePay = () => {
    const dateStr = selectedDate ? format(selectedDate, "dd.MM.yyyy") : "";
    const msg = `Имя: ${form.name}\nInstagram: ${form.ig}\nБизнес: ${form.biz}\nДата: ${dateStr}\nВремя: ${selectedTime}`;
    window.open(`https://wa.me/971000000000?text=${encodeURIComponent(msg)}`, "_blank");
  };

  // Steps: 0-2 = text fields, 3 = date, 4 = time, 5 = pay
  const totalSteps = 5;

  return (
    <section id="booking" className="scene-full flex flex-col justify-center min-h-screen px-6 lg:px-16">
      <AnimatePresence mode="wait">
        {/* Text steps */}
        {step < 3 && (
          <motion.div
            key={`text-${step}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brutal-sm text-muted-foreground mb-8">
              0{step + 1} / 0{totalSteps}
            </p>
            <label className="text-brutal-lg text-foreground block mb-8">
              {textSteps[step].label}
            </label>
            <input
              type="text"
              placeholder={textSteps[step].placeholder}
              value={form[textSteps[step].key]}
              onChange={(e) => setForm({ ...form, [textSteps[step].key]: e.target.value })}
              onKeyDown={(e) => e.key === "Enter" && handleNext()}
              className="w-full bg-transparent border-b-2 border-foreground/20 focus:border-accent text-foreground text-brutal-md py-4 outline-none transition-colors"
              autoFocus
            />
            <div className="mt-12">
              <span onClick={handleNext} className="cta-link text-brutal-sm text-foreground/60 hover:text-accent cursor-pointer">
                → {t("booking.next")}
              </span>
            </div>
          </motion.div>
        )}

        {/* Date step */}
        {step === 3 && (
          <motion.div
            key="date"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brutal-sm text-muted-foreground mb-8">
              04 / 0{totalSteps}
            </p>
            <label className="text-brutal-lg text-foreground block mb-12">
              {t("booking.date")}
            </label>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
              {availableDays.map((day) => {
                const isSelected = selectedDate && format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
                return (
                  <button
                    key={day.toISOString()}
                    onClick={() => setSelectedDate(day)}
                    className={`py-4 px-2 border text-center transition-colors duration-200 ${
                      isSelected
                        ? "border-accent bg-accent-red text-foreground"
                        : "border-foreground/10 text-foreground/60 hover:border-foreground/40"
                    }`}
                  >
                    <span className="text-brutal-sm block">{format(day, "dd")}</span>
                    <span className="text-[0.6rem] uppercase tracking-wider text-muted-foreground block mt-1">
                      {format(day, "EEE")}
                    </span>
                  </button>
                );
              })}
            </div>
            {selectedDate && (
              <div className="mt-12">
                <span onClick={handleNext} className="cta-link text-brutal-sm text-foreground/60 hover:text-accent cursor-pointer">
                  → {t("booking.next")}
                </span>
              </div>
            )}
          </motion.div>
        )}

        {/* Time step */}
        {step === 4 && (
          <motion.div
            key="time"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-brutal-sm text-muted-foreground mb-8">
              05 / 0{totalSteps}
            </p>
            <label className="text-brutal-lg text-foreground block mb-12">
              {t("booking.time")}
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-6 border text-center transition-colors duration-200 ${
                      isSelected
                        ? "border-accent bg-accent-red text-foreground"
                        : "border-foreground/10 text-foreground/60 hover:border-foreground/40"
                    }`}
                  >
                    <span className="text-brutal-md">{slot}</span>
                  </button>
                );
              })}
            </div>
            {selectedTime && (
              <div className="mt-12">
                <span onClick={handlePay} className="cta-link text-brutal-md text-accent-red cursor-pointer">
                  {t("booking.pay")}
                </span>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SceneBooking;

"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "What conditions do you treat?",
    a: "Dr. Montgomery specializes in a broad range of cardiac conditions including coronary artery disease, heart failure, arrhythmias (atrial fibrillation, SVT), hypertension, valvular heart disease, and preventive cardiology. He also manages complex cases requiring advanced imaging and intervention planning.",
  },
  {
    q: "Do I need an appointment or can I walk in?",
    a: "We strongly recommend booking an appointment to ensure you receive dedicated, unrushed care. However, we maintain slots for urgent cases - please call our office if you have an acute concern and we'll do our best to see you the same day.",
  },
  {
    q: "Do you offer teleconsultation?",
    a: "Yes. We offer secure video consultations for follow-up visits, medication reviews, and second opinions. Teleconsultation is available Monday through Friday from 9 AM to 5 PM. You can book online and receive a secure link via email.",
  },
  {
    q: "What insurance plans are accepted?",
    a: "We work with most major insurance providers including Blue Cross Blue Shield, Aetna, UnitedHealth, Cigna, and Medicare. Please contact our billing department prior to your appointment to verify your specific plan and confirm coverage.",
  },
  {
    q: "How long is a typical consultation?",
    a: "Initial consultations are typically 45-60 minutes. Dr. Montgomery takes time to review your full history, conduct a thorough examination, and discuss all findings and options with you. Follow-up visits are usually 20-30 minutes.",
  },
  {
    q: "How do I prepare for my first visit?",
    a: "Please bring any previous ECG reports, echocardiograms, stress test results, or blood work from the past 12 months. A list of your current medications and supplements is also helpful. Arriving 10 minutes early to complete intake forms is appreciated.",
  },
];

export default function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-[13px] font-medium text-[#F3DE72] uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#111] dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-[15px] text-[#666] dark:text-white/50">
            Everything you need to know before your visit.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="flex flex-col gap-3"
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i + 0.2, duration: 0.5 }}
              className={`glass-card rounded-2xl border overflow-hidden transition-colors duration-200 ${
                open === i
                  ? "border-[#F3DE72]/30 dark:border-[#F3DE72]/20"
                  : "border-black/[0.04] dark:border-white/[0.06]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span
                  className={`text-[15px] font-semibold transition-colors duration-200 ${
                    open === i ? "text-[#F3DE72]" : "text-[#111] dark:text-white"
                  }`}
                >
                  {faq.q}
                </span>
                <span
                  className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-200 ${
                    open === i
                      ? "bg-[#F3DE72] text-[#111]"
                      : "bg-black/[0.05] dark:bg-white/[0.07] text-[#666] dark:text-white/50"
                  }`}
                >
                  {open === i ? <Minus size={13} /> : <Plus size={13} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[14px] text-[#666] dark:text-white/50 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
